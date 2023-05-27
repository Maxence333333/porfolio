<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Configuration des informations de l'email
    $to = 'maxenceautefault@gmail.com';
    $subject = 'Nouveau message de contact';
    $body = "Nom: $name\nEmail: $email\nMessage: $message";

    // Envoi de l'email
    if (mail($to, $subject, $body)) {
        // L'email a été envoyé avec succès
        echo 'Votre message a été envoyé avec succès.';
    } else {
        // Une erreur s'est produite lors de l'envoi de l'email
        echo 'Une erreur s\'est produite lors de l\'envoi du message.';
    }
}
?>
