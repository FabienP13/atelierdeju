<?php 

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'error' => 'Méthode non autorisée'
    ]);
    exit;
}

$name = $_POST['nom'] ?? '';
$telephone = $_POST['telephone'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

if (!$name || !$email || !$message || !$telephone) {
    echo json_encode([
        'success' => false,
        'error' => 'Champs manquants'
    ]);
    exit;
}

// $mail = new PHPMailer(true);


echo json_encode([
        'success' => true,
        'data' => $message 
]);
// try {
//     // Config SMTP (exemple)
//     $mail->isSMTP();
//     $mail->Host = 'smtp.example.com';
//     $mail->SMTPAuth = true;
//     $mail->Username = 'test@example.com';
//     $mail->Password = 'password';
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
//     $mail->Port = 587;

//     $mail->setFrom($email, $name);
//     $mail->addAddress('contact@monsite.com');

//     $mail->Subject = 'Nouveau message de contact';
//     $mail->Body = $message;

//     $mail->send();

//     echo json_encode([
//         'success' => true
//     ]);
// } catch (Exception $e) {
//     echo json_encode([
//         'success' => false,
//         'error' => $mail->ErrorInfo
//     ]);
// }
