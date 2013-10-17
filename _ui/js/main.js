/*******************************************************************************

	CSS on Sails Framework
	Title: Camden Living
	Author: XHTMLized (http://www.xhtmlized.com/)
	Date: April 2012

*******************************************************************************/

/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransitions-touch-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e});var G=function(c,d){var f=c.join(""),g=d.length;w(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9},g,d)}([,["@media (",m.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join("")],[,"touch"]);q.touch=function(){return e.touch},q.csstransitions=function(){return F("transition")};for(var H in q)y(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);

var Camden = {

	/**
	 * Init Function
	 */
	init: function() {
		Camden.collapseSidebar();
		Camden.dropdown();
		Camden.customScrolls();
		Camden.modals();
		Camden.movingIcons();
		Camden.featuresTooltips();
		Camden.contentNavTabs();
		Camden.innerTabs();
		Camden.floorplansCarousel();
		Camden.mediaGallery();
		Camden.tourThumbs();
	},
	
	/**
	 * Sidebar collapsing/expanding
	 */
	collapseSidebar: function() {
		$('.sidebar-collapse').click(function(){
			if( $('html').hasClass('no-csstransitions') ) {
				$(this).closest('.sidebar').animate({
					width: $(this).closest('.sidebar').hasClass('collapsed') ? 274 : 64
				},{
					duration: 1000,
					step: function(now,fx){
						$(fx.elem).css('width',now).closest('.sidebar').siblings('.content').css('margin-left',now);
						$(fx.elem).find('.sidebar-nav .active').width(now+23);
						$(fx.elem).find('.sidebar-nav a span').width(now-64);
					},
					complete: function(){
						$(this).toggleClass('collapsed').width('');
						$(window).resize();
					}
				});
			} else {
				$('body').css('overflow','hidden');
				var $s = $(this).closest('.sidebar').toggleClass('collapsed');
				setTimeout(function(){
					$(window).resize();
					$('body').css('overflow','');
				},1010);
			}
		});
	},
	
	/**
	 * Dropdowns in the header
	 */
	dropdown: function(){
		$('.has-dropdown').click(function(){
			var $t = $(this);
			var $db = $t.children('.dropdown');
			if( $t.hasClass('dropdown-open') ){
				$t.removeClass('dropdown-open');
				$db.add('body').off('.dropdown');
			} else {
				$t.addClass('dropdown-open');
				setTimeout(function(){
					$db.on('click.dropdown',function(ev){
						ev.stopPropagation();
					});
					$('body').on('click.dropdown',function(ev){
						$t.click();
					});
				},10);
			}
		}).children('a').click(function(ev){
			ev.preventDefault();
		});
	},
	
	/**
	 * Custom scrolls initialization
	 */
	customScrolls: function(){
		$('.scrollable').jScrollPane({
			showArrows: true,
			verticalArrowPositions: 'after',
			horizontalArrowPositions: 'after'
		});
		
		$(window).resize(function(){
			$('.scrollable').each(function(){
				$(this).data('jsp').reinitialise();
			});
		});
	},
	
	/**
	 * Various modals on the page
	 */
	modals: function(){
		$('.show-modal').overlay({
			mask: {
				color: '#000000',
				opacity: '0.5'
			},
			top: 'center',
			left: '50%'
		});
		
		$('.show-modal.load-iframe').on('onBeforeLoad',function(){
			var $overlay = $(this).data('overlay').getOverlay();
			var $iframe = $('<iframe src="'+$(this).attr('href')+'" scrolling="auto" frameborder="0" border="0"></iframe>').height($overlay.height());
			$iframe.load(function(){
				try {
					$(this).add($overlay).height(this.contentWindow.document.body.scrollHeight);
				} catch(e) {}
				$overlay.css('top',Math.max(0,($(window).height()-$overlay.outerHeight())/2));
			});
			$overlay.find('iframe').remove();
			$iframe.appendTo($overlay);
		});
		
		$('.show-modal.load-image').on('onBeforeLoad',function(){
			var $overlay = $(this).data('overlay').getOverlay();
			var $image = $('<img src="'+$(this).attr('href')+'"/>');
			$overlay.find('.image img').remove();
			$overlay.find('.image').append($image);
			$image.imagesLoaded(function(){
				$image.css('max-height','').css('max-height',$overlay.height()-$overlay.find('h4').outerHeight(true));
				
				$overlay.width($image.width());
				$overlay.css('top',Math.max(0,($(window).height()-$overlay.outerHeight())/2));
				$overlay.css('margin-left',-$overlay.outerWidth()/2);
			});
			$overlay.find('h4').html($(this).data('overlay').getTrigger().closest('.floorplan').find('h3').html());
		});
	},
	
	/**
	 * Moving icons for tabs/links
	 */
	movingIcons: function(){
		if( $('html').hasClass('no-csstransitions') || !$.browser.webkit ) {
		
			/* Function for animating background image */
			var bgAni = function($t,offStart,duration) {
				var x,y;
				
				if( $.browser.msie ) {
					$t.css('background-position-x','').css('background-position-y','');
					x = parseInt($t.css('background-position-x'));
					y = parseInt($t.css('background-position-y'));
				} else {
					var m = $t.css('background-position','').css('background-position').match(/(-?\d+)px\s+(-?\d+)px/);
					if( m ) {
						x = parseInt(m[1]);
						y = parseInt(m[2]);
					}
				}
				
				$t.stop(false,true).css('background-position',(x+offStart)+'px '+y+'px').animate({
					'background-position-x': x
				},{
					duration: duration,
					step: function(now,fx){
						$(this).css('background-position',now+'px '+y+'px')
					}
				});
			};
		
			/* Connect evetns */
			$('.office-info li a, .sidebar-nav a, .content-nav a').hover(function(){
				var $t = $(this);
				if( !$t.closest('li').hasClass('active') ) {
					setTimeout(function(){
						bgAni($t,-6,200);
					},0);
				}
			},function(){
				var $t = $(this);
				if( !$t.closest('li').hasClass('active') ) {
					setTimeout(function(){
						bgAni($t,6,200);
					},0);
				}
			}).each(function(){
				/* Take care of FF & IE initial bg positions */
				bgAni($(this),0,0);
			});
		}
	},
	
	/**
	 * Photos of the features in the tooltips
	 */
	featuresTooltips: function(){
		$('<div id="feature-tip" class="feature-tip"></div><!-- / feature photos tooltip container -->').appendTo('body');
		$('.features-list a').tooltip({
			tip: '#feature-tip',
			position: 'bottom right',
			onBeforeShow: function(ev,pos){
				var api = this;
				api.getTip().empty();
				$('<img src="'+api.getTrigger().attr('href')+'"/>').imagesLoaded(function($images,$proper,$broken){
					if( $broken.length ) {
						api.getTip().append('<div class="error"></div>');
					} else {
						var h = api.getTip().append(this).outerHeight();
						var bh = $('body').height() - $('.footer').outerHeight() - pos.top;
						if( bh < h ) {
							api.getTip().css('top',pos.top - (h-bh));
						}
						var w = api.getTip().outerWidth();
						var bw = $('body').width() - pos.left;
						if( bw < w ) {
							api.getTip().css('left',pos.left - (w-bw) - 12);
						}
					}
				});
				$('body').on('click.tip',function(){
					api.getTip().hide();
				});
			},
			onHide: function(){
				$('body').off('click.tip');
			}
		}).on('click',function(ev){
			ev.preventDefault();
			ev.stopPropagation();
		});
	},
	
	/**
	 * Bottom content navigation (green tabs)
	 */
	contentNavTabs: function(){
		$('.content-nav').tabs('.content-nav-pane',{
			tabs: 'li',
			current: 'active'
		});
		
		$('#map-tabs').on('onClick',function(){
			var api = $(this).data('tabs');
			$('.content-pane').hide().eq(api.getIndex()).show();
		});
		
		$('#gallery-tabs').on('onClick',function(){
			var api = $(this).data('tabs');
			$('.content-pane').hide().eq(api.getIndex()).show();
			$(window).resize();
		});
	},
	
	/**
	 * In-content tabs (on floorplans page)
	 */
	innerTabs: function(){
		$('.inner-tabs').each(function(){
			$(this).tabs($(this).siblings('.panes').children('.inner-pane'));
		})
	},
	
	/**
	 * Floorplans carousel
	 */
	floorplansCarousel: function(){
		if( $('.carousel-wrapper').length ) {
			$('.carousel').scrollable({
				next: '.carousel-next',
				prev: '.carousel-prev',
				onBeforeSeek: function(ev,index){
					var $tabs = $('.carousel-tabs a');
					var $item = this.getItems().eq(index);
					if( !$item.is('[id]') ) {
						$item = $item.prevAll('[id]').first();
					}
					if( $item.length ) {
						$tabs.removeClass('current').filter('[href=#'+$item.attr('id')+']').addClass('current');
					}
				}
			});
			$('.carousel').data('scrollable').seekTo(0);
			$('.carousel-tabs a').on('click',function(ev){
				ev.preventDefault();
				$('.carousel').data('scrollable').seekTo($($(this).attr('href')).index());
			});
			
			$(window).resize(function(){
				$('.carousel-wrapper').each(function(){
					var $wrapper = $(this);
					$wrapper.add('.inner-pane',$wrapper).add('.inner-pane img',this).height('');
					$('.panes',$wrapper).add('.floorplans',$wrapper).width('');
					var diff = $wrapper.closest('.content-pane').height() - $wrapper.closest('.scrollable-content').outerHeight();
					$wrapper.height('+='+diff);
					$('.panes',this).each(function(){
						var max = 0;
						$('.inner-pane img',this).height('100%');
						$('.inner-pane',this).each(function(){
							var hidden = $(this).is(':hidden');
							if(hidden) {
								$(this).css('visibility','hidden').show();
							}
							
							var $img = $('img',this);
							if( $img.length ) {
								var $info = $(this).closest('.floorplan').find('.info');
								$img.height( $wrapper.height() - $info.offset().top - $info.outerHeight() - 16 + $wrapper.offset().top );
								max = Math.max(max,$img.width());
							}
							
							if(hidden) {
								$(this).css('visibility','').hide();
							}
						});
						$(this).add($(this).closest('.floorplan')).width(max);
					});
				});
			});
			
			$('.carousel-wrapper img').imagesLoaded(function($images,$proper,$broken){
				$(window).resize();
			});
		}
	},
	
	/**
	 * Media gallery with kenburn effect
	 */
	mediaGallery: function(){
	
		if( $('#gallery-tabs').length ){
	
			$.multiGallery('#componentWrapper',{
					/*componentFixedSize: true/false. If you use 100% for width/height, or both on componentWrapper, set this to false.*/
					componentFixedSize: false,
					/*activeCategory: 0 = 1st category loaded, 1 = 2nd category loaded, 2 = 3rd category loaded... etc */
					activeCategory:0,
					/* forceImageFitMode: true/false. By default, only images bigger than component size will get proportionally resized to 'fit inside' or 'fit outside' mode. If this is true, all images will be forced into that mode. */
					forceImageFitMode: false,
					/* slideshowOn; true, false */
					slideshowOn: true,
					/* useGlobalDelay; true, false (use same timer delay for all slides, if false you NEED to set individual delays for all categories) */
					useGlobalDelay: true,
					/* slideshowDelay; global delay, in miliseconds */
					slideshowDelay: 3000,
					/* slideshowAdvancesToNextCategory: true/false. On the end of current category, go to next one, instead of loop current one. */
					slideshowAdvancesToNextCategory: false,
					/* randomPlay; true, false (random image play in category) */
					randomPlay: false,
					/* useSlideshowControls; true/false (if false, the code will remove it from the DOM)  */
					useSlideshowControls: true,
					/* useDescription; true/false (if false, the code will remove it from the DOM)  */
					useDescription: true,
					/* autoOpenDescription; true/false (automatically open description, if exist)  */
					autoOpenDescription: true,
					
					/* makeImageClickableForUrl: true/false. By default click on url button triggers url action. If this is true, whole image will be clickable for the same action as well.  */
					makeImageClickableForUrl: false,
					
					/* playlistPosition: top, right, left, bottom  */
					playlistPosition: 'bottom',
					/* playlistIndex: inside/outside (of the component)  */
					playlistIndex: 'outside',
					/* playlistSize: used ONLY if playlistIndex = outside! See help for styling componentWrapper css in this case!!
					Also note, your thumbs need to be the same size for all categories in this case because playlist background aint going to resize! */
					playlistSize: $('#gallery-tabs').outerHeight(),
					/* visibleMenuItems: visible menu items by default. Enter number (if they dont fit into provided area, the code will automatically reduce this number) or 'max' (maximum number that fits). */
					visibleMenuItems: 'max',
					/* visibleThumbs: visible thumb items by default. Enter number (if they dont fit into provided area, the code will automatically reduce this number) or 'max' (maximum number that fits). */
					visibleThumbs: 'max',
					/* menuSpacing: spacing between menu items, vertical or horizontal, depending on menu orientation */
					menuSpacing: 0,
					/* thumbSpacing: spacing between thumbs, vertical or horizontal, depending on thumb orientation */
					thumbSpacing: 20,
					/* thumbBorderRadius: Radius that masks thumbnail. Enter 0 for none or a number. */
					thumbBorderRadius: 0,
					/* menuBtnOffset: offset of menu buttons from the menu */
					menuBtnOffset: 0,
					/* menuBtnPosOffset: additional vertical/horizontal offset value for correcting btn position based on font look  */
					menuBtnPosOffset:0,
					/* thumbBtnOffset:  offset of thumb buttons from the thumbs */
					thumbBtnOffset: 10,
					/* playlistBgColor: playlist background color */
					playlistBgColor: '',
					
					/* thumbRolloverSize: thumb rollover size (stroke). Enter 0 for none. */
					thumbRolloverSize: 7,
					/* thumbRolloverColor: thumb rollover color  */
					thumbRolloverColor: '',
					/* thumbRolloverBorderRadius: Enter 0 for none or a number.*/
					thumbRolloverBorderRadius: 0,
					
					/* menuRolloverLRSize: menu rollover left/right size (stroke). Enter 0 for none. */
					menuRolloverLRSize: 10,
					/* menuRolloverTBSize: menu rollover top/bottom size (stroke). Enter 0 for none. */
					menuRolloverTBSize: 2,
					/* menuRolloverColor: menu rollover color  */
					menuRolloverColor: '',
					/* menuRolloverBorderRadius: Enter 0 for none or a number. */
					menuRolloverBorderRadius: 5,
					
					/* autoOpenPlaylist: true/false. Auto open playlist on beginning */
					autoOpenPlaylist: true,
					/* disableRightClick: true/false  */
					disableRightClick: false,
					/* usePreloader: true/false (if false, the code will remove it from the DOM) */
					usePreloader: true,
					/* maxDescriptionWidth: max width of the description */
					maxDescriptionWidth: 250,
					
					/* menuBeforeSpace: spacing before menu */
					menuBeforeSpace: 0,
					/* menuThumbSpace: spacing between menu and thumbs */
					menuThumbSpace: 4,
					/* thumbAfterSpace: spacing after thumbs  */
					thumbAfterSpace: 0,
					
					/* fixPlaylistToggleBtn: true/false. Embedded into playlist by default. (set this to false to manually position (in css) this button inside component) */
					fixPlaylistToggleBtn: true,
					/* thumbBgColor: background color behind thumbs, leave empty '' for none */
					thumbBgColor: '',
					/* menuBgColor:  background color behind menu, leave empty '' for none */
					menuBgColor: '',
					
					/* fixMenu: true/false. false by default (menu centered). Can be true ONLY if 'visibleMenuItems' != 'max'. 
					Set this to true to position it from side. */
					fixMenu: false,
					/* fixMenuSettings: side: left/right if menu = horizontal, top/bottom if menu = vertical */
					fixMenuSettings: {side: 'left',value: 200},
					/* fixThumbs: true/false. false by default (thumbs centered). Can be true ONLY if 'visibleThumbs' != 'max'. 
					Set this to true to position it from side */
					fixThumbs: false,
					/* fixThumbsSettings:  side: left/right if thumbs = horizontal, top/bottom if thumbs = vertical */
					fixThumbsSettings: {side: 'right',value: 200},
					
					iconsDir: '_ui/images/media-gallery',
					
					thumbsParent: $('#gallery-tabs').siblings('.content-nav-pane').eq(1).children('.thumbs'),
					thumbPadding: 5,
					thumbBorder: 1,
					thumbBtnBuffer: 30
				
			});
			
			//turn it on when tab is changed
			$('#gallery-tabs').on('onClick',function(){
				if( $(this).data('tabs').getIndex() == 1 ) {
					$.multiGallery.stopSlideshow();
					$.multiGallery.loadItem(0);
					$.multiGallery.startSlideshow();
				} else {
					$.multiGallery.stopSlideshow();
				}
			});
			
			$('.image_holder, .video_holder').touchwipe({
				wipeLeft: function() { $.multiGallery.nextItem(); },
				wipeRight: function() { $.multiGallery.previousItem(); },
				min_move_x: 20,
				min_move_y: 20,
				preventDefaultEvents: true
			});
			
			$('.content-nav-pane:eq(1) .thumbs').touchwipe({
				wipeLeft: function() { $('#nextThumbBtn').click(); },
				wipeRight: function() { $('#prevThumbBtn').click(); },
				min_move_x: 20,
				min_move_y: 20,
				preventDefaultEvents: true
			});
		}
	},
	
	tourThumbs: function(){
		$('#tour-thumbs').each(function(){
			var $tt = $(this);
			
			var setButtonsState = function(){
				var $inner = $tt.find('.thumb-holder-inner > div');
				var left = $inner.position().left;
				
				$('.prevThumbBtn, .nextThumbBtn',$tt).removeClass('disabled');
				if( left >= 0 ) {
					$('.prevThumbBtn',$tt).addClass('disabled');
				} else if ( left <= -$tt.find('.thumb').last().position().left+$tt.find('.thumb-holder-inner').width()+7 ) {
					$('.nextThumbBtn',$tt).addClass('disabled');
				}
			}
			
			$('.prevThumbBtn',$tt).click(function(){
				if( $(this).hasClass('disabled') ) {
					return;
				}
				
				var $inner = $tt.find('.thumb-holder-inner > div').stop(false, true);
				var left = $inner.position().left;
				$inner.animate({
					'left': Math.min(left+$tt.find('.thumb').outerWidth(true),0)
				},function(){
					setButtonsState();
				});
			});
			$('.nextThumbBtn',$tt).click(function(){
				if( $(this).hasClass('disabled') ) {
					return;
				}
				
				var $inner = $tt.find('.thumb-holder-inner > div').stop(false, true);
				var left = $inner.position().left;
				$inner.animate({
					'left': Math.max(left-$tt.find('.thumb').outerWidth(true),-$tt.find('.thumb').last().position().left+$tt.find('.thumb-holder-inner').width()+7)
				},function(){
					setButtonsState();
				});
			});
			
			$(window).resize(function(){
				var num = Math.floor(($tt.width()-40) / $tt.find('.thumb').outerWidth(true));
				var w = $tt.find('.thumb').outerWidth(true)*num - 6;
				var l = ($tt.width()-w)/2;
				$tt.find('.thumb-holder').width(w).css('left',l);
				$tt.find('.prevThumbBtn').css('left',l-20);
				$tt.find('.nextThumbBtn').css('left',w+l+10);
				
				setButtonsState();
			}).resize();
			
			$tt.touchwipe({
				wipeLeft: function() { $('.nextThumbBtn',$tt).click(); },
				wipeRight: function() { $('.prevThumbBtn',$tt).click(); },
				min_move_x: 20,
				min_move_y: 20,
				preventDefaultEvents: true
			});
			
			$('.thumb',$tt).click(function(ev){
				ev.preventDefault();
				var index = $(this).index();
				
				$('.thumb-rollover',$tt).animate({
					left: $(this).outerWidth(true)*index-7
				},200);
				
				/************** CALL YOUR CANVAS CHANGING CODE HERE ***********************/
			});
		});
	}
}


$(document).ready(function() {
	Camden.init();
});


