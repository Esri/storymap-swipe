define(["storymaps/swipe/core/WebApplicationData", "storymaps/utils/Helper", "dojo/topic"], 
	function (WebApplicationData, Helper, topic) {
		return function BuilderPanel(container, builderSave, builderDirectCreationFirstSave, saveWebmap) 
		{
			var _this = this;
			var _displayBuilderSaveIntro = true;
			var _builderView = null;

			this.init = function(builderView) 
			{	
				_builderView = builderView;
				initLocalization();
				
				container.show();
				setUpGeneralPanelButtonAction();
				setUpPopover();
				createAppSavedConfirmation();
				
				// Map popover callback to app.builder
				app.builder.closeBuilderSaveIntro = closeBuilderSaveIntro;
				app.builder.switchToView = switchToView;
				app.builder.discard = discard;
				app.builder.hideSaveConfirmation = hideSaveConfirmation;
				
				container.find('.builder-save').click(save);
				container.find(".builder-share").click(function(){
					app.builder.openSharePopup(false);
				});
				container.find('.builder-settings').click(showSettingsPopup);
				container.find('.builder-help').click(showHelpPopup);
			};
			
			//
			// Panel buttons
			//
			
			function save()
			{
				console.log("swipe.builder.Builder - save");
				
				changeBuilderPanelButtonState(false);
				closeBuilderSaveIntro();
				container.find(".builder-settings").popover('show');
				
				
				if (app.isDirectCreationFirstSave) {
					var appTitle = $('#headerDesktop .title .text_edit_label').text();
					var appSubTitle = $('#headerDesktop .subtitle .text_edit_label').text();
					if ( appSubTitle == i18n.builder.header.editMe )
						appSubTitle = "";
					
					if ( ! appTitle || appTitle == i18n.builder.header.editMe ) {
						_this.saveFailed("NONAME");
						return;
					}
					
					// Save the webmap
					// If ok get the new id
					// Call saveApp
					// If ok call appSaveSucceeded
					builderDirectCreationFirstSave(appTitle, appSubTitle);
				}
				/*else if (app.isGalleryCreation) {
					builderGalleryCreationFirstSave();
				}*/
				else {
					// Save the app 
					// If OK and needed call save webmap 
					// If OK call appSaveSucceeded
					builderSave(function(response){
						if (!response || !response.success) {
							appSaveFailed("APP");
							return;
						}
						else
							saveWebmap(response);
					});
					//builderSave(appSaveSucceeded);
				}
				
				// Save the app 
				// If OK and needed call save webmap 
				// If OK call appSaveSucceeded
				//builderSave();
			}
	
			function discard(confirmed)
			{
				if( confirmed ){
					changeBuilderPanelButtonState(false);
					WebApplicationData.restoreOriginalData();
					app.data.discardChanges();
					resetSaveCounter();
					topic.publish("CORE_UPDATE_UI");
					changeBuilderPanelButtonState(true);
				}
	
				container.find(".builder-discard").popover('hide');
			}
			
			function showSettingsPopup()
			{
				closePopover();
				_builderView.openSettingPopup(false);
			}
			
			function showHelpPopup()
			{
				closePopover();
				window.open('http://storymaps.arcgis.com/en/app-list/swipe/','_blank');
				//app.builder.openHelpPopup();
				
			}
	
			function switchToView(confirmed)
			{
				if( confirmed )
					document.location = '?' + document.location.search.split('edit')[0].slice(1, -1);
				else
					container.find(".builder-view").popover('hide');
			}
			
			function openItem()
			{
				window.open(
					Helper.getItemURL(configOptions.sharingurl, app.data.getAppItem().id),
					'_blank'
				);
			}
			
			//
			// Save callbacks
			//
			
			this.saveSucceeded = function()
			{
				//container.find(".builder-settings").next(".popover").find(".stepSaved").css("display", "block");
				/*setTimeout(function(){
					container.find(".builder-settings").popover('hide');
				}, 2500);*/
				
				container.find(".builder-settings").popover('hide');
				
				if( app.isDirectCreationFirstSave || app.isGalleryCreation )
					app.builder.openSharePopup(true);

				closePopover();
				resetSaveCounter();
				changeBuilderPanelButtonState(true);
			};
			
			this.saveFailed = function(source)
			{
				container.find(".builder-settings").next(".popover").find(".stepSave").css("display", "none");
				//container.find(".builder-settings").next(".popover").find(".stepFailed").css("display", "block");
				if (source == "NONAME") {
					container.find(".builder-settings").next(".popover").find(".stepFailed3").css("display", "block");
					
					$("#headerDesktop .title").addClass("titleEmpty");
					
					container.find(".builder-save").attr("disabled", false);
					container.find(".builder-settings").attr("disabled", false);
					container.find(".builder-help").attr("disabled", false);
					
					return;
				}
				else 
					container.find(".builder-save").next(".popover").find(".stepFailed").css("display", "block");
				
				
				changeBuilderPanelButtonState(true);
			};
			
			//
			// Counter
			//
			
			this.hasPendingChange = function()
			{
				return container.find("#save-counter").html() && container.find("#save-counter").html() != i18n.builder.builder.noPendingChange;
			};
	
			this.incrementSaveCounter = function(nb)
			{
				var value = container.find("#save-counter").html();
				if (! _this.hasPendingChange()) {
					value = 0;
						
					if (_displayBuilderSaveIntro) {
						// Timer cause the header can be hidden
						setTimeout(function(){
							container.find(".builder-save").popover('show');
						}, 250);
						setTimeout(function(){
							if( _displayBuilderSaveIntro )
								container.find(".builder-save").popover('destroy');
						},  3500);
					}	
				}
	
				if( value == 0 ) {
					if ( nb == 1 || isNaN(parseInt(nb)) )
						value = i18n.builder.builder.unSavedChangeSingular;
					else
						value = nb + " " + i18n.builder.builder.unSavedChangePlural;
				}
				else
					value = (parseInt(value) + (nb ? nb : 1)) + " " + i18n.builder.builder.unSavedChangePlural;

				container.find("#save-counter").html(value);
				container.find("#save-counter").css("color", "#FFF");
			};
	
			function resetSaveCounter()
			{
				container.find("#save-counter").html(i18n.builder.builder.noPendingChange);
				container.find("#save-counter").css("color", "#999");
				setUpGeneralPanelButtonAction();
			}
			
			//
			// Popover
			//
	
			function closePopover()
			{
				if( container.find(".discard-popover").length > 0 )
					container.find(".builder-discard").popover('hide');
				if( container.find(".view-popover").length > 0 )
					container.find(".builder-view").popover('hide');
			}
	
			function setUpPopover()
			{
				var containerId = "#" + container.attr("id");
				
				// Discard button
				container.find(".builder-discard").popover({
					trigger: 'manual',
					placement: 'bottom',
					html: true,
					// Inject the CSS properties
					content: '<script>'
								+ ' $("' + containerId + ' .builder-discard").next(".popover").addClass("discard-popover");'
								+ ' $("' + containerId + ' .builder-view").popover("hide");'
								+ ' $("' + containerId + ' .builder-save").popover("hide");'
								+ '</script>'
								+ i18n.builder.builder.popoverDiscard +' '
								+ '<button type="button" class="btn btn-danger btn-small" onclick="app.builder.discard(true)">'+i18n.builder.builder.yes+'</button> '
								+ '<button type="button" class="btn btn-small" onClick="app.builder.discard(false)">'+i18n.builder.builder.no+'</button>'
				});
	
				// Switch to view button
				container.find(".builder-view").popover({
					trigger: 'manual',
					html: true,
					content: '<script>'
								+ ' $("' + containerId + ' .builder-view").next(".popover").addClass("view-popover");'
								+ ' $("' + containerId + ' .builder-discard").popover("hide");'
								+ ' $("' + containerId + ' .builder-save").popover("hide");'
								+ '</script>'
								+ i18n.builder.builder.popoverOpenViewExplain + ' '
								+ '<button type="button" class="btn btn-danger btn-small" onclick="app.builder.switchToView(true)">'+i18n.builder.builder.popoverOpenViewOk+'</button> '
								+ '<button type="button" class="btn btn-small" onClick="app.builder.switchToView(false)">'+i18n.builder.builder.popoverOpenViewCancel+'</button>'
				});
	
				// Confirmation that user need to use the save button
				container.find(".builder-save").popover({
					trigger: 'manual',
					placement: 'left',
					html: true,
					content: '<script>$("' + containerId + ' .builder-save").next(".popover").addClass("save-popover");</script>'
								+ i18n.builder.builder.popoverSaveWhenDone
				});
				
				//container.find('.builder-settings').attr('title', i18n.builder.builder.buttonSettings);
				container.find('.builder-view').attr('title', i18n.builder.builder.buttonView);
			}
			
			function createAppSavedConfirmation()
			{
				var containerId = "#" + container.attr("id");
				
				// App saved confirmation
				container.find(".builder-settings").popover({
					containerId: containerId,
					html: true,
					trigger: 'manual',
					placement: 'bottom',
					content: '<script>'
								+ '$("' + containerId + ' .builder-settings").next(".popover").css("margin-left", "0px").addClass("save-popover-2");'
								+ 'setTimeout(function(){$("' + containerId + ' .builder-settings").next(".popover").css("margin-left", - ($(".builder-save").outerWidth()/2 + $(".builder-share").outerWidth() + $(".builder-settings").outerWidth()/2+8));}, 0);'
								+ '$("' + containerId + ' .builder-settings").next(".popover").find(".stepSave").css("display", "block");'
								+ '$("' + containerId + ' .builder-settings").next(".popover").find(".stepSaved").css("display", "none");'
								+ '$("' + containerId + ' .builder-settings").next(".popover").find(".stepFailed").css("display", "none");'
								+ '$("' + containerId + ' .builder-settings").next(".popover").find(".stepFailed3").css("display", "none");'
								+ '</script>'
								+ '<div class="stepSave" style="margin-top: 3px">'
								+  i18n.builder.builder.savingApplication + '... <img src="resources/icons/loader-upload.gif" class="addSpinner" alt="Uploading">'
								+ '</div>'
								+ '<div class="stepSaved">'
								+  i18n.builder.builder.saveSuccess + ' '
								+ '<button type="button" class="btn btn-success btn-small" onclick="app.builder.hideSaveConfirmation()" style="vertical-align: 1px;">'+i18n.builder.builder.gotIt+'</button> '
								+ '</div>'
								+ '<div class="stepFailed" style="color: red;">'
								+  i18n.builder.builder.saveError + ' '
								+ '<button type="button" class="btn btn-danger btn-small" onclick="app.builder.hideSaveConfirmation()" style="vertical-align: 1px;">'+i18n.builder.builder.gotIt+'</button> '
								+ '</div>'
								+ '<div class="stepHidden stepFailed3" style="color: red;">'
								+  i18n.builder.builder.saveError3 + ' '
								+ '<button type="button" class="btn btn-danger btn-small" onclick="app.builder.hideSaveConfirmation()" style="vertical-align: 1px;">'+i18n.builder.builder.gotIt+'</button> '
								+ '</div>'
				});
				
				//container.find('.builder-settings').attr('title', i18n.builder.builder.buttonSettings);
			}
	
			function closeBuilderSaveIntro()
			{
				container.find(".builder-save").popover('destroy');
				_displayBuilderSaveIntro = false;
			}
			
			//
			// UI
			//
	
			function setUpGeneralPanelButtonAction()
			{
				container.find(".builder-view").click(clickView);
				container.find(".builder-discard").click(clickDiscard);
			}
	
			function clickDiscard()
			{
				if( _this.hasPendingChange() )
					container.find(".builder-discard").popover('show');
			}
	
			function clickView()
			{
				if( _this.hasPendingChange() )
					container.find(".builder-view").popover('show');
				else
					switchToView(true);
			}
	
			function hideSaveConfirmation()
			{
				container.find(".builder-settings").popover('hide');
				$("#headerDesktop .title").removeClass("titleEmpty");
			}
			
			function changeBuilderPanelButtonState(activate)
			{
				container.find(".builder-cmd").attr("disabled", ! activate);
			}
			
			this.updateSharingStatus = function()
			{
				if( app.isDirectCreationFirstSave || app.isGalleryCreation ) {
					$("#sharing-status").html("<span style='color: #FFF'>; " + i18n.swipe.share.shareStatus1 + "</span>");
					container.find('.builder-share').attr("disabled", "disabled");
				}
				else if ( app.data.getAppItem().access == "public" )
					$("#sharing-status").html("; " + i18n.swipe.share.shareStatus2);
				else if ( app.data.getAppItem().access == "account" )
					$("#sharing-status").html("; " + i18n.swipe.share.shareStatus3);
				else
					$("#sharing-status").html("; " + i18n.swipe.share.shareStatus4);
			};
			
			this.resize = function()
			{
				// Make all buttons the same size
				/*
				var buttonWidth = Math.max(container.find("div > button").eq(0).width(), container.find("div > button").eq(1).width());
				container.find("div > button").eq(0).width(buttonWidth);
				container.find("div > button").eq(1).width(buttonWidth);
				*/
						
				// Reposition
				container.css("margin-left", $("body").width() / 2 - container.outerWidth() / 2);
			};
			
			function initLocalization()
			{
				container.find('h4').html(i18n.builder.builder.panelHeader);
				container.find('button').eq(0).html(i18n.builder.builder.buttonSave);
				container.find('button').eq(1).html(i18n.builder.builder.buttonShare.toUpperCase());
				//container.find('button').eq(1).html(i18n.builder.builder.buttonDiscard);
				container.find('button').eq(2).html(i18n.builder.builder.buttonSettings.toUpperCase());
				container.find('button').eq(3).html(i18n.builder.builder.buttonHelp.toUpperCase());
				//container.find('button').eq(3).html('<img src="resources/icons/builder-view.png" style="vertical-align: -6px;" alt="' + i18n.builder.builder.buttonView + '" />');
				//container.find('button').eq(4).html('<i class="icon-file"></i>').attr("title", i18n.builder.builder.buttonItem);
				container.find('#save-counter').html(i18n.builder.builder.noPendingChange);
			}
		}
	}
);