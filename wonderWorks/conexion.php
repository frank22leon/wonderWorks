<?php

$localhost = "localhost";
$username = "id22177081_wonder";
$password = "123789456fL*";
$dbname = "id22177081_bd_wws";

$connect = new mysqli($localhost, $username, $password, $dbname);

if ($connect->connect_error) {
    die("Conexion Fallida: " . $connect->connect_error);
}
