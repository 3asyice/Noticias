<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $to = "tylerdurden.jackslungcancer@gmail.com"; // Substitua pelo seu e-mail
    $subject = "Novo Arquivo Enviado";
    $message = "Você recebeu um novo arquivo.";
    $headers = "From: webmaster@example.com"; // Substitua pelo remetente desejado

    // Dados do arquivo
    $file = $_FILES['file'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];

    // Lê o arquivo
    $fileContent = file_get_contents($fileTmpName);
    $fileContent = chunk_split(base64_encode($fileContent));

    // Cria um limite para separar as partes do e-mail
    $boundary = md5(uniqid(time()));

    // Cabeçalhos do e-mail para anexar o arquivo
    $headers .= "\r\nMIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"";

    // Corpo do e-mail com a mensagem e o anexo
    $body = "--{$boundary}\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= "{$message}\r\n";
    $body .= "--{$boundary}\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"{$fileName}\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"{$fileName}\"\r\n\r\n";
    $body .= "{$fileContent}\r\n";
    $body .= "--{$boundary}--";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Arquivo enviado com sucesso!";
    } else {
        echo "Erro ao enviar o arquivo.";
    }
} else {
    echo "Nenhum arquivo enviado.";
}
?>
