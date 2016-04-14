$(document).ready(function(){

	var numeroSecreto; 
	var contadorIntentos = 0;
	var $startButton = $(".start-button");
	var $verifyButton = $(".verify-button");
	var $userMessage = $('.user-message');
	var $number = $(".number");
	var $intents = $(".intent");

    $startButton.click(function(){
    	var $testValue = $('.game-test .value');

    	if($startButton.text() == "Borrar"){
    		
    		$startButton.text("Comenzar");
    		$verifyButton.prop("disabled", true);
    		contadorIntentos = 0;
    		$intents.val("");

    	}else{

	    	$number.val("0");
	    	$verifyButton.prop('disabled', false);
    		$startButton.text("Borrar");
    		numeroSecreto = Math.floor(Math.random() * (101 - 1) + 1);
			$(".game-test").css('display', 'block');
			$testValue.text(numeroSecreto);
    	}
    });

    $verifyButton.click(function(){
    	contadorIntentos++;

		if(parseInt($number.val()) == numeroSecreto){

			$userMessage.text("Ha adivinado el número en "+contadorIntentos+" intentos, es un genio!");
			$startButton.text("Comenzar");
			$verifyButton.prop('disabled', true);
			contadorIntentos = 0;

		}else if($number.val() == ""){
			$userMessage.text("Vamos, ingrese un número!");

		}else {
			$userMessage.text("Intente de nuevo, no se rinda");
		}

		$number.val("");
		$intents.val(contadorIntentos);
    });
});