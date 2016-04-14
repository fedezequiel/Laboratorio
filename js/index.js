$(document).ready(function(){
	var $signIn = $('#sign-in');
	var $button = $signIn.find('button');

	$button.on('click', function(){
		$signIn.addClass("slideUp-animation");

		setTimeout(function(){
			$signIn.css("display", "none");
		}, 400);
	});
});