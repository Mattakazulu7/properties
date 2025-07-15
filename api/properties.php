<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "localhost";
$user = "staracademy7975";
$pass = "Kathryn-bryn6@";
$db   = "fieldtrips";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

$sql = "SELECT * FROM properties ORDER BY id DESC";
$result = $conn->query($sql);

$properties = [];

while ($row = $result->fetch_assoc()) {
    $properties[] = $row;
}

echo json_encode($properties);
$conn->close();
