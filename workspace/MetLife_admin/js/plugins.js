/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(this);if(d.value===f.attr(h?"placeholder-x":"placeholder")&&f.hasClass(n.customClass))if(d.value="",f.removeClass(n.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(this),i=f.id;if(!d||"blur"!==d.type||!g.hasClass(n.customClass))if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(j){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":i}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var k=g.data("placeholder-password");k&&(k[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(n.customClass),g[0].value=g.attr(h?"placeholder-x":"placeholder")}else g.removeClass(n.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h=!1,i="[object OperaMini]"===Object.prototype.toString.call(window.operamini),j="placeholder"in document.createElement("input")&&!i&&!h,k="placeholder"in document.createElement("textarea")&&!i&&!h,l=a.valHooks,m=a.propHooks,n={};j&&k?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return n=a.extend({},e,b),this.filter((j?"textarea":":input")+"["+(h?"placeholder-x":"placeholder")+"]").not("."+n.customClass).not(":radio, :checkbox, [type=hidden]").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=j,g.textarea=k,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(n.customClass)?"":b.value},set:function(b,f){var g,h,i=a(b);return""!==f&&(g=i.data("placeholder-textinput"),h=i.data("placeholder-password"),g?(c.call(g[0],!0,f)||(b.value=f),g[0].value=f):h&&(c.call(b,!0,f)||(h[0].value=f),b.value=f)),i.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):(i.hasClass(n.customClass)&&c.call(b),b.value=f),i):(b.value=f,i)}},j||(l.input=f,m.value=f),k||(l.textarea=f,m.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+n.customClass,this).each(function(){c.call(this,!0,"")});setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){var b=!0;try{"javascript:void(0)"===document.activeElement.toString()&&(b=!1)}catch(c){}b&&a("."+n.customClass).each(function(){this.value=""})}))});


/*!
 * @module a variety of module
 * @author jo
 * @email jo@netive.co.kr
 * @create 2016-07-17
 * @license MIT License
 */
;(function ($, win, doc, undefined) {
	
	'use strict';
	
	var 
		ua = navigator.userAgent,
		div = doc.createElement('div'),
		inp = doc.createElement("input"),
		ie = ua.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i), 
		prefix = ['Webkit', 'Moz', 'O'],
		transition = 'transition',
		transform = 'transform',
		requestanimationframe = 'requestanimationframe',
		cancelanimationframe = 'cancelanimationframe',
		transfroms = {
			translate3d : 'taranslate3d(0px, 0px, 0px)',
			translate : 'tranaslate(0px, 0px)',
			scale3d : 'scale3d(1,1,1)',
			scale : 'scale(1,1)'
		},
		browser = $.borwser,
		support = $.support,
		version, i;
	
	if (!browser) {
		$.browser = browser = {};
	}
	// touch, mobile 환경 구분
	support.touch = browser.ios || browser.android || (doc.ontouchstart !== undefined && doc.ontouchstart !== null);
	browser.mobile = support.touch && ( browser.ios || browser.android);
	
	// 포커스 이동 특정 영역에서 홀딩
	$._uiHold = {
		hold : function (value) {
			var $hold = $(value),
				$hold_focus = $hold.find('h1, a, input, button, label, select');
			
			$hold.find('h1').attr('tabindex',0);
			$hold_focus.eq(0).addClass('fst');
			$hold_focus.eq(-1).addClass('end');

			$hold.off('keydown.modal').on('keydown.modal', function (e) {
				if (e.shiftKey && e.keyCode == 9) {
					e.preventDefault();
					$hold.find('.end').focus();
				}
			});
			$hold.find('.fst').off('keydown.dialog').on('keydown.dialog', function (e) {
				$hold.off('keydown.modal');
				if (e.shiftKey && e.keyCode == 9) {
					e.preventDefault();
					$hold.find('.end').focus();
				}
			});
			$hold.find('.end').off('keydown.dialog').on('keydown.dialog', function (e) {
				$hold.off('keydown.modal');
				if (!e.shiftKey && e.keyCode == 9) {
					e.preventDefault();
					$hold.find('.fst').focus();
				}
			});
		}
	}
	$._cookie = {
		set: function(name, value, term, path, domain) {
			var cookieset = name + '=' + value + ';',
				expdate;
			if ( term ) {
				expdate = new Date();
				expdate.setTime( expdate.getTime() + term * 1000 * 60 * 60 * 24 ); // term 1 is a day
				cookieset += 'expires=' + expdate.toGMTString() + ';';
			}
			if ( path ) {
				cookieset += 'path=' + path + ';';
			}
			if ( domain ) {
				cookieset += 'domain=' + domain + ';';
			}
			document.cookie = cookieset;
		},
		get: function(name) {
			var match = ( document.cookie || ' ' ).match( new RegExp(name+' *= *([^;]+)') );
			return ( match ) ? match[1] : null;
		}
	};
	
	// 스크롤 위치 이동
	$._uiScroll = {	
		move : function(value) {
			$('body, html').animate({
				scrollTop : value
			},600);
		}
	};
	
	$.fn.extend({
		uiDialog : function (opt) {
			var defaults = {
					auto : false,
					call : null,
					call_back : null,
					width : null, 
					height : null,
					ps_vt : 'middle', // top, middle, bottom 
					ps_hz : 'center' // left, center, right	
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function () {
				var $base = $(this),
					dialog_id = $base.attr('data-dialogid'),
					$dialog = $('#' + dialog_id),
					$body = $('body'),
					auto = opt.auto,
					call = opt.call,
					call_back = opt.call_back,
					w = opt.width,
					h = opt.height,
					ps_vt = opt.ps_vt,
					ps_hz = opt.ps_hz,
					sc_t = 0,
					$back, $dialog_bg, left, right;
				
				var app = {
					position : function () {
						$dialog = $('#' + dialog_id);

						(w === null) ? w = $dialog.outerWidth() : '';
						(h === null) ? h = $dialog.outerHeight() : '';
						
						var w_h = $(win).outerHeight();
						
						if (w_h < h ) {
							$dialog.css({
								top : 10,
								height : w_h - 20,
								overflowY : 'scroll'
							});
							
							
						} else {
							if (ps_vt === 'middle') {
								$dialog.css({ 
									top : '50%',
									marginTop : (h / 2) * -1
								});
							} 
							else if (ps_vt === 'top') {
								$dialog.css('top', 0);
							} 
							else if (ps_vt === 'bottom') {
								$dialog.css('bottom', 0);
							}
						}

						if (ps_hz === 'center') {
							$dialog.css({ 
								left : '50%',
								marginLeft : (w / 2) * -1
							});
						} 
						else if (ps_hz === 'left') {
							$dialog.css('left', 0);
						} 
						else if (ps_hz === 'right') {
							$dialog.css('right', 0);
						}
					},
					bg : function () {
						$body.data('bg_dialog', true);
						$body.append('<div class="bg_dialog"></div>');
						
						$dialog_bg = $('.bg_dialog');
						$dialog_bg.css('display','block').stop().animate({
							opacity : 0.8
						},600 , function () {
							$dialog_bg.off('click.dialog_bg').on('click.dialog_bg', function () {
								app.hide();
							});
						});
					},
					show : function (dialog_id) {
						$dialog = $('#' + dialog_id);
						
						// dialog show
						app.position();
						$dialog.css('display', 'block').stop().animate({
							opacity : 1
						},200, function(){
							// dialog hold
							$._uiHold.hold('#' + dialog_id);
							(browser.mobile) ? $dialog.find('h1').eq(0).focus() : $dialog.attr("tabindex", 0).focus();
						});

						// bg
						(!$('body').data('bg_dialog')) ? app.bg() : '';
						
						// close
						$dialog.find('.ui_close').off('click.dialog_close').on('click.dialog_close', function () {
							app.hide();
						});
					},
					hide : function (callback_id) {
						(!!callback_id) ? $dialog = $('#' + callback_id) : $dialog = $('#' + dialog_id);
						
						$dialog.stop().animate({
							opacity : 0.5
						}, 100, function () {
							var $this_hide = $(this);
							
							$this_hide.find('.fst').removeClass('fst').removeAttr('tabindex');
							$this_hide.find('.end').removeClass('end');
							$this_hide.hide().removeAttr('style');
						});
						
						$dialog_bg.animate({
							opacity : 0
						}, 100, function () {
							$('body').data('bg_dialog', false);
							$dialog_bg.remove();
						});
						
						$._uiScroll.move(sc_t);
						$back.focus();
					},
					evt : function () {
						// click						
						$base.off('click.dialog').on('click.dialog', function (e) {
							e.preventDefault();
							
							if (call_back === null) {
								$back = $(this);
								sc_t = $(doc).scrollTop();
							} else {
								$back = $(call_back);
								$back.attr('tabindex',0);
								sc_t = $back.position().top;
							}
							dialog_id = $(this).attr('data-dialogid');
							
							app.show(dialog_id);
						});

						// auto & call
						if (auto === true || call !== null) {
							if (call_back === null) {
								$back = $body.find('a, input, button, label, select').eq(0);
								sc_t = $(doc).scrollTop();
							} else {
								$back = $(call_back);
								$back.attr('tabindex',0);
								sc_t = $back.position().top;
							}
							dialog_id = $base.attr('id');
							$dialog_bg = $('.bg_dialog');
							
							(call === 'show') ? app.show(dialog_id) : (call === 'hide') ? app.hide(dialog_id) : '';

							if (auto === true) {
								$base.off('click.dialog');
								($._cookie.get(dialog_id) === null) ? app.show(dialog_id) : '';
								
								// cookie button
								$('.ui_cookie_wrap button').off('click.cookie').on('click.cookie', function () {
									var $this 		= $(this),
										$ck_dialog 	= $this.closest('[role="dialog"]'),
										ck_id 		= $this.attr('data-cookieid'),
										d_id 		= $ck_dialog.attr('id'),
										$ck_inp 	= $('#' + ck_id),
										ck_val 		= $ck_inp.val();
									
									$dialog_bg = $('.bg_dialog');

									if ($ck_inp.prop('checked') === true) {
										$._cookie.set(d_id, ck_val, ck_id, "/")
									}
									app.hide();
								});
							}	
						}
					}
				}
				app.evt();
			});
		}
	});
})(jQuery, window, document);