<?php

require_once 'conexion.php';

$valid['success'] = array('success' => false, 'messages' => array());

if ($_POST) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $sql = "INSERT INTO tbl_cliente (nombre,email,telefono,mensaje,fecha)
    VALUES ('$name','$email','$phone','$message',NOW())";

    if ($connect->query($sql) === TRUE) {
        $valid['success'] = true;
        $valid['messages'] = "Mensaje Enviado";
        header('location:index.html?status=success');
    } else {
        $valid['success'] = false;
        $valid['messages'] = "Error al Enviar Mensaje";
        header('location:index.html?status=error');
    }

    $connect->close();

    echo json_encode($valid);
}
?>

