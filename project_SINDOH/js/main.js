$(document).ready(function () {
	var rolling_ea =0;
	$banner2 =
	$banner4 = $('#banner4');
	
	/*메인 페이지 배경*/
	$('body').css("background", "url('images/common/bg_body_main.jpg') no-repeat 50% 0 #fff");
	

	/*공지사항, 보도자료 탭메뉴*/
	$('.banner2 h3').click(function() {
		
		$src=$(this).find('img').attr('src');

		$(this).find('img').attr('src', $src.replace('off.gif', 'on.gif'));
		$(this).siblings('h3').find('img').attr('src', function () {
			$other = $(this).attr('src');
			return $other.replace('on.gif','off.gif');
		});
		$(this).next().css('display','block').siblings('ul').css('display','none');
		

	});


	/*번호 버튼 클릭시,오버시*/	
	$("#banner4 div.banner4_btns ul").find("li[class^=btn]")
		.click(function(){
			$("div.banner4_btns").find("li[class^=btn]").find("a").removeClass("select");
			$(this).find("a").addClass("select");
		})
		.mouseover(function(){
			$("div.banner4_btns").find("li[class^=btn]").find("a").removeClass("select");
			$(this).find("a").addClass("select");
		});
	$("div.banner4_btns").find("li[class^=btn]").eq(0).find("a").addClass("select");
	
	/*번호 클릭시 해당 베너만 보이게*/
	$("#banner4 div.banner4_btns ul li").find("a").click(function () {
			
			clearTimeout(banner_rolling);//롤링 정지
			var txt = $(this).text()-1;
			banner_choice(txt);
						
			return false;
	});

	/*자동 롤링*/
	var banner_rolling= setInterval(function () {
				rolling_ea++;
				banner_choice(rolling_ea%3);
				
				}, 1000);
	
	/*번호 롤링*/
	$("div.banner4").find("li[class^=btn]")
		.click(function(i){
			var i = $(this).index();
			i = -(i*imgWidth);
	
			bnr2_panel.parent().animate({
				"left":i
			},'slow');
		})
		.mouseover(function(i){
			var i = $(this).index();
			i = -(i*imgWidth);
	
			bnr2_panel.parent().animate({
				"left":i
			},'slow');
		});

	var nummm = 1;
	setInterval(function(){
		$("div.banner4").find("li[class=button0"+(nummm+1)+"] > a").trigger("click");
		$("div.banner4").find("li[class=button0"+(nummm+1)+"] > a").trigger("mouseover");
		nummm = (nummm>1) ? 0 : nummm+1;
	},4000);

	
});

function banner_choice(txt) {
			
			$("#banner4 ul ul").find("li").eq(txt).show().siblings().hide();
			$("#banner4 ul ul").find("a").eq(txt).parent().addClass("select").siblings().removeClass("select");
		
			/*
			$rolling.animate({"margin-left":imgWidth+"px"}, "slow",function(){
				$rolling.css("margin-left", "0px").find("li:first").appendTo($rolling);
				
			});
			*/
			
		}


/*banner4 img rolling
function rolling(ea) {
			
			imgWidth=ea*imgWidth;
			alert(imgWidth);
			$rolling.css("margin-left", imgWidth);
		
		}
*/
	/*
			$rolling.animate({"margin-left":"-294px"}, "slow",function(){
				$rolling.css("margin-left", "0px").find("li:first").appendTo($rolling);
				
			});
			*/
			