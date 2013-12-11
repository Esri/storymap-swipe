define(["dojo/has", 
		"dojo/topic",
		"esri/geometry/Extent", 
		"esri/SpatialReference",
		"storymaps/swipe/core/WebApplicationData",
		"dojo/on",
		"dojo/_base/lang"], 
	function(
		has, 
		topic,
		Extent,
		SpatialReference,
		WebApplicationData,
		on,
		lang
	){
		/**
		 * SeriesPanel
		 * @class SeriesPanel
		 *
		 * UI Swipe series component
		 *
		 */
		
		
		return function SeriesPanel(selector, isInBuilderMode)
		{
			var _bookmarks = null;
			var _this = this;
			
			this.started = false;
			
			this.init = function(bookmarks, bgColor)
			{
				if($(selector).height() == '35')
					return
					
				$(selector).height('35px');
				this.setColor(bgColor);

				_bookmarks = bookmarks;
				
				
				// Import bookmarks from webmap
				//  - The first time that the option is activated
				//  - Or when the option is activated and there isn't bookmark 
				if( ! _bookmarks.length ) {
					
					$.each(app.mapResponse, function(i, response){
						if( response.itemInfo.itemData.bookmarks && response.itemInfo.itemData.bookmarks.length ) {
							$.each(response.itemInfo.itemData.bookmarks, function(j, bookmark){
								var bkmk = lang.clone(bookmark);
								bkmk.extent = new Extent(bkmk.extent);
								_bookmarks.push(bkmk);
							});
						}
					});
					
					// Add a default bookmark with the map initial extent if none
					if( ! _bookmarks.length ) {
						_bookmarks.push({
							name: i18n.swipe.seriesPanel.title,
							extent: app.mainMap._params.extent,
							description: i18n.swipe.seriesPanel.descr
						});
					}
				}
				
				
				if(_bookmarks){
					for(var i = 0; i < _bookmarks.length; i++){
						_bookmarks[i].indexId = i;
						var bookmarkName = _bookmarks[i].name;
						if(bookmarkName == "<br>")
							bookmarkName = '';
						var tmp = document.createElement("DIV");
   						tmp.innerHTML = bookmarkName;
   						var tooltipText = tmp.textContent || tmp.innerText || "";
						$('#seriesNav').append('<div id="series_'+ i +'" class="seriesButton" data-bookmarkid = '+i+' data-toggle="tooltip" data-placement="bottom" title data-original-title="' + tooltipText + '"><p class="seriesLabel"> ' + (i + 1) + '</div>');
						if(!has("touch"))
							$('#series_'+ i).tooltip();
					}
				}
				
				$('#series_0').addClass('seriesButton selected');
				$(".seriesButton").fastClick(function(){
					_this.showSeries(this);
				});
				
				$('#descriptionTitle').addClass('series');
				$('#descriptionContent').addClass('series');
				$('#descriptionContent').addClass('builder');
	
				// Desktop builder
				if( isInBuilderMode) {
					$('#seriesBuilder').append('<div id="addSeries" class="addSeriesButton" data-toggle="tooltip" data-placement="bottom" title data-original-title="Add a bookmark"><p class="addSeriesLabel"> ' + "+" + '</div>');
					$("#addSeries").fastClick(this.addSeries);
					$("#addSeries").tooltip();
					$('#seriesControls').addClass('series');
					
					$('#seriesNav').sortable({
						stop: updateSeriesOrder
					});
					
					$('#seriesControls .series-discard').html(i18n.swipe.seriesPanel.discard);
					$('#seriesControls .series-extentSave').html(i18n.swipe.seriesPanel.saveExtent);
				
					$(".series-discard").fastClick(_this.discardBookmark);
					$(".series-extentSave").fastClick(_this.saveBookmarkExtent);
					var descriptionArea = new nicEditor({
						buttonList: ['fontSize', 'fontFamily', 'bold', 'italic', 'underline', 'left', 'center', 'right', 'ul', 'link', 'html']
					});
					$('#textEditPanel').addClass('builder');
					descriptionArea.setPanel('textEditPanel')
					descriptionArea.addInstance('descriptionTitle');
					descriptionArea.addInstance('descriptionContentInner');
					descriptionArea.addEvent('focus', function(){
						descriptionArea.addEvent('blur', function(){
							_this.checkText();										
						});
					});
					
					//IE9 fun.  Panel is rendered super narrow if you don't set it
					$('.nicEdit-main').parent().css('width', '342px');
					$('.nicEdit-main').css('width', '330px');
					$('.nicEdit-main').parent().css('border', 'none');
					
					on($(' .nicEdit-panel').children().last().children().children().children(), 'click', function(){
						if ($('#href').siblings()[0]) {
							$('#href').siblings()[0].addClass('hrefLabel');
							$('#href').addClass('href');
						}
						if($('#title').siblings()[0])	
							$('#title').siblings()[0].addClass('hrefLabel');
					});
					
					$(".series-extentSave").attr("disabled", "disabled");
					updateDiscardButton();
					
					_this.started = true;
				}
				
				else{
					$('#descriptionTitle').addClass('viewer');
				}
				
				if(bookmarks)
					_this.renderText(bookmarks[0]);
				else
					_this.renderText(null);
			};
			
			this.appIsReady = function()
			{
				if( isInBuilderMode )
					watchExtentChangeSavebtn(1);
			}
	
			this.setColor = function(bgColor)
			{
				$(selector).css("background-color", bgColor);
			};
			
			this.showSeries = function(button)
			{
				$(selector).find('.seriesButton').removeClass("selected");
				$(button).addClass("selected");
				var bookmarkIndex = $(button).data('bookmarkid');
				//app.bookmarkIndex = bookmarkIndex;
				_this.renderText(_bookmarks[bookmarkIndex]);

				if($("#footerMobile").is(':visible'))
					return;
					
				$(".series-extentSave").attr("disabled", "disabled");
				watchExtentChangeSavebtn(2);
				
				updateDiscardButton();
				
				setTimeout(function(){
					topic.publish("CORE_UPDATE_EXTENT", _bookmarks[bookmarkIndex].extent);
				}, 0);
			}
			
			this.addSeries = function()
			{
				var index = $(selector).find(".seriesButton").length;
				app.bookmarkIndex = index;
				$('#seriesNav').append('<div id="series_'+ index +'" class="seriesButton" data-bookmarkid = '+index+' data-toggle="tooltip" data-placement="bottom" title data-original-title="Add Title"><p class="seriesLabel"> ' + (index + 1) +'</div>');

				$('#series'+ index).tooltip();
				$('.seriesButton').removeClass("selected");
				$('.seriesButton').eq(index).addClass("selected");
				$('.seriesButton').eq(index).fastClick(function(){
					_this.showSeries(this);
				});
				
				var currentExtent = app.mainMap.extent;
				var newBookmark = {
					name: '',
					extent: currentExtent,
					description: '',
					indexId: index
				};
				_bookmarks.push(newBookmark);
				var tempBookmarks = [];
				var tempBookmark = {
					name: i18n.swipe.seriesPanel.title,
					extent: currentExtent,
					description: i18n.swipe.seriesPanel.descr
				};
				tempBookmarks.push(tempBookmark);
				_this.renderText(tempBookmarks[0]);
				
				$(".series-extentSave").attr("disabled", "disabled");
				on.once(app.mainMap, 'extent-change', function(){
					$(".series-extentSave").removeAttr("disabled");
				});
				
				updateDiscardButton();
				
				WebApplicationData.setSeriesBookmarks(_bookmarks)
				app.mobileCarousel.needUpdate = true;
				topic.publish("BUILDER_INCREMENT_COUNTER");
			}
			
			this.discardBookmark = function()
			{
				var button = $('.seriesButton.selected');
				var selectedBookmark = $(button).data('bookmarkid');
				var selectedButtonIndex = $('.seriesButton.selected').index();
				_bookmarks.splice(selectedBookmark,1);

				$(".seriesButton").eq(selectedButtonIndex).remove();
				for(var i = 0; i < $('#seriesNav').find('.seriesButton').length; i++) {
					_bookmarks[i].indexId = i;
					$(".seriesButton").eq(i).attr('id', "series_"+i);
					$(".seriesButton").eq(i).data('bookmarkid', i);
					$(".seriesButton").eq(i).data('original-title', _bookmarks[i].name);
					var label = $(".seriesButton").eq(i).find('.seriesLabel');
					label.text(i+1);
				}
				if(selectedButtonIndex == $(selector).find(".seriesButton").length)
					selectedButtonIndex -= 1;
				WebApplicationData.setSeriesBookmarks(_bookmarks)
				_this.showSeries($('.seriesButton').eq(selectedButtonIndex));
				app.mobileCarousel.needUpdate = true;
				topic.publish("BUILDER_INCREMENT_COUNTER");				
			}
			
			this.saveBookmarkExtent = function()
			{
				var selectedBookmark = $('.seriesButton').index($('.selected'));
				var currentExtent = app.mainMap.extent;
				
				_bookmarks[selectedBookmark].extent = currentExtent;
				WebApplicationData.setSeriesBookmarks(_bookmarks);
				topic.publish("BUILDER_INCREMENT_COUNTER");
				
				$(".series-extentSave").attr("disabled", "disabled");
			}
			
			this.renderText = function(bookmark)
			{
				if(!bookmark && isInBuilderMode) {
					nicEditors.findEditor('descriptionTitle').nicInstances[0].setContent("");
					nicEditors.findEditor('descriptionContentInner').nicInstances[1].setContent("");
					return
				}
				if (isInBuilderMode) {
					nicEditors.findEditor('descriptionTitle').nicInstances[0].setContent(bookmark.name || '');
					nicEditors.findEditor('descriptionContentInner').nicInstances[1].setContent(bookmark.description || '');
				}
				if(!bookmark) {
					$('#descriptionTitle').html('');
					$('#descriptionContentInner').html('');
				}
				else {
					$('#descriptionTitle').html(bookmark.name);
					$('#descriptionContentInner').html(bookmark.description);
				}
				if ($('#legendPanel').css('display') == 'none') {
					$('#descriptionPanel').addClass('single');
					$('#sidePanel').removeClass('single');
					$('#sidePanel').addClass('singleSeries');
					$('#sidePanel').css('height', 'auto');
					if (parseInt($('#sidePanel').css('height')) > 0.6 * (parseInt(app.mainMap.height))) 
						$('#sidePanel').css('height', '60%');
					else 
						$('#sidePanel').css('height', 'auto');
				}
				if (navigator.userAgent.match(/iPad/i))
						setTimeout(function (){
							descScroll.refresh();
						}, 0);					
			}
			
			this.checkText = function()
			{
				if($("#headerMobile").css("display") == "block")
					return

				var selectedBookmark = $('.seriesButton').index($('.selected'));

				if (_bookmarks[selectedBookmark].description == nicEditors.findEditor('descriptionContentInner').nicInstances[1].getContent() && _bookmarks[selectedBookmark].name == nicEditors.findEditor('descriptionTitle').nicInstances[0].getContent()) 
					return;
				
				_bookmarks[selectedBookmark].name = nicEditors.findEditor('descriptionTitle').nicInstances[0].getContent();
				_bookmarks[selectedBookmark].description = nicEditors.findEditor('descriptionContentInner').nicInstances[1].getContent();
				if(_bookmarks[selectedBookmark].name == i18n.swipe.seriesPanel.title)
					_bookmarks[selectedBookmark].name = '';
				if(_bookmarks[selectedBookmark].description == i18n.swipe.seriesPanel.descr)
					_bookmarks[selectedBookmark].description = '';
				$('.seriesButton').eq(selectedBookmark).attr('data-original-title', _bookmarks[selectedBookmark].name);
				WebApplicationData.setSeriesBookmarks(_bookmarks);
				topic.publish("BUILDER_INCREMENT_COUNTER");
				app.mobileCarousel.update(_bookmarks, WebApplicationData.getColors());
				var showDescription = false;
				app.mobileCarousel.setDescriptionView(_bookmarks[selectedBookmark].name, _bookmarks[selectedBookmark].description, showDescription);
			}
			
			function watchExtentChangeSavebtn(nbCycle)
			{
				var extentChangeCounter = 1;
				var handle = on(app.mainMap, 'extent-change', function(params){
					if( params && params.delta && (params.delta.x || params.delta.y) ) {
						if( extentChangeCounter == nbCycle ) {
							$(".series-extentSave").removeAttr("disabled");
							handle.remove();
						}
						
						extentChangeCounter++;
					}
				});
			}
			
			function updateDiscardButton()
			{
				var disable = _bookmarks.length <= 1;
				$('#seriesControls .series-discard').attr("disabled", disable);
				$('#seriesControls .series-discard').attr("title", disable ? i18n.swipe.seriesPanel.discardDisabled : '');
			}
			
			function updateSeriesOrder(){
				// Slow it down to make it obvious to the user something is happening
				setTimeout(function(){
					$.each($('.seriesLabel'), function(i, label){
						$(label).html(i+1);
					})
					var seriesButtons = $('#seriesPanel').find($('.seriesButton'));
					var newBookmarks = [];
					$.each($(seriesButtons), function(i, button){
						var oldIndex = $(button).data('bookmarkid');
						$(".seriesButton").eq(i).data('original-title', _bookmarks[oldIndex].name);
						$(".seriesButton").eq(i).data('bookmarkid', i);
						var bookmark = $.grep(_bookmarks, function(e){ 
							if(e.indexId == oldIndex)
								newBookmarks.push(e);
						});
					})
					WebApplicationData.setSeriesBookmarks(newBookmarks);
					_bookmarks = newBookmarks;
					topic.publish("BUILDER_INCREMENT_COUNTER");
				}, 500);		
			}
		}
	}
);
