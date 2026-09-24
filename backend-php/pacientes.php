<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=utf-8");

require_once "conexion.php";

$sql = "SELECT id, nombre_mascota, especie, raza, propietario, servicio, fecha_atencion FROM pacientes_atendidos ORDER BY fecha_atencion DESC";
$resultado = $conexion->query($sql);

$pacientes = [];

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $pacientes[] = $fila;
    }
    echo json_encode($pacientes, JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(500);
    echo json_encode(["error" => "No se pudo obtener la información de los pacientes"]);
}

$conexion->close();
