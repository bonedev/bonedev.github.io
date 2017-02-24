$(document).ready(function() {
	/*tap manu (제품별 보증기간 | 제품별 서비스 지원 | 서비스 요금 안내 | 특별 서비스 안내)*/
	$tap = $('#main_contents h2');
	$tap.click(function() {
		$src =$(this).find('img').attr('src');
		
		$(this).find('img').attr('src', $src.replace('off.gif', 'on.gif'));
		$(this).next().css('display','block').siblings('div').css('display','none');
		$(this).siblings('h2').find('img').attr('src', function () {
			$other = $(this).attr('src');
			return $other.replace('on.gif','off.gif');
		});
	});
});

/*
.attr("src", function () {
					var $other = $(this).attr("src") ;

					return $other.replace("2.gif", "1.gif");
				});
*/
