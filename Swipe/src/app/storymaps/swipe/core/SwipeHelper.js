define([], function(){
	/**
	 * SwipeHelper
	 * @class SwipeHelper
	 * 
	 * Collection of helper functions specific to swipe
	 */
	return {
		isOnMobileView: function()
		{
			return $("#headerMobile").css("display") == "block";
		}
	}
});