/*Ahora debemos informar cuantas veces se ganó,
 perdió o empató desde la última recarga de página.*/

var imagenes = ["img/piedra.png", "img/papel.png", "img/tijera.png"];
var empates = 0;
var ganados = 0;
var perdidos = 0;

$(document).ready(function(){
	var $eleccionMaquina = $(".machine-image");
	var $piedraPapelTijera = $(".user-image");
	var $respuesta = $(".respuesta .text");
	var $animationImage = $(".animations-image .image");
	var $resultMessage = $(".result-message");
	var $reset = $(".reset button");

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

		$("#ganadas").val(ganados);
		$("#perdidas").val(perdidos);
		$("#empatadas").val(empates);
	});

	$reset.on("click", function(){
		$eleccionMaquina.attr('src', 'img/pregunton.png');

		$(".results-content input").each(function(input){
			input.value = "caca";
		});
	})

	function piedra(maquina){
		if (maquina == imagenes[0]) {
			$respuesta.text("Empate");
			$animationImage.attr('src','img/gato2.png');
			$resultMessage.text("Empate!");
			perdidos++;
		}else if (maquina == imagenes[1]){
			$respuesta.text("Perdedor");
			$resultMessage.text("Perdedor!");
			$animationImage.attr('src','img/gato3.png');
			empates++;
		}else{
			$respuesta.text("Ganador");
			$resultMessage.text("Ganador!");
			$animationImage.attr('src','img/gato1.png');
			ganados++;
		}
	}

	function papel(maquina){
		if (maquina == imagenes[0]) {
			$respuesta.text("Ganador");
			$resultMessage.text("Ganador!");
			$animationImage.attr('src','img/gato1.png');
			ganados++;
		}else if (maquina == imagenes[1]){
			$respuesta.text("Empate");
			$resultMessage.text("Empate!");
			$animationImage.attr('src','img/gato2.png');
			empates++;
		}else{
			$respuesta.text("Perdedor");
			$resultMessage.text("Perdedor!");
			$animationImage.attr('src','img/gato3.png');
			perdidos++;
		}
	}

	function tijera(maquina) {
		if (maquina == imagenes[0]) {
			$respuesta.text("Perdedor");
			$resultMessage.text("Perdedor!");
			$animationImage.attr('src','img/gato3.png');
			perdidos++;
		}else if (maquina == imagenes[1]){
			$respuesta.text("Ganador");
			$resultMessage.text("Ganador!");
			$animationImage.attr('src','img/gato1.png');
			ganados++;
		}else{
			$respuesta.text("Empate");
			$resultMessage.text("Empate!");
			$animationImage.attr('src','img/gato2.png');
			empates++;
		}
	}
});