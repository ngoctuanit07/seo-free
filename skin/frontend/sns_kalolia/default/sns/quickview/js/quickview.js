jQuery(document).ready(function($){
	function cleanHref(){
		var pdpath = arguments[0];
		var preg = /\/[^\/]{0,}$/ig;
		if( typeof pdpath == 'undefined') pdpath = 'null';
		pdpath = pdpath.replace(SNS_QV.SETTING.BASE_URL, '');
		pdpath = pdpath.replace('index.php/', ''); //alert(pdpath);
		return pdpath;
	}

	function quickView(){
		var qvpath = 'quickview/index/view';
		if( SNS_QV.SETTING.BASE_URL.indexOf('index.php') == -1 ) qvpath = 'index.php/quickview/index/view';
		var baseUrl = SNS_QV.SETTING.BASE_URL + qvpath;
		$.each($(arguments[0].wrapQuickView), function() {
			// Append quick view
			if( $(this).find("a.sns-btn-quickview").length <= 0 ){
				if( $(this).find("a").length > 0 ){
					link = $(this).find("a");
					var href = cleanHref(link.attr('href')); 
					href = baseUrl+"/path/" + href; 
					href = href.replace('?options=cart', "");
					$(this).append("<a class=\"sns-btn-quickview\" data-original-title=\""+SNS_QV.SETTING.TEXT+"\" data-toggle=\"tooltip\" href=\""+href+"\"><span>"+SNS_QV.SETTING.TEXT+"</span></a>");
				}
			}
		});
		// Insert popup for quick view
		$('.sns-btn-quickview').each(function(){
			$(this).fancybox({
				type		: 'ajax',
				maxWidth	: SNS_QV.SETTING.POP_WIDTH,
				maxHeight	: SNS_QV.SETTING.POP_HEIGHT,
				fitToView	: false,
				autoSize	: true,
				autoResize	: true,
				autoCenter	: true,
				closeClick	: false,
				scrollOutside: false,
				openEffect	: 'elastic',
				closeEffect	: 'elastic',
				scrollOutside	: false,
		        ajax            : {
		                cache   : false,
		        },
				afterShow 	: function() {
					$(".sns_product_qv_img").each(function(){
						$(this).data('owlCarousel').reinit();
					});
				}
//				afterClose	: function() {
//					$('.fancybox-overlay + .zoomContainer').remove();
//				}
			});
		});
//		$('.sns-btn-quickview')
	}
	quickView({wrapQuickView : SNS_QV.SETTING.SELECTOR});
	setInterval(function(){ quickView({wrapQuickView : SNS_QV.SETTING.SELECTOR}) },1000);
});


