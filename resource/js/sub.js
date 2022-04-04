$(function () {
	dropDownMenu();
});
function dropDownMenu(){//서브 메뉴
	$('.depth').setMenu();
	$('.question_wrap').setMenu();
  }
  
  $.fn.setMenu = function () {//서브 로케이션 메뉴
	var depth1LI = $('> a', this);
	var depth2UL = $('> ul', this);
	
	//첫 메뉴 선택
	var menu = $('.depth:first-child', this);
	menu.addClass('active');
	
	if ($('>ul', menu).length > 0) {
	  $('>ul', menu).slideDown("fast");
	  menu = $('>ul>li:first', li);
	  menu.addClass('active');
	  if ($('>ul', menu).length > 0) {
		$('>ul', menu).slideDown("fast");
		menu = $('>ul>li:first', li);
		menu.addClass('active');
	  } else {
	  }
	} else {
	}
	//첫 메뉴 선택
	
	$('a', this).click(function () {
	  var depth = $(this).parent();
	  var sibling = depth.siblings();
	
	  sibling.removeClass('active');
	  //$('li', sibling).removeClass('active');
	  $('ul', sibling).slideUp("fast");
	  depth.toggleClass('active');
	
	  var ul = $('>ul', depth);
	  if (ul.length > 0) {
		ul.slideToggle("fast", function () {
		  //$('body').setLayout();
		});
		return false;
	  } else if ($(this).attr('target') != '_blank') {
		//$('#loFrmContent').attr('src', $(this).attr('href') + '?timestamp=' + new Date().getTime());
		//return false;
	  }
	});
  };