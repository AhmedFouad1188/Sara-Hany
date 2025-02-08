<?php
header('Content-Type: application/json');

$conn = new mysqli('localhost', 'root', '', 'client-data');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$promocode = htmlspecialchars($_POST['promocode']);
$countrycode = htmlspecialchars($_POST['countrycode']);
$mobile = htmlspecialchars($_POST['mobile']);
$full_mobile_number = $countrycode . $mobile;

// Check if the promo code is valid
$valid_promo_code = "FIRST50"; // Define the valid promo code

$response = [];
if ($promocode === $valid_promo_code) {
    $check_stmt = $conn->prepare("SELECT used FROM requests WHERE promocode = ? AND mobile = ?");
    $check_stmt->bind_param("ss", $promocode, $full_mobile_number);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
        $check_stmt->bind_result($used);
        $check_stmt->fetch();

        if ($used) {
            $response['status'] = 'used';
        } else {
            $response['status'] = 'used';
        }
    } else {
        $response['status'] = 'valid';
    }

    $check_stmt->close();
} else { 
    $response['status'] = 'invalid'; // Ensure that invalid promo code is properly handled 
}

echo json_encode($response);

$conn->close();
?>