$(document).ready(function () {
	/*header menu*/
	$gnb= $('#mainMenu li');
	$gnb.hover(function(){
		$(this).find('div').css('display', 'block');
		},function() {
		$(this).find('div').css('display', 'none');
		
	});
	
	/* footer menu*/
	$footerBtn =$('#footerMenuBtn li');
	$footerBtn.find('div').hide();
	$footerBtn.find('a').toggle(function () {
		$(this).next('div').slideDown(600);
	}, function () {
		$(this).next('div').slideUp(600);
	});
	
	/*aside menu*/
	$lnb=$('#aside ul li');
	
	$lnb.find('ul').hide();
	$lnb.find('a.on').parent('li').find('ul').show();
	
	$lnb.find('a.on').click(function(){
		return false;
	});
	
	$lnb.find('a:not(.on)').bind("click",function() {
		$lnb.find('a:not(.on)').next("ul").slideUp();
	
		if ($(this).parent().find('ul').length>0) //a href 에 값이 있는경우, return false를 막기 위해
		{	
			if ($(this).parent().find('ul:visible').length)
			{
				$(this).parent().find('ul').slideUp();
				return false;
			} else{
				$(this).parent().find('ul').slideDown();
				return false;
			}
		}
	});
	
});

function mainMenu(obj){
	var img_src = obj.firstChild.getAttribute('src');
	//alert(img_src);

	if (img_src.lastIndexOf("on.gif") == -1)
	{
		obj.firstChild.setAttribute("src", img_src.replace("off.gif", "on.gif"));
	} else {
		obj.firstChild.setAttribute("src", img_src.replace("on.gif", "off.gif"));
	}
}



