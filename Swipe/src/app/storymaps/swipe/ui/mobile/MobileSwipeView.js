define([], function(){
	return function MobileSwipeView(containerSelector, carouselSelector)
	{
		var _carousel = null;
		
		this.init = function(slides, bgColor)
		{
			setColor(bgColor);
			render(slides);
			initEvents(slides);
		}
		
		this.update = function(bgColor)
		{
			setColor(bgColor);
		}
		
		this.show = function()
		{
			$(containerSelector).show();
			_carousel.refreshSize();
			_carousel.goToPage(0);
		}
		
		function render(slides)
		{
			var nbSlides = 2;
			
			if( slides.length != nbSlides )
				return;
			
			// Create the carousel
			_carousel = new SwipeView(carouselSelector, {
				numberOfPages: nbSlides,
				loop: false
			});
			
			// Load initial data
			for (var i=0; i<nbSlides; i++) {
				var slide = slides[i];
				$(_carousel.masterPages[i+1]).html(slide);
			}
		}
		
		function initEvents(slides)
		{
			_carousel.onTouchStart(function(e) {
				//
			});

			_carousel.onFlip(function (e) {
				if (_carousel.currentMasterPage == 1) 
					$(containerSelector).find('.swiper').removeClass('left').addClass('right');
				else 
					$(containerSelector).find('.swiper').removeClass('right').addClass('left');
			});

			_carousel.onMoveOut(function () {
				//
			});
		}
		
		function setColor(bgColor)
		{
			$(containerSelector).css("background-color", bgColor);
		}
	}
});