<?php
if (isset(POST)) {
  error_reporting(0);

  $name = $_POST("name");
  $email = $_POST("email");
  $subject = $_POST("subject");
  $comments = $_POST("comments");

  $domain = $_SERVER("HTTP_HOST");
  $to = "carlangascamachobrigido@gmail.com";
  $subject_mail = "Contacto desde el formulario del sitio $domain: $subject";
  $message = "
  <p>
  Datos enviados desde el formulario del sitio <b>$domain</b>
  </p> 
  <ul>
    <li>Nombre: <b>$name</b></li>
    <li>Email: <b>$email</b></li>
    <li>Asunto: $subject</li>
    <li>Comentarios: $comments</li>
  </ul>
  ";
$headers = "MIME-Version: 1.0/n/r"."Content-type: text/html; charset=utf-8/n/r"."Form: Envio Automatico No Responder <no-reply@$domain>";
 

$send_mail = mail($to, $subject_mail, $message, $headers);

if ($send_mail){
  $res = {
    "err" => false,
    "message" => "Tus datos han sido enviados",
  };
} else {
  $res = {
    "err" => true,
    "message" => "Error al enviar tus datos, intenta nuevamente",
  };
}
//Esto no se procesara debido a que no tenemos un servidor con protocolo FTP (File Transfer Protocol)

// header("Access-Control-Allow-Origin *");  El asterisco significa que TU servidor va a recibir peticiones de cualquier dominio, y si, si gastas recursos de tu servidor xd
header("Access-Control-Allow-Origin https://jonmircha.com");
header("Content-type: application/json");
echo json_encode($res);
exit;  //Y nos dara un error debido a la politica de CORS xd, se soluciona poniendo una cabecera, esto noe s un error de sintaxis, si no debido a politicas y reglas de servidores externos. Algo que no te dicen en los servidores
}