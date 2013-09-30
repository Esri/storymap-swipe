define(["storymaps/ui/inlineFieldEdit/InlineFieldEdit", 
		"dojo/has", 
		"dojo/topic",
		"esri/geometry/Extent", 
		"esri/SpatialReference",
		"storymaps/swipe/core/WebApplicationData",
		"dojo/on"], 
	function(
		InlineFieldEdit, 
		has, 
		topic,
		Extent,
		SpatialReference,
		WebApplicationData,
		on
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
				
				if(bookmarks){
					for(var i = 0; i < bookmarks.length; i++){
						var bookmarkName = bookmarks[i].name;
						if(bookmarkName == "<br>")
							bookmarkName = '';
						$('#seriesNav').append('<div id="series'+ i +'" class="seriesButton" data-toggle="tooltip" data-placement="bottom" title data-original-title="' + bookmarkName + '"><p class="seriesLabel"> ' + (i + 1) + '</div>');
						$('#series'+ i).tooltip();
					}
				}
				
				$('#series0').addClass('seriesButton selected');
				$(".seriesButton").fastClick(this.getButtonIndex);
				
				$('#descriptionTitle').addClass('series');
				$('#descriptionContent').addClass('series');
	
				// Desktop builder
				if( isInBuilderMode) {
					$('#seriesBuilder').append('<div id="addSeries" class="addSeriesButton" data-toggle="tooltip" data-placement="bottom" title data-original-title="Add a bookmark"><p class="seriesLabel"> ' + "+" + '</div>');
					$("#addSeries").fastClick(this.addSeries);
					$("#addSeries").tooltip();
					$('#seriesControls').addClass('series');
					
					$('#seriesControls .series-discard').html(i18n.swipe.seriesPanel.discard);
					$('#seriesControls .series-extentSave').html(i18n.swipe.seriesPanel.saveExtent);
				
					$(".series-discard").fastClick(_this.discardBookmark);
					$(".series-extentSave").fastClick(_this.saveBookmarkExtent);
					var descriptionArea = new nicEditor({
						buttonList: ['fontSize', 'fontFamily', 'bold', 'italic', 'underline', 'left', 'center', 'right', 'ul', 'html']
					});
					descriptionArea.setPanel('textEditPanel')
					descriptionArea.addInstance('descriptionTitle');
					descriptionArea.addInstance('descriptionContent');
					descriptionArea.addEvent('focus', function(){
						descriptionArea.addEvent('blur', function(){
							_this.checkText();										
						});
					});
					
					//IE9 fun.  Panel is rendered super narrow if you don't set it
					$('.nicEdit-main').parent().css('width', '342px');
					$('.nicEdit-main').css('width', '330px');
					$('.nicEdit-main').parent().css('border', 'none');
					
					$(".series-extentSave").attr("disabled", "disabled");
					updateDiscardButton();
					
					_this.started = true;
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
			
			this.getButtonIndex = function(evt)
			{
				var numberPattern = /\d+/g;
				var i = evt.currentTarget.id.match(numberPattern);
				_this.showSeries(i[0]);
				topic.publish("SERIES_NAV_CHANGE", i[0]);
			}
			
			this.showSeries = function(index)
			{
				app.bookmarkIndex = index;
				var i;
				
				if (index >= 0) 
					i = index;
				else {
					_this.renderText(_bookmarks[i]);
					return;
				}

				$(selector).find('.seriesButton').removeClass("selected");
				$(selector).find('.seriesButton').eq(i).addClass("selected");
				_this.renderText(_bookmarks[i]);

				if($("#footerMobile").is(':visible'))
					return;
					
				$(".series-extentSave").attr("disabled", "disabled");
				watchExtentChangeSavebtn(2);
				
				updateDiscardButton();
				
				topic.publish("CORE_UPDATE_EXTENT", _bookmarks[i].extent);
			}
			
			this.addSeries = function()
			{
				var index = $(selector).find(".seriesButton").length;
				app.bookmarkIndex = index;
				$('#seriesNav').append('<div id="series'+ index +'" class="seriesButton" data-toggle="tooltip" data-placement="bottom" title data-original-title="Add Title"><p class="seriesLabel"> ' + (index + 1) +'</div>');

				$('#series'+ index).tooltip();
				$('.seriesButton').removeClass("selected");
				$('.seriesButton').eq(index).addClass("selected");
				$('.seriesButton').eq(index).fastClick(_this.getButtonIndex);
				
				var currentExtent = app.maps[0].extent;
				var newBookmark = {
					name: '',
					extent: currentExtent,
					description: ''
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
				on.once(app.maps[0], 'extent-change', function(){
					$(".series-extentSave").removeAttr("disabled");
				});
				
				updateDiscardButton();
				
				WebApplicationData.setSeriesBookmarks(_bookmarks)
				app.mobileCarousel.needUpdate = true;
				topic.publish("BUILDER_INCREMENT_COUNTER");
			}
			
			this.discardBookmark = function()
			{
				var selectedBookmark = $('.seriesButton').index($('.selected'));
				_bookmarks.splice(selectedBookmark,1);

				$(".seriesButton").eq(selectedBookmark).remove();
				for(var i = 0; i < $('.seriesButton').length; i++) {
					$(".seriesButton").eq(i).attr('id', "series"+i);
					var label = $(".seriesButton").eq(i).find('.seriesLabel');
					label.text(i+1);
				}
				if(selectedBookmark == $(selector).find(".seriesButton").length)
					selectedBookmark -= 1;
				_this.showSeries(selectedBookmark);
				WebApplicationData.setSeriesBookmarks(_bookmarks)
				app.mobileCarousel.needUpdate = true;
				topic.publish("BUILDER_INCREMENT_COUNTER");				
			}
			
			this.saveBookmarkExtent = function()
			{
				var selectedBookmark = $('.seriesButton').index($('.selected'));
				var currentExtent = app.maps[0].extent;
				
				_bookmarks[selectedBookmark].extent = currentExtent;
				WebApplicationData.setSeriesBookmarks(_bookmarks);
				topic.publish("BUILDER_INCREMENT_COUNTER");
				
				$(".series-extentSave").attr("disabled", "disabled");
			}
			
			this.renderText = function(bookmark)
			{
				if(!bookmark) {
					nicEditors.findEditor('descriptionTitle').setContent("");
					nicEditors.findEditor('descriptionContent').setContent("");
					return
				}
				if (isInBuilderMode) {
					nicEditors.findEditor('descriptionTitle').setContent(bookmark.name || '');
					nicEditors.findEditor('descriptionContent').setContent(bookmark.description || '');
				}
				else {
					$('#descriptionTitle').html(bookmark.name || '');
					$('#descriptionContent').html(bookmark.description || '');
				}
			}
			
			this.checkText = function()
			{
				if($("#headerMobile").css("display") == "block")
					return

				var selectedBookmark = $('.seriesButton').index($('.selected'));
				if (_bookmarks[selectedBookmark].description == nicEditors.findEditor('descriptionContent').getContent() && _bookmarks[selectedBookmark].name == nicEditors.findEditor('descriptionTitle').getContent()) 
					return;
				
				_bookmarks[selectedBookmark].name = nicEditors.findEditor('descriptionTitle').getContent();
				if(_bookmarks[selectedBookmark].name == i18n.swipe.seriesPanel.title)
					_bookmarks[selectedBookmark].name = '';
				if(_bookmarks[selectedBookmark].description == i18n.swipe.seriesPanel.descr)
					_bookmarks[selectedBookmark].description = '';
				_bookmarks[selectedBookmark].description = nicEditors.findEditor('descriptionContent').getContent();
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
				var handle = on(app.maps[0], 'extent-change', function(params){
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
		}
	}
);
