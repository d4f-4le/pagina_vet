<?php

$servidor = "mysql-tuusuario.alwaysdata.net";
$usuario = "tuusuario";
$clave = "tu_clave";
$basedatos = "tuusuario_veterinaria";

$conexion = new mysqli($servidor, $usuario, $clave, $basedatos);

if ($conexion->connect_error) {
    http_response_code(500);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode(["error" => "No se pudo conectar a la base de datos"]);
    exit();
}

$conexion->set_charset("utf8mb4");
