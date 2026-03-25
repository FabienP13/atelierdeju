<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
// header("Content-Type: application/json");

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

function json_error(string $message)
{
    echo json_encode([
        'success' => false,
        'error' => $message
    ]);
    exit;
}
function silent_success()
{
    echo json_encode(['success' => true]);
    exit;
}

function getClientIp(): string
{
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0];
    }
    if (!empty($_SERVER['HTTP_X_REAL_IP'])) {
        return $_SERVER['HTTP_X_REAL_IP'];
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

/********************************
 * DEBUT VERIFICATION ANTI-SPAM *
 ********************************/

// Vérification présence BOT 
if (!empty($_POST['website'])) {
    silent_success();
}

// Vérification durée de remplissage formulaire
$formTime = isset($_POST['form_time']) ? (int)$_POST['form_time'] : 0;

if ($formTime === 0 || (time() - $formTime) < 3) {
    silent_success();
}

//Vérification Rate Limiting par IP
$ip = getClientIp();

$dir = __DIR__ . '/storage/rate-limit';
if (!is_dir($dir)) {
    mkdir($dir, 0777, true);
}

$file = $dir . '/' . md5($ip);
$delay = 30;
$now = time();

if (file_exists($file)) {
    $last = (int)file_get_contents($file);
    if (($now - $last) < $delay) {
        silent_success();
    }
}

file_put_contents($file, $now);
/******************************
 * FIN VERIFICATION ANTI-SPAM *
 ******************************/

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_error('Méthode non autorisée');
}


$name      = trim($_POST['nom'] ?? '');
$telephone = preg_replace('/\D/', '', $_POST['telephone'] ?? '');
$email     = trim($_POST['email'] ?? '');
$message   = trim(htmlspecialchars($_POST['message'] ?? ''));

// 🔹 Présence
if (!$name || !$telephone || !$email || !$message) {
    json_error('Tous les champs sont obligatoires');
}


// 🔹 Validations
if (!preg_match('/^[\p{L}]+(?:[\s-][\p{L}]+)*$/u', $name)) {
    json_error('Nom invalide');
}

if (strlen($telephone) !== 10) {
    json_error('Numéro de téléphone invalide');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_error('Adresse email invalide');
}

if (strlen($message) < 10 || strlen($message) > 1000) {
    json_error('Message invalide');
}

$mail = new PHPMailer(true);

try {
    // 🔹 SMTP OVH
    $mail->isSMTP();
    $mail->SMTPAuth   = true;
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->Port = $_ENV['SMTP_PORT'];
    $mail->Username = $_ENV['SMTP_USER'];
    $mail->Password = $_ENV['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->CharSet    = 'UTF-8';
    $mail->isHTML(true);
    $mail->Body = nl2br(htmlspecialchars($message));
    $mail->AltBody = $message;
    $bodyHtml = "
<strong>Nom :</strong> {$name}<br>
<strong>Téléphone :</strong> {$telephone}<br>
<strong>Email :</strong> {$email}<br><br>
<strong>Message :</strong><br>
" . nl2br(htmlspecialchars($message));

    $mail->Body = $bodyHtml;

    $mail->AltBody =
        "Nom : $name\n" .
        "Téléphone : $telephone\n" .
        "Email : $email\n\n" .
        "Message :\n$message";

    // 🔹 Expéditeur
    $mail->setFrom($_ENV['SMTP_USER'], 'Atelier de Ju - Formulaire de contact');

    // 🔹 Destinataire
    $mail->addAddress($_ENV['SMTP_USER']);

    // 🔹 Réponse à
    $mail->addReplyTo($email, $name);

    // 🔹 Contenu

    $mail->Subject = '📩 Nouveau message de ' . $name . ' le ' . date('d/m/Y');

    $mail->send();

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => 'Erreur lors de l’envoi du message'
    ]);
}
