$(document).ready(function(){
	var respuesta;
	var $firstNumber = $(".first-number");
	var $operator = $(".operator");
	var $secondNumber = $(".second-number");
	var $startButton = $(".start-button");
	var $verifyButton = $(".verify-button");
	var $userMessage = $('.user-message');
	var $respuesta = $("#Respuesta");
	var operators = ["+","-","/","*"];

	$startButton.on('click', function(){
		CounterInit(5);
		$verifyButton.prop('disabled', false);
		$userMessage.text("Vamos, es una cuenta fácil!");
		$startButton.text("Siguiente cuenta");
		$firstNumber.val(Math.floor(Math.random() * 10));
		$secondNumber.val(Math.floor(Math.random() * 10));
		$operator.val(operators[Math.floor(Math.random()*4)]);

		var respuesta = eval($firstNumber.val() + $operator.val() + $secondNumber.val());
	});

	$verifyButton.on('click', function(){

		if (parseInt($respuesta.val()) == respuesta) {
			$userMessage.text("Respuesta correcta!");

		}else if($respuesta.val() == ""){
			$userMessage.text("Vamos, queda poco tiempo!");

		}else {
			$userMessage.text("Respuesta incorrecta");
		}

		$respuesta.val("");
	});
});
