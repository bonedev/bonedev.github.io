$('document').ready(function (){
	/*tap menu (서비스 인프라 | 서비스 혁신활동)*/
	$tap = $('#main_contents h2');
	
	$tap.click(function() {
		$src=$(this).find('img').attr('src');	
		$(this).find('img').attr('src', $src.replace('off.gif','on.gif'));
		$(this).next('div').css('display','block').siblings('div').css('display', 'none');
		$(this).siblings('h2').find('img').attr('src', function() {
			$outer=$(this).attr('src');
			return $outer.replace('on.gif', 'off.gif');
		});

	});

	/*tap menu (서비스 인프라) thumnail img */

	$thumList = $('#thumList');
	$thumList.find('li').click(function() {
		$index=$(this).find('img').attr('src').substr(45,1);
		$(this).find('img').css('border', '2px solid #76b729').parent().siblings('li').find('img').css('border', '2px solid #d3d3d3');
		$('ul.ITexpertService_list li').eq($index).css('display','block').siblings().css('display', 'none');
	});

	/*tap menu (서비스 인프라) thunail prev & next */
		$(function(){
			$("#thumList_innerBox").imageScroller({
				next:"prev",			
				prev:"next",			
				frame:"thumList",			
				width:109,		
				child:"li",		
				auto:false		
			});
		}); 
		
		jQuery.fn.imageScroller = function(params){
			var p = params || {
				next:"buttonNext",
				prev:"buttonPrev",
				frame:"scrollerFrame",
				width:188,
				child:"a",
				auto:true
			}; 
			var _btnNext = $("#"+ p.next);
			var _btnPrev = $("#"+ p.prev);
			var _imgFrame = $("#"+ p.frame);
			var _width = p.width;
			var _child = p.child;
			var _auto = p.auto;
			var _itv;
			
			var turnLeft = function(){
				_btnPrev.unbind("click",turnLeft);
				if(_auto) autoStop();
				_imgFrame.animate( {marginLeft:-_width}, 'fast', '', function(){
					_imgFrame.find(_child+":first").appendTo( _imgFrame );
					_imgFrame.css("marginLeft",0);
					_btnPrev.bind("click",turnLeft);
					if(_auto) autoPlay();
				});
			};
	
			var turnRight = function(){
				_btnNext.unbind("click",turnRight);
				if(_auto) autoStop();
				_imgFrame.find(_child+":last").clone().show().prependTo( _imgFrame );
				_imgFrame.css("marginLeft",-_width);
				_imgFrame.animate( {marginLeft:0}, 'fast' ,'', function(){
					_imgFrame.find(_child+":last").remove();
					_btnNext.bind("click",turnRight);
					if(_auto) autoPlay(); 
				});
			};
			
			_btnNext.css("cursor","pointer").click( turnRight );
			_btnPrev.css("cursor","pointer").click( turnLeft );
			
			var autoPlay = function(){
			  _itv = window.setInterval(turnLeft, 5000);  
			};
			var autoStop = function(){
				window.clearInterval(_itv);
			};
			if(_auto)	autoPlay();
		};

	/*tap menu (서비스 혁신활동) thumnail img */

	 $('div.thumList_box1').find('li').click(function() {
		$index=$(this).index();
		$(this).find('img').css('border', '2px solid #76b729').parent().siblings('li').find('img').css('border', '2px solid #d3d3d3');
		$('div.orgImg_box1 li').eq($index).css('display','block').siblings().css('display', 'none');
	 });
	 
	  $('div.thumList_box2').find('li').click(function() {
		$index=$(this).index();
		$(this).find('img').css('border', '2px solid #76b729').parent().siblings('li').find('img').css('border', '2px solid #d3d3d3');
		$('div.orgImg_box2 li').eq($index).css('display','block').siblings().css('display', 'none');
	 }); 
	



});