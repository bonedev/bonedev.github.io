var ui_common = {
		gnbMn : function(){
			var gnbMn = $('.gnb-menu'),
				depth1 = gnbMn.find('.depth1'),
				depth2 = gnbMn.find('.depth2-wrap');
			
			depth1.on('mouseover focusin', function(){
		 		gnbMn.addClass('active');
		 		depth2.hide();
		 		depth1.removeClass('on');
		 		$(this).addClass('on').next('.depth2-wrap').show();
		 		
			}).on('focusout', function(){
				
			}).parent('li').on('mouseleave', function(){
				gnbMn.removeClass('active');
				depth1.removeClass('on');
				depth2.hide();
			})
			
			depth2.find('a').last().on('focusout', function(){
				gnbMn.removeClass('active');
				$(this).closest('.depth2-wrap').hide().prev('.depth1').removeClass('on');
			});
			
		},
		searchbox : function(){
			var selectTarget = $('.selectbox-wrap .selectbox');
			selectTarget.each(function(){
				var selectName = $(this).children('option:selected').text();
				console.log(selectName);
				$(this).siblings('label').text(selectName);
				$(this).parent().removeClass('focus');
			});
			/*selectTarget.on('focus',function(){
				$(this).parent().addClass('focus');
			});

			selectTarget.on('blur', function(){
				$(this).parent().removeClass('focus');
			});
			 */
			selectTarget.change(function(){
				var select_name = $(this).children('option:selected').text();
				$(this).siblings('label').text(select_name);
				$(this).parent().removeClass('focus');
			});
		}
};
$(document).ready(function() {
	ui_common.gnbMn();
	ui_common.searchbox();
});