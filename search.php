<?php
session_start();

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Read data from JSON file
$jsonData = file_get_contents('campsite.json');
$campsites = json_decode($jsonData, true)['campsite_en'];

$searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

// Filter campsites based on the search term
$filteredCampsites = [];
foreach ($campsites as $campsite) {
    if (empty($searchTerm) || stripos($campsite['name'], $searchTerm) !== false) {
        $filteredCampsites[] = $campsite;
    }
}

// Limit the number of results to 10
$limitedCampsites = array_slice($filteredCampsites, 0, 10);

$campsiteIDs = [];
$imageLinks = [];
$imageNames = [];

// Extract information from the filtered and limited campsites
foreach ($limitedCampsites as $campsite) {
    $campsiteIDs[] = $campsite['id'];
    $imageLinks[] = $campsite['img1'];
    $imageNames[] = $campsite['name'];
}

// Prepare the JSON response
$response = [
    'ids' => $campsiteIDs,
    'links' => $imageLinks,
    'names' => $imageNames,
];

// Output the JSON response
echo json_encode($response);
?>
