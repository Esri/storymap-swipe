define([
		"storymaps/ui/inlineFieldEdit/InlineFieldEdit", 
		"storymaps/swipe/core/WebApplicationData", 
		"esri/dijit/Legend", 
		"dojo/topic",
		"dojo/on",
		"dojo/dom",
		"dojo/dom-class"], 
	function(
		InlineFieldEdit, 
		WebApplicationData, 
		Legend, 
		topic,
		on,
		dom,
		domClass
	){
	return function SidePanel(container, isInBuilderMode)
	{
		var _descriptionPanel = container.find("#descriptionPanel");
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
		
		this.init = function(description, bgColor, headerColor, isDescription, isLegend, layer, isSeries)
		{	
			_layer = layer;
			_layout = WebApplicationData.getLayout();
			_dataModel = WebApplicationData.getDataModel();
			_isDescription = isDescription;
			_isLegend = isLegend;
			_isSeries = isSeries;
			if (isInBuilderMode && isDescription && !_isSeries) {
				var descriptionArea = new nicEditor({
					buttonList: ['fontSize', 'fontFamily', 'bold', 'italic', 'underline', 'left', 'center', 'right', 'ul', 'html']
				});
				$('#textEditPanel').addClass('builder');
				descriptionArea.setPanel('textEditPanel');
				//descriptionArea.addInstance('descriptionTitle');
				descriptionArea.addInstance('descriptionContent');
				_description = description;
				descriptionArea.addEvent('focus', function(){
					descriptionArea.addEvent('blur', function(){
						//Blur method from component isnt good, have to check for real change
						setTimeout(function(){
							//Blur method from component isnt good, have to check for real change
							if(_description == nicEditors.findEditor('descriptionContent').getContent())
								return
							WebApplicationData.setSidePanelDescription(nicEditors.findEditor('descriptionContent').getContent());
							_description = nicEditors.findEditor('descriptionContent').getContent();
							topic.publish("BUILDER_INCREMENT_COUNTER");
						}, 250);
					});		
				});
				//IE9 fun.  Panel is rendered super narrow if you don't set it
				$('.nicEdit-main').parent().css('width', '342px');
				$('.nicEdit-main').css('width', '330px');
				
				$('.nicEdit-main').parent().css('border', 'none');
			}
			setColor(bgColor, headerColor);
			render(description, isDescription, isLegend);	
			on(dom.byId("sidePanelTabImg"), 'click', toggleSidePanel);	
			_legendTitle.html(i18n.swipe.swipeSidePanel.legendTitle)
			on(app.maps[0], "update-end", changeLegend);
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
			container.height(heightViewPort - 1);
			$('.nicEdit-panelContain').parent().css('width', '348px');
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
			var descriptionDiv = _descriptionPanel.find("div");
			if (isDescription == true) {
				if(isInBuilderMode && !_isSeries)
					nicEditors.findEditor('descriptionContent').setContent(description || '');
				else if(!isInBuilderMode && !_isSeries)
					descriptionDiv.html(description || '');
			}
			else if (!isDescription && !_isSeries) {
				_descriptionPanel.css('display', 'none');
				_legendTitle.css('display', 'none');
				_legendPanel.height('60%');
				_legendPanel.css('top', 0);
			}
			
			if (isLegend == true) {
				var t = setTimeout(changeLegend,1000);
			}
			else {
				_legendPanel.css('display', 'none');
				_legendTitle.css('display', 'none');
				$('#legendView .noData').css('display', 'block');
				//return;
			}
			if (_isLegend == false && _isDescription == false && _isSeries == false) {
				$("#sidePanelTabImg").css('display', 'none');
				return;
			}
			else 
				if (app.mode == "TWO_WEBMAPS" && _layout == "spyglass")
					$("#mainMap1_zoom_slider").css('display', 'none');
				else if (app.mode == "TWO_WEBMAPS" && _layout == "swipe")
					$("#mainMap0_zoom_slider").css('display', 'none');			
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

		function getSidePanelState()
		{
			return $("#sidePanelTabImg").hasClass("open") ? "open" : "close";
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

		function sidePanelSlide(direction)
		{			
			$("#sidePanel").animate({
				left: (direction=="in") ? - 350 : 0,
				queue: false
			}, 750);
			$("#mainMap_zoom_location").animate({
				left: (direction=="in") ? 20 : 370,
				queue: false
			}, 750);
			if (app.mode == "TWO_LAYERS" || _layout == "spyglass") {
				$("#mainMap0_zoom_slider").animate({
					left: (direction == "in") ? 20 : 370,
					queue: false
				}, 750);
			}
			else{
				$("#mainMap0_zoom_slider").css('display', 'none');
				$("#mainMap1_zoom_slider").animate({
					left: (direction == "in") ? 20 : 370,
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
