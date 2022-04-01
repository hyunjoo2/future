$(function () {
	subFooter();
	breadcrumb();
	tabType();
	tabmenu();
	allCheck();
	//tablePlus();
});


function subFooter() {
	$(".contents").next().children().addClass("sub");
}

function breadcrumb(){
	$(".breadcrumb__inner>ul>li:not(.home)>a").next().hide();
	$(".breadcrumb__inner>ul>li:not(.home)>a").click(function(){
		$(this).next().slideToggle();
		$(this).parent().toggleClass("active");
		$(this).parent().siblings().children().next().slideUp();
	})
}

function tabType() {
	$(".tab-type>ul>li").click(function () {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	})
}

function tabmenu() {
	//tab-menu
	$('ul.tab:not(.tabStyle) li').click(function () {
		var activeTab = $(this).attr('data-tab');
		$('ul.tab:not(.tabStyle) li').removeClass('current');
		$('.tabcontent').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	})

}

$(function () {
	// 레지던트 선택시 과목명과 연차 활성화 
	$("#res").click(function () {
		$(".displayToggle").addClass("d-flex");
	});
	$("#intern").click(function () {
		$(".displayToggle").removeClass("d-flex");
	});


	//대리인 체크시 팝업 노출
	$(".deputy").click(function () {
		if ($(this).prop("checked")) {
			$("#modal-deputy").modal();
		}
	});

	//구분 check
	$('.check-one input[type="checkbox"]').click(function () {
		if ($(this).prop('checked')) {
			$('input[type="checkbox"][name="type"]').prop('checked', false);
			$(this).prop('checked', true);
		}
		if ($(".clickDis").prop('checked')){
			$(".type1ClickDis").attr('disabled', 'disabled');
		}else{
			$(".type1ClickDis").removeAttr("disabled");
		}
	});

})

$(function(){
	//resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
	$(window).resize(function () {
		var width = $(window).width();
		if (width<=720) {
			$(".table:not(.ver) .table__inner").mouseover(function(){
				$(this).addClass("scroll");
			});
			$(".table:not(.ver) .table__inner").scroll(function(){
				$(this).addClass("scroll");
			});
			// $(".table__inner").mouseout(function(){
			// 	$(this).removeClass("scroll");
			// });
		} 
		
	});

	$(window).trigger("resize"); //강제로 호출하는 함수

});


function allCheck(){
	//전체 check

	$("#allCheck").click(function() {
		if($("#allCheck").is(":checked")) $(".th-check input").prop("checked", true);
		else $(".th-check input").prop("checked", false);
	});
	
	$(".th-check input").click(function() {
		var total = $(".th-check input").length;
		var checked = $(".th-check input:checked").length;
		
		if(total != checked) $("#allCheck").prop("checked", false);
		else $("#allCheck").prop("checked", true); 
	});

}

