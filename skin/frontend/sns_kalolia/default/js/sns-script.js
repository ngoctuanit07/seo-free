jQuery(document).ready(function($){	

	
	
//	if($(window).width() >= 992) setHeight('#sns_footer_top .column', true);
//	$(window).resize(function(){
//		if($(window).width() >= 992){
//			setHeight('#sns_footer_top .column', true);
//		} else {
//			setHeight('#sns_footer_top .column', false);
//		}
//	});

	// set menu active
	var currentlink = $(location).attr('href');
	currentlink = convertLinkToCompare(currentlink);
	
	var mainmenu = $('#sns_mainnav');
	
	mainmenu.find('li').removeClass('active');
	menulinks = mainmenu.find('li a');
	
	menulinks.each(function(){
		var menulink = convertLinkToCompare($(this).attr('href'));
		if(menulink === currentlink) $(this).parents('li[class*="level"]').addClass('active');
	});
	// end set menu active
	if($('#sns_menu') && KEEP_MENU == 1){
//		$('#sns_menu').stick_in_parent({
//			sticky_class: 'keep-menu'
//		});

	    var previousScroll = 0,
	        headerOrgOffset = $('#sns_menu').offset().top;
	    
	    $(window).scroll(function() {
	        var currentScroll = $(this).scrollTop();
	        if(currentScroll > headerOrgOffset) {
	        	$('#sns_menu').addClass('keep-menu');
	        	if(!$('#sns_mene_clone').length) $('#sns_menu').after('<div id="sns_mene_clone" style="height: ' + $('#sns_menu').height() + 'px"></div>');
	            if (currentScroll > previousScroll) {
	                $('#sns_menu').removeClass('keep-menu-show').fadeOut();
	            } else {
	            	if(!$('#sns_menu').hasClass('keep-menu-show')){
	            		$('#sns_menu').stop(true, true).addClass('keep-menu-show').fadeIn();
	            	}
	            }
	        } else {
	        	$('#sns_menu').removeClass('keep-menu');
				$('#sns_mene_clone').remove();
				$('#sns_menu').fadeIn(0);
	        }
	        previousScroll = currentScroll;
	    });
	}
	$(window).load(function(){
//	    $('.gallery-slide').owlCarousel({
//				itemsCustom: [
//					[0, 4]
//				],
//				pagination: true,
//				navigation: true,
//				navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
//				itemsScaleUp : true,
//				slideSpeed : 800,
//				addClassActive: true
//		});
	});
	

	$(document).on('click', '.gallery .img img', function(){
		$(this).parents('.item-img').find('.image-main img').attr('src', $(this).attr('data-src'));
	});
});





