/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

$(document).ready(function(){
	var respuesta;
	var $firstNumber = $(".first-number");
	var $operator = $(".operator");
	var $secondNumber = $(".second-number");
	var $responseButton = $(".response-button");
	var operators = ["+","-","/","*"];

	startGame();

	$responseButton.click(function(){

		if (parseInt($("#Respuesta").val()) == respuesta) {
			alert("Correcto!");
		}else{
			alert("Intente de nuevo!");
		}
	});

	function startGame(){
		$firstNumber.val(Math.floor(Math.random() * 10));
		$secondNumber.val(Math.floor(Math.random() * 10));
		$operator.val(operators[Math.floor(Math.random()*4)]);

		var respuesta = eval($firstNumber.val() + $operator.val() + $secondNumber.val());

		setTimeout(function(){
			alert("El tiempo acabo!");
			startGame();
		}, 5000);
	}

	//mejorar la llamada recursiva
});
