<?php
session_start();

error_reporting(E_ALL);
ini_set('display_errors', 1);


$servername = "localhost";
$username = "projek";
$password = "K43rUL4_4rB0R";
$dbname = "caerula";

// Buat Koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek Koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

$sql = "SELECT * FROM campsite_en";

// Kalu searchnya empty, batasi 10 gambar
$sql .= !empty($searchTerm) ? " WHERE name LIKE ?" : " LIMIT 10";

$stmt = $conn->prepare($sql);

if (!empty($searchTerm)) {
    
    $searchPattern = "%$searchTerm%";
    $stmt->bind_param("s", $searchPattern);
}

$stmt->execute();
$result = $stmt->get_result();
// $result = $conn->query($sql);
$imageLinks = [];
// $imgName = [];

if ($result->num_rows > 0) {
    // Ambil link gambar
    while ($row = $result->fetch_assoc()) {
        $campsiteID[] = $row['id'];
        $imageLinks[] = $row['img1'];
        $imageName[] = $row['name'];
    }
}

$conn->close();
$stmt->close();

// echo json_encode($imageLinks);
echo json_encode(array('ids' => $campsiteID, 'links' => $imageLinks, 'names' => $imageName));
?>
