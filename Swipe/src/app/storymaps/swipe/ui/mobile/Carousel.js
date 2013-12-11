define(function(){
	/**
	 * Carousel
	 * @class Carousel
	 * 
	 * Mobile carousel under the map
	 */
	return function Carousel(selector, isInBuilderMode)
	{
		var _carousel = null;
		var _preventNextRefresh = false;
		var _mouseDownPosition = [0,0];
		var _this = this;
		
		this.started = false;
		this.needUpdate = false;
		
		this.init = function(slides, bgColor)
		{		
			render(slides);
			initEvents(slides);
			
			_this.setColor(bgColor);
			
			//dojo.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", updateSlide);
		}
		
		this.update = function(slides, bgColor)
		{
			_this.setColor(bgColor);
			
			// Completely destroy the previous carousel
			_carousel.destroy();
			$(selector + ' .carousel').empty();
			
			render(slides);
			initEvents(slides);
			_this.needUpdate = false;
		}
		
		this.setSelectedPoint = function(tourPointIndex)
		{
			if( ! _carousel )
				return;
			_this.started = true;

			// If the even originate from here, refreshing cause blinking
			//if( ! _preventNextRefresh ) {
				_carousel.refreshSize();
				_carousel.goToPage(tourPointIndex);
			//}
			//else
				//_preventNextRefresh = false;
		}
		
		this.setColor = function(bgColor)
		{
			$(selector + ' .carousel').css("background-color", bgColor[1]);
			$(selector + ' .builderMobile').css("background-color", bgColor[1]);
			
			var mainColors = ["#444", "#000", "#0e3867", "#1a3606"];
			var compColors = ["#828282", "#828282", "#9096a9", "#a8b09e"];
			var index = 0;
			$.each(mainColors, function(i){
				if(mainColors[i].match(bgColor[0]))
					index = i;
			})
			$('.seriesButton').css("background-color", compColors[index]);
		}
		
		this.setDescriptionView = function(title, description, showDescription){
			$('#seriesTitle').html(title);
			$('#seriesDescription').html(description);
			$('#seriesViewLabel').find('.seriesLabel').html(parseInt(app.bookmarkIndex)+1);
			if(showDescription)
				location.hash = "description";
			//else
				//showDescription = true;
		}
		
		function render(slides)
		{
			_carousel = new SwipeView(selector + ' .carousel', {
				numberOfPages: slides.length
			});
			_this.length = slides.length;

			// Load initial data
			var nbSlides = Math.min(3, Math.max(3, slides.length));
			for (var i=0; i<nbSlides; i++) {
				var index = slides.length == 1 ? 0 : (i == 0) ? slides.length - 1 : i - 1;
				var slide = slides[index];

				if( ! slide )
					continue;
								
				var title = slide.name;
				var description = slide.description
				
				var mainEl = document.createElement('div');
				mainEl.className = "tpPreview";

				var imgPane = document.createElement('div');
				imgPane.className = "tpImgPane";
				mainEl.appendChild(imgPane);

				var imgContainer = document.createElement('div');
				imgContainer.className = "tpImgContainer seriesButton";
				imgPane.appendChild(imgContainer);
				
				var label = document.createElement('p');
				label.className = "seriesLabel";
				var labelNumber = slides.indexOf(slide)+1;
				label.innerHTML = labelNumber;
				imgContainer.appendChild(label);

				var textPane = document.createElement('div');
				textPane.className = "tpTextPane";
				mainEl.appendChild(textPane);

				var nameEl = document.createElement('h4');
				nameEl.className = "tpName";
				nameEl.innerHTML = title || '';
				textPane.appendChild(nameEl);

				var descriptionEl = document.createElement('p');
				descriptionEl.className = "tpDescription previewDescription";
				descriptionEl.innerHTML = description || '';
				textPane.appendChild(descriptionEl);

				_carousel.masterPages[i].appendChild(mainEl);
			}
			
			setTimeout(function(){
				_this.setSelectedPoint(app.bookmarkIndex || 0);
			}, 250)
		}
		
		function initEvents(slides)
		{
			$(".tpPreview").click(function(e){
				if (Math.abs(e.clientX - _mouseDownPosition[0]) < 10 && Math.abs(e.clientY - _mouseDownPosition[1]) < 10) {
					var title = $(this).find('.tpName').html();
					var description = $(this).find('.tpDescription').html();
					var showDescription = true;
					_this.setDescriptionView(title, description, showDescription);
				}
			});
			
			$('#seriesTextView').click(function(){
				$('#seriesTextView').hide();
				$('#footerMobile').show();
				location.hash = "map";
			})
			
			// Save mouse position for later comparison to differenciate click and flip (or aborted flip) events
			$(selector + ' .carousel').mousedown(function(e){
				_mouseDownPosition = [e.clientX, e.clientY];
			});

			_carousel.onFlip(function(){
				// Reset content
				var nbSlides = Math.min(3, slides.length);
				for (var i=0; i<nbSlides; i++) {
					var page = _carousel.masterPages[i];
					var upcoming = page.dataset.upcomingPageIndex;
					
					if( ! slides[upcoming] )
						return;
					
					var name = slides[upcoming].name;
					var description = slides[upcoming].description
	
					if ( upcoming != page.dataset.pageIndex ) {
	
						var nameEl = page.querySelector('.tpName');
						nameEl.innerHTML = name;
						
						var descriptionEl = page.querySelector('.tpDescription');
						descriptionEl.innerHTML = description;
						
						var labelEl = page.querySelector('.seriesLabel');
						labelEl.innerHTML = (parseInt(upcoming)+1);
					}
				}
				
				if($("#footerMobile").is(':visible'))
					//_preventNextRefresh = true;
				dojo.publish("CAROUSEL_SWIPE", _carousel.pageIndex);
				
				/*if (app.data.getCurrentIndex() != -1 && app.data.getCurrentIndex() != _carousel.pageIndex) {
					_preventNextRefresh = true;
					dojo.publish("CAROUSEL_SWIPE", _carousel.pageIndex);
				}*/
			});
		}
		
		function updateSlide(param)
		{
			var node = $(selector + ' .carousel .swipeview-active');
			node.find('.tpName').html(param.name);
			node.find('.tpDescription').html(param.description);
			//node.find('.tpIcon').attr("src", MapTourHelper.getSymbolUrl(param.color, param.index + 1));
		}
	}
});