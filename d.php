<?php
$dsn = 'mysql:host=localhost;dbname=mtest;charset=utf8';
$user = 'root';
$password = '';

try {
    // Подключение к базе данных
    $pdo = new PDO($dsn, $user, $password, [
        //вкл исключения при ошибках, чтобы try-catch работал
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        //говорит PDO возвращать результат в виде ассоциативного массива
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    
    echo "Подключение успешно!" . PHP_EOL;
    
        $sql = "SELECT * FROM users LIMIT 1";
        // Выполнение запроса 
        $stmt = $pdo->query($sql);
        // Получение результатов запроса
        $users = $stmt->fetchAll();

        echo "<pre>";
        print_r($users);
        echo "</pre>";

    } catch (PDOException $e) {
        echo "Ошибка при выполнении SELECT: " . $e->getMessage();
        
        // Создание таблицы если SELECT не удался
        $createTableSql = "CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )";
        
        $pdo->exec($createTableSql);
        echo "Таблица users успешно создана!" . PHP_EOL;
    }



