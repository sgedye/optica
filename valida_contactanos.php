<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

/*$mensaje = "Este mensaje fue enviado por " . $nombre . "\r\n";
$mensaje .= "Email de usuario: " . $email ." \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());*/

$mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
$mensaje.= "Email de usuario: " . $email ." \r\n\n";

$mensaje.="Mensaje: " . $_POST['mensaje'] . " \r\n\n";
$mensaje.="Enviado el: " . date('d/m/Y', time());
//echo $mensaje;


$para = 'info@opticamedicabuga.com';
$asunto = 'Contacto Optica Medica Buga';

mail($para, $asunto, utf8_decode($mensaje), $header);

if(mail("info@opticamedicabuga.com", $asunto, $mensaje)) {
  echo "<script type='text/javascript'>alert('Thank you for your message');</script>";
} else {
  echo "<script type='text/javascript'>alert('Unable to send message');</script>";
}
//echo "<META HTTP-EQUIV=\"Refresh\" CONTENT=\"0;URL=http://www.imagendelvalle.com/foro_bicentenario/foro_bicentenario.html\">"; 
// echo "<META HTTP-EQUIV=\"Refresh\" CONTENT=\"0;URL=http://www.opticamedicabuga.com/contactanos.php\">";
echo "<META HTTP-EQUIV=\"Refresh\" CONTENT=\"0;URL=http://www.opticamedicabuga.com/#contactanos\">";

?>