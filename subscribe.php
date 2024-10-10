<?php

// Retrieve email from AJAX request
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];

// Send email
$to = $email;
$subject = "Subscription Confirmation";
$message = "Thank you for subscribing to MBeauty Cakes's newsletter!";
$headers = "From: mbeauty885912@gmail.com"; // Replace with your email

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}

?>
