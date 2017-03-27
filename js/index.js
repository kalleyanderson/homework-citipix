$(document).ready(function() {

//set city variable

var city = undefined

//set listener for user input

	$('#city-entry').submit(function() {

		//prevent form submission reloading page
		event.preventDefault();

		//delete previously set background images
		$('body').removeClass('nyc');
		$('body').removeClass('sf');
		$('body').removeClass('la');
		$('body').removeClass('austin');
		$('body').removeClass('sydney');
		
		//set city to the user imput
		var city = $('#city-type').val();
		
		//add class to reset the background image based on input
		if ((city === 'NYC') || (city === 'New York') || (city === 'New York City')) {
			$('body').addClass('nyc');
		}

		else if ((city === 'San Francisco') || (city === 'SF') || (city === 'Bay Area')){
			$('body').addClass('sf');
		}

		else if ((city === 'Los Angeles') || (city === 'LA') || (city === 'LAX')){
			$('body').addClass('la');
		}

		else if ((city === 'Austin') || (city === 'ATX')){
			$('body').addClass('austin');
		}

		else if ((city === 'Sydney') || (city === 'SYD')){
			$('body').addClass('sydney');
		}
	})



});