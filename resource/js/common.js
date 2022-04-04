$(function () {
	gnbSubMenu();
	gnbBarMovefn();
	sitemap();
});


//Tweenmax를 이용한 header  
function gnbSubMenu(){
	var gnb = $(".gnb");
	var gnbChild = $(".gnb > div");
	var gnbTitle = gnb.find('a');

	gnbChild.on({
		mouseover: function(){
			$(this).addClass('on')			
		},
		mouseleave: function(){
			$(this).removeClass('on');
		}
	});
	gnbTitle.mouseover(function(){
		headerOpen();
	});
	$('.header').mouseleave(function(){
		headerClose();
		//$('body').css('overflow', 'initial')
	});

	function headerOpen() {  //Tweenmax를 이용한 헤더 메뉴 슬라이드 open
		TweenMax.killAll();
		TweenMax.to($(".header"), .5, {
			height : 400,
			ease : 'easeOutExpo'
		});
		$(".header__inner").addClass("on");
	}

	function headerClose() {  //Tweenmax를 이용한 헤더 메뉴 슬라이드 close
		TweenMax.killAll();
		TweenMax.to($(".header"), .5, {
			height : 100,
			ease : 'easeOutExpo',
			onComplete : function() {
				$(".header__inner").removeClass("on");
			}
		});
		$('.overlay').removeClass('on');
		$(".gnb-hover-bar").removeClass("on");
		$("#gnb > li > a").removeClass("on");
	}


	

}

var gnbBarWidth;
function gnbBarMovefn() {
	$("#gnb > li > a").mouseover(function() {
		$(this).addClass("on");
		$(this).parent().siblings().children().removeClass("on");
		
		$(this).next().addClass("on");
		$("#gnb > li > a+ul>li>a").mouseover(function() {
			$(this).parent().parent().prev().addClass("on");
			$(this).parent().parent().parent().siblings().children().removeClass("on");
		});
	});
	
	
	$(".depth2").mouseover(function() {
		//$("#gnb > li > a").removeClass("on");
		// var indexNum = $(this).parent().index();
		// TweenMax.to($(".gnb_hover_bar"), .2, {
		// 	left : gnbBarWidth * indexNum
		// });
	});
}

function sitemap(){
	$(".button-sitemap").click(function(){
		//$(this).toggleClass("open");
		$(this).parent().next().toggleClass("open");
		$("html, body").addClass("overflow-hidden");
	})
	$(".sitemap-header .button-close").click(function(){
		$(".sitemap").removeClass("open");
		$("html, body").removeClass("overflow-hidden");
	})
}