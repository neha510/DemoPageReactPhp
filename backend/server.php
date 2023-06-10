<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$host = 'localhost:3307'; // Replace with your MySQL host
$db = 'demoform'; // Replace with your database name
$user = 'root'; // Replace with your database username
$password = ''; // Replace with your database password

try {
    $connection = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];

    try {
        // Prepare and execute the database query
        $stmt = $connection->prepare("INSERT INTO users (name) VALUES (?)");
        $stmt->execute([$name]);

        // Return the newly created user's ID or any other response
        echo "User details saved successfully!";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
        exit;
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Prepare and execute the database query
        $stmt = $connection->query("SELECT * FROM users");
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Return the users data as JSON
        echo json_encode($users);
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
        exit;
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $data);
    $id = $data['id'];
    $name = $data['name'];

    try {
        // Prepare and execute the database query
        $stmt = $connection->prepare("UPDATE users SET name = ? WHERE id = ?");
        $stmt->execute([$name, $id]);

        echo "User details updated successfully!";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
        exit;
    }
}
?>
