//jQuery Slider 
		
		//configuration
		var animationSpeed = 1000;
		var animationPause = 3000;
		var width = 720;
		var currentSlide=1;

		//DOM variables
		var $slider = $('#slider');
		var $slideContainer =  $slider.find('.slides');
		var $slideImgs = $slideContainer.find('.slide-img');

		var interval;

		//setInterval
		function startSlider(){
			interval = setInterval(function(){
				$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed , function(){
					currentSlide++;
					if(currentSlide === $slideImgs.length){
						currentSlide=1;
					$slideContainer.css('margin-left',0);
					}		
				});
			},animationPause);
		}
		function stopSlider(){
			clearInterval(interval);
		}

		//stop on mouseover
		//resume on mouseleave
		$slider.on('mouseenter' , stopSlider).on('mouseleave' , startSlider)
		startSlider();
	
