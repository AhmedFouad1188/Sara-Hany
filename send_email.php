<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['country']) && isset($_POST['countrycode']) && isset($_POST['mobile']) && isset($_POST['message'])) {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $country = htmlspecialchars($_POST['country']);
        $countrycode = htmlspecialchars($_POST['countrycode']);
        $mobile = htmlspecialchars($_POST['mobile']);
        $message = htmlspecialchars($_POST['message']);
        $budget = htmlspecialchars($_POST['budget']);
        $per = isset($_POST['per']) ? $_POST['per'] : 'Not specified';
        $promocode = htmlspecialchars($_POST['promocode']);

        // Concatenate country code and mobile number 
        $full_mobile_number = $countrycode . $mobile;

        // Database connection
        $conn = new mysqli('localhost', 'u677681161_sarahany', '!Yb5b4Ne', 'u677681161_requests');

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Insert data into requests table
        $stmt = $conn->prepare("INSERT INTO promocodes (name, email, country, mobile, promocode) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $name, $email, $country, $full_mobile_number, $promocode);

        if ($stmt->execute()) {
            echo "Data stored successfully.<br>";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Default email status message
        $emailStatusMessage = "Invalid or Not Used";

        // Check if the promo code is valid and not used
        $valid_promo_code = "FIRST50";
        $check_stmt = $conn->prepare("SELECT used FROM promocodes WHERE promocode = ? AND mobile = ?"); 
        $check_stmt->bind_param("ss", $promocode, $full_mobile_number); 
        $check_stmt->execute(); 
        $check_stmt->store_result();

        if ($promocode === $valid_promo_code) {
            if ($check_stmt->num_rows > 0) {
                $check_stmt->bind_result($used);
                $check_stmt->fetch();

                if ($used) {
                    $emailStatusMessage = "No Discount. This Client Had Used This Code Before.";
                } else {
                    $emailStatusMessage = "Discount Redeemed Successfully.";

                    // Update promo code status to used
                    $update_stmt = $conn->prepare("UPDATE promocodes SET used = TRUE WHERE name = ? AND email = ? AND country = ? AND mobile = ? AND promocode = ?");
                    $update_stmt->bind_param("sssss", $name, $email, $country, $full_mobile_number, $promocode);
                    $update_stmt->execute();

                    // Send SMS notification using OpenTextingOnline 
                    $url = "http://api.opentextingonline.com/send/?numbers=$full_mobile_number&message=Your%20promo%20code%20$promocode%20has%20been%20applied%20successfully."; 
                    
                    $ch = curl_init($url); 
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
                    $response = curl_exec($ch); 
                    curl_close($ch);
                    
                    echo "SMS sent successfully.<br>";
                }
            }
        } else {
            $emailStatusMessage = "This Code Is Invalid or Not Used.";
        }
        $check_stmt->close();

        // Send email notification using PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->SMTPDebug = 0;                                 // Disable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host       = 'smtp.hostinger.com';                      // Specify main and backup SMTP servers
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = 'requests@saracr8.com';         // SMTP username
            $mail->Password   = 'Sararequest@1';                  // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port       = 587;                              // TCP port to connect to

            // Recipients
            $mail->setFrom('requests@saracr8.com', 'Sara Cr8');     // Sender's email
            $mail->addAddress('requests@saracr8.com');           // Add a recipient (replace with your email)
            $mail->addReplyTo($email, $name);
            
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = "New Request From $name ($country)";
            $mail->Body    = "
                <!DOCTYPE html>
                <html>
                    <head>
                        <style>
                            body {
                                text-align: center;
                                color: black;
                                font-size: 20px;
                            }
                            h1 {
                                color: #2133e5;
                                font-size: 2.5rem;
                            }
                            div {
                                border-color: #2133e5;
                                border-style: dotted;
                                padding-left: 5vw;
                                padding-top: 2vw;
                            }
                            p {
                                font-size: 1.5rem;
                                text-align: left;
                            }
                            strong {
                                color: #e52174;
                                text-decoration: underline;
                                margin-right: 1vw;
                            }
                            footer {
                                padding-top: 2vw;
                            }
                        </style>
                    </head>
                    <body>
                        <header>
                            <h1>New Request From $name</h1>
                        </header>
                        <div>
                            <p><strong>Name:</strong> $name</p>
                            <p><strong>E-mail:</strong> $email</p>
                            <p><strong>Country:</strong> $country</p>
                            <p><strong>Mobile Number:</strong> $full_mobile_number</p>
                            <p><strong>Request:</strong> $message</p>
                            <p><strong>Budget:</strong> $budget</p>
                            <p><strong>Per:</strong> $per</p>
                            <p><strong>Promo Code:</strong> $promocode</p>
                            <p><strong>Promocode Status:</strong> $emailStatusMessage</p>
                        </div>
                        <footer>Sara Cr8 - 2025 - www.saracr8.com</footer>
                    </body>
                </html>";

            $mail->send();
            echo 'Email has been sent.';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

        $stmt->close();
        $conn->close();
    } else {
        echo "Mobile number or promo code is missing.";
    }
}
?>