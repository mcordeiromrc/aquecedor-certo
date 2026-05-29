<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($phone) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'E-mail inválido']);
    exit;
}

$to = 'contato@aquecedorcerto.com.br';
$subject = 'Novo contato via site - AquecedorCerto';

$body = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    h2 { color: #ea580c; }
    table { border-collapse: collapse; width: 100%; }
    td { padding: 8px 12px; border-bottom: 1px solid #eee; }
    td:first-child { font-weight: bold; width: 100px; }
  </style>
</head>
<body>
  <h2>Novo contato do site</h2>
  <table>
    <tr><td>Nome</td><td>$name</td></tr>
    <tr><td>Telefone</td><td>$phone</td></tr>
    <tr><td>E-mail</td><td>$email</td></tr>
    <tr><td>Mensagem</td><td>$message</td></tr>
  </table>
  <hr>
  <p style='color: #999; font-size: 12px;'>Enviado pelo formulário de contato do site AquecedorCerto</p>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: contato@aquecedorcerto.com.br\r\n";
$headers .= "Reply-To: $email\r\n";

$success = mail($to, $subject, $body, $headers);

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro ao enviar mensagem. Tente novamente mais tarde.']);
}
