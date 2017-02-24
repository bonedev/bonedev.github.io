$(document).ready(function(){
		
	!function ($) {
		$(function(){
			// carousel demo
			$('#bannerCarousel').carousel()
		})
	}(window.jQuery);

	/*-------header mainMenu button-------*/
	$('#header a.brand').hover(function() {
		$(this).addClass('on');	
	});	

	$('#mainMenu li').find('a').click(function() {
		$(this).addClass('on').parent().siblings('li').find('a').removeClass('on');
		$('#header a.brand').removeClass('on');
		/*$(this).css('opacity', '1');*/
	});

	/*-------portfolio image zoom in-------*/
	nowdate = new Date();
	var second = nowdate.getSeconds();
	var secondInterbal = second;

	$('#thumImg li').click(function() {
		var index = $(this).index();
		$('#viewImg>li').eq(index).delay(500).fadeIn(500).siblings().fadeOut(500);
		$('#portfolioDesc>li').eq(index).css('display','block').siblings().css('display', 'none');
		$(this).css('border', '2px solid #000').siblings('li').css('border', '1px solid #333');
		
	});

	var scrollSpeed = 800;
	function pageScroll(obj){
		if(!obj){
			$.scrollTo({top:0, left:0}, scrollSpeed, {queue:true});
		}else{
			var topPos = $(obj).offset().top + 0 ;
			$.scrollTo({top:topPos, left:0}, scrollSpeed, {queue:true});
		}
	};

	$("#mainMenu a").click(function(){
		var goPage = $(this).attr("href");
		pageScroll(goPage);
		return false;
	});
	$(".top a").click(function(){
		var goPage = $(this).attr("href");
		pageScroll(goPage);
		return false;
	});
});

	