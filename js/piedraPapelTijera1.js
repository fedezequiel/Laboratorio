/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var imagenes = ["imagenes/piedra.jpg", "imagenes/papel.jpg", "imagenes/tijera.jpg"];

$(document).ready(function(){
	var $eleccionMaquina = $(".machine-image");
	var $piedraPapelTijera = $(".PiedraPapelTijera");
	var $respuesta = $(".respuesta .text");

	$piedraPapelTijera.click(function(){
		$eleccionMaquina.attr("src", imagenes[Math.floor(Math.random()*3)]);
	
		var maquina = $eleccionMaquina.attr("src");
		var jugador = $(this).attr("src");

		if (jugador == imagenes[0]) {
			piedra(maquina);
		}else if (jugador == imagenes[1]){
			papel(maquina);
		}else if (jugador == imagenes[2]){
			tijera(maquina);
		}
	});

	function piedra(maquina){
		if (maquina == imagenes[0]) {
			$respuesta.text("Empate");
		}else if (maquina == imagenes[1]){
			$respuesta.text("Perdedor");
		}else{
			$respuesta.text("Ganador");
		}
	}

	function papel(maquina){
		if (maquina == imagenes[0]) {
			$respuesta.text("Ganador");
		}else if (maquina == imagenes[1]){
			$respuesta.text("Empate");
		}else{
			$respuesta.text("Perdedor");
		}
	}

	function tijera(maquina) {
		if (maquina == imagenes[0]) {
			$respuesta.text("Perdedor");
		}else if (maquina == imagenes[1]){
			$respuesta.text("Ganador");
		}else{
			$respuesta.text("Empate");
		}
	}
});