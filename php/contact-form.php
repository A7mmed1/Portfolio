<?php
    //Import the PHPMailer class into the global namespace
    //use PHPMailer\PHPMailer\PHPMailer;
    // require_once 'mailer/class.phpmailer.php';

    require '../lib/PHPMailer/PHPMailerAutoload.php';

    $out = array('error'=>null);

    function sendMail($post){

        $body = '';
        foreach($post as $k => $v){
            if(is_array($v)){
                $vOut = implode($v, ', ');
            } else {
                $vOut = $v;
            }

            $body .= '<p><strong>' . ucfirst($k) . ': </strong>' . $vOut . '</p>';

        }
        $mail = new PHPMailer;
        $mail->AddReplyTo($post['email'] , $post['name']);
        $mail->setFrom('noreply@ahmmed.info');

        $mail->addAddress('mohammed.a7mm@gmail.com');
        $mail->addAddress('ahmmedmohammed90x@hotmail.com');
        $mail->isHTML(true);
        $mail->Subject = 'Website Submission';
        $mail->Body = 'hey';

        if (!$mail->send()) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            echo "Message sent!";
        }
        //return $mail->Send();
    }

    if (isset($_POST)) {

        sendMail($_POST);

        // if(! sendMail($_POST)){
        //     echo json_encode(array(
        //         'status' => 'failed',
        //         'message' => 'Sorry! There was an error processing your submission. Please call us directly at (403) 667-3543'
        //     ));
        // }else{
        //     echo json_encode(array(
        //         'status' => 'success',
        //         'message' => 'Thanks! Your submission has been received. We\'ll get back to you shortly!'
        //
        //     ));
        // }

        exit;

    }

?>
