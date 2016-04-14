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

			$intents.val("0");
	    	$number.val("");
	    	$verifyButton.prop('disabled', false);
    		$startButton.text("Borrar");
    		numeroSecreto = Math.floor(Math.random() * (101 - 1) + 1);
			$(".game-test").css('display', 'block');
			$testValue.text(numeroSecreto);
    	}
    });

    $verifyButton.click(function(){

    	contadorIntentos++;

		if( parseInt($(".number").val()) == numeroSecreto ){

			switch(contadorIntentos) {
			    case 1:
			        $userMessage.text("Ha ganado, usted es un Psíquico!");
			        break;
			    case 2:
			        $userMessage.text("Ha ganado, excelente percepción!");
			        break;
	        	case 3:
			        $userMessage.text("Ha ganado, esto es suerte");
			        break;
		        case 4:
			        $userMessage.text("Ha ganado, excelente técnica!");
			        break;
		        case 5:
			        $userMessage.text("Ha ganado, usted está en la media");
			        break;
			    case 6:
			    case 7:
			    case 8:
			    case 9:
			    case 10:
					$userMessage.text("Ha ganado, falta técnica!");
			    	break;
			    default:
			        $userMessage.text("Afortunado en el amor, desafortunado en el juego");
			}
		}else if($(".number").val() == ""){
			$userMessage.text("Vamos, ingrese un número!");

		}else {
			$userMessage.text("Intente de nuevo, no se rinda");
		}

		$number.val("");
		$intents.val(contadorIntentos);
    });
});