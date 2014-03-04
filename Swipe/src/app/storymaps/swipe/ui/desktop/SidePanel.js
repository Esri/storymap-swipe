define(["storymaps/swipe/core/WebApplicationData", 
		"esri/dijit/Legend", 
		"dojo/topic",
		"dojo/on",
		"dojo/dom",
		"dojo/dom-class"], 
	function(
		WebApplicationData, 
		Legend, 
		topic,
		on,
		dom,
		domClass
	){
	return function SidePanel(container, isInBuilderMode)
	{
		var _sidePanel = container;
		var _descriptionPanel = container.find("#descriptionPanel");
		var _descriptionContent = container.find("#descriptionContent");
		var _legendPanel = container.find("#legendPanel");
		var _legendTitle = container.find("#legendTitle");
		
		var _description = "";
		var _widthPort = null;
		var _layer = null;
		var _layout = null;
		var _dataModel = null;
		
		var _isDescription = null;
		var _isLegend = null;
		
		var _this = this;
		
		this.init = function(description, bgColor, headerColor, isDescription, isLegend, layer, isSeries, layout, dataModel)
		{	
			_layer = layer;
			_layout = layout;
			_dataModel = dataModel;
			_isDescription = isDescription;
			_isLegend = isLegend;
			_isSeries = isSeries;
			if (_dataModel == null)
				_dataModel = "TWO_LAYERS"
			_dataModel == "TWO_LAYERS" ? app.mainMap = app.map : app.mainMap = app.maps[0];
			container.height(app.mainMap.height);
			if (isInBuilderMode && isDescription && !_isSeries) {
				$(_descriptionContent).addClass('builder');
				var descriptionArea = new nicEditor({
					buttonList: ['fontSize', 'fontFamily', 'bold', 'italic', 'underline', 'left', 'center', 'right', 'ul', 'link', 'html']
				});
				$('#textEditPanel').addClass('builder');
				descriptionArea.setPanel('textEditPanel');
				descriptionArea.addInstance('descriptionContentInner');
				_description = description;
				descriptionArea.addEvent('focus', function(){
					descriptionArea.addEvent('blur', _this.checkDescription);
				});
				//IE9 fun.  Panel is rendered super narrow if you don't set it
				$('.nicEdit-main').parent().css('width', '342px');
				$('.nicEdit-main').css('width', '330px');
				
				$('.nicEdit-main').parent().css('border', 'none');
				on($(' .nicEdit-panel').children().last().children().children().children(), 'click', function(){
					if($('#href').siblings()[0]){
						$('#href').siblings()[0].addClass('hrefLabel');
						$('#href').addClass('href');
					}
					if($('#title').siblings()[0])	
						$('#title').siblings()[0].addClass('hrefLabel');
				});
			}
			setColor(bgColor, headerColor);
			render(description, isDescription, isLegend);	
			on(dom.byId("sidePanelTabImg"), 'click', toggleSidePanel);	
			on(dom.byId("sidePanelUnderTabImg"), 'click', toggleSidePanelVertical);	
			_legendTitle.html(i18n.swipe.swipeSidePanel.legendTitle)
			on(app.mainMap, "update-end", changeLegend);
			$(window).resize(function(){
				var lineHeight = $('#legendTitle').height();
				$('#legendTitle').css('line-height', lineHeight + 'px');
				_this.resize();
			})
		}
		
		this.update = function(bgColor, headerColor)
		{
			setColor(bgColor, headerColor);
		}
		
		this.resize = function(widthViewport, heightViewPort)
		{			
			if((_isLegend && _isSeries) || (_isLegend && _isDescription))	
				container.height(app.mainMap.height);
			$('.nicEdit-panelContain').parent().css('width', '348px');
		}
		
		this.checkDescription = function(fromSaveButton)
		{
			//Blur method from component isnt good, have to check for real change
			setTimeout(function(){
				//Blur method from component isnt good, have to check for real change
				if(_description == nicEditors.findEditor('descriptionContentInner').nicInstances[0].getContent())
					return
				WebApplicationData.setSidePanelDescription(nicEditors.findEditor('descriptionContentInner').nicInstances[0].getContent());
				_description = nicEditors.findEditor('descriptionContentInner').nicInstances[0].getContent();
				if(fromSaveButton == true)
					return
				topic.publish("BUILDER_INCREMENT_COUNTER");
			}, 0);		
		}
		
		function changeLegend()
		{
			$('#legendView1').empty();
			$('#legendView2').empty();
			$('#legendView1').append($('#legend0').children().clone());
			$('#legendView2').append($('#legend1').children().clone());
		}
		
		function render(description, isDescription, isLegend)
		{
			var lineHeight = $('#legendTitle').height();
			$('#legendTitle').css('line-height', lineHeight + 'px');

			var descriptionDiv = _descriptionPanel.find("div").eq(3);

			if (isDescription == true) {
				if(isInBuilderMode && !_isSeries)
					nicEditors.findEditor('descriptionContentInner').nicInstances[0].setContent(description || '');
				else if(!isInBuilderMode && !_isSeries)
					descriptionDiv.html(description || '');
			}

			if (!isDescription && !_isSeries || !_isLegend){
				$('#sidePanelUnderTabImg').css('display', 'block');
				$('#sidePanelTabImg').css('display', 'none');
			}

			if ((isDescription || _isSeries) && !_isLegend)
				_sidePanel.addClass('single'); 
			if (!isDescription && !_isSeries) {
				_descriptionPanel.css('display', 'none');
				_legendTitle.css('display', 'none');
				_sidePanel.addClass('single'); 
				_legendPanel.addClass('only');
				_legendPanel.css('top', 0);
			}
			
			if (isLegend == true) {
				var t = setTimeout(changeLegend,1000);
			}
			else {
				_legendPanel.css('display', 'none');
				_legendTitle.css('display', 'none');
				$('#legendView .noData').css('display', 'block');
				if (isInBuilderMode) {
					_sidePanel.addClass('builder');
					_descriptionPanel.css('height', _sidePanel.css('height'))
				}
			}
			if (_isLegend == false && _isDescription == false && _isSeries == false) {
				$("#sidePanelTabImg").css('display', 'none');
				$('#sidePanelUnderTabImg').css('display', 'none');
				return;
			}
			
			else 
				if (app.mode == "TWO_WEBMAPS" && _layout == "spyglass")
					$("#mainMap1_zoom_slider").css('display', 'none');
				
			if (_sidePanel.hasClass('single')) {
				$('#descriptionPanel').addClass('single');
				$('#sidePanel').css('height', 'auto');
				if (parseInt($('#sidePanel').css('height')) > 0.6 * (parseInt(app.mainMap.height))) 
					$('#sidePanel').css('height', '60%');
				else 
					$('#sidePanel').css('height', 'auto');
				
				if (!_isSeries)
					$('#sidePanel').css('top', '111px');
				else
					$('#sidePanel').css('top', '146px');
			}	
			
			
		}
		
		//Toggle Side Panel
		function toggleSidePanel()
		{
			if($('body').hasClass('mobile-view'))
				return
			if (getSidePanelState() == "open")
				closeSidePanel();
			else
				openSidePanel();
		}
		
		function toggleSidePanelVertical()
		{
			if($('body').hasClass('mobile-view'))
				return
			if (getSidePanelVerticalState() == "open")
				closeSidePanelUp();
			else
				openSidePanelDown();
		}

		function getSidePanelState()
		{
			return $("#sidePanelTabImg").hasClass("open") ? "open" : "close";
		}
		
		function getSidePanelVerticalState()
		{
			return $("#sidePanelUnderTabImg").hasClass("open") ? "open" : "close";
		}
			
		function closeSidePanel()
		{
			// The panel has not been open yet
			if($("#sidePanel").css("left") < 0)
				return;
					 
			sidePanelSlide("in");
			domClass.remove("sidePanelTabImg", "closeImg");
			if ($("#sidePanelTabImg").hasClass("open")) $("#sidePanelTabImg").removeClass("open");
		}
				
		function openSidePanel()
		{
			sidePanelSlide("out");
			domClass.add("sidePanelTabImg", "closeImg");
			if (! $("#sidePanelTabImg").hasClass("open")) $("#sidePanelTabImg").addClass("open");
		}
		
		function closeSidePanelUp()
		{
			// The panel has not been open yet
			if($("#sidePanel").css("top") < 0)
				return;
					 
			sidePanelSlideVertical("up");
			domClass.remove("sidePanelUnderTabImg", "closeImg");
			if ($("#sidePanelUnderTabImg").hasClass("open")) $("#sidePanelUnderTabImg").removeClass("open");
		}
				
		function openSidePanelDown()
		{
			sidePanelSlideVertical("down");
			domClass.add("sidePanelUnderTabImg", "closeImg");
			if (! $("#sidePanelUnderTabImg").hasClass("open")) $("#sidePanelUnderTabImg").addClass("open");
		}

		function sidePanelSlide(direction)
		{			
			$("#sidePanel").animate({
				left: (direction=="in") ? - 355 : 0,
				queue: false
			}, 750);
			$(".mapCommandLocation").animate({
				left: (direction=="in") ? 20 : 375,
				queue: false
			}, 750);
			if (app.mode == "TWO_LAYERS" || _layout == "spyglass") {
				$("#mainMap0_zoom_slider").animate({
					left: (direction == "in") ? 20 : 375,
					queue: false
				}, 750);
			}
			else{
				$("#mainMap0_zoom_slider").animate({
					left: (direction == "in") ? 20 : 375,
					queue: false
				}, 750);
				$("#mainMap1_zoom_slider").animate({
					left: (direction == "in") ? 20 : 375,
					queue: false
				}, 750);
			}
		}
		
		function sidePanelSlideVertical(direction)
		{
			var sidePanelHeightSlide = parseInt($('#sidePanel').css('height'));
			var sidePanelHeightClip = parseInt($('#sidePanel').css('height'));	
			var headerHeight = parseInt($('#header').css('height'));
			
			sidePanelHeightSlide -= parseInt($('#seriesPanel').css('height'));
			sidePanelHeightSlide -= parseInt(headerHeight);
			headerHeight += parseInt($('#seriesPanel').css('height'));
				
			$("#sidePanel").animate({
				clip: (direction=="up") ? 'rect(' + sidePanelHeightClip + 'px 350px ' + parseInt(sidePanelHeightClip + 45) + 'px 0px)': 'rect(0px 350px ' + parseInt(sidePanelHeightClip + 45) + 'px 0px)',
				top: (direction=="up") ? -sidePanelHeightSlide: headerHeight,
				queue: false
			}, 750);

			$(".mapCommandLocation").animate({
				left: (direction=="up") ? 20 : 370,
				queue: false
			}, 750);
			
			if (app.mode == "TWO_LAYERS" || _layout == "spyglass") {
				$("#mainMap0_zoom_slider").animate({
					left: (direction == "up") ? 20 : 370,
					queue: false
				}, 750);
			}
			else{
				$("#mainMap0_zoom_slider").animate({
					left: (direction == "up") ? 20 : 370,
					queue: false
				}, 750);
				$("#mainMap1_zoom_slider").animate({
					left: (direction == "up") ? 20 : 370,
					queue: false
				}, 750);
				$("#mainMap_zoom_location").animate({
					left: (direction=="up") ? 20 : 370,
					queue: false
				}, 750);
			}
		}
		
		function setColor(bgColor, headerColor)
		{
			_descriptionPanel.css("background-color", bgColor);
			_descriptionPanel.find("#descriptionContent").css("background-color", bgColor);
			_legendPanel.css("background-color", bgColor);
			_legendTitle.css("background-color", headerColor);
		}		
	}
});
