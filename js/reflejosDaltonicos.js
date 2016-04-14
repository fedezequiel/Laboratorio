/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var backgrounds = ["blue", "yellow", "brown", "green", "skyblue", "red"];
var colors = ["Azul", "Amarillo", "Marrón", "Verde", "Celeste", "Rojo"];

$(document).ready(function(){
	var $colorElegido = $("#ColorElejido");
	var $starGame = $(".start-button");
	var $colorButton = $(".MiBotonUTNJuego");

	$starGame.click(function(){
		$colorElegido.css('color', backgrounds[Math.floor(Math.random() * 6)]);
		$colorElegido.val(colors[Math.floor(Math.random() * 6)]);

		var Example1 = new (function() {
		    var $stopwatch 
		    var incrementTime = 70; 
		    var currentTime = 0;
		    
		    updateTimer = function() {
		            $stopwatch.html(formatTime(currentTime));
		            currentTime += incrementTime / 10;
		    },
		        
		    init = function() {
		            $stopwatch = $('#stopwatch');
		            Example1.Timer = $.timer(updateTimer, incrementTime, true);
		    };

		    this.resetStopwatch = function() {
		        currentTime = 0;
		        this.Timer.stop().once();
		    };

		    $(init);
		});
	});

	$colorButton.click(function(){
		if ($(this).val().toLoweCase() == $colorElegido.val().toLoweCase()) {

		}
	})

	function pad(number, length) {
	    var str = '' + number;
	    while (str.length < length) {str = '0' + str;}
	    return str;
	}

	function formatTime(time) {
	    var min = parseInt(time / 6000),
	        sec = parseInt(time / 100) - (min * 60),
	        hundredths = pad(time - (sec * 100) - (min * 6000), 2);
	    return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
	}

});
