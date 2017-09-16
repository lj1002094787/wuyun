	$('.am-icon-arrow-circle-up').hide(); //隐藏go to top按钮

	$(window).scroll(function() {
		// console.log($(this).scrollTop());

		//当window的scrolltop距离大于1时，go to 

		if($(this).scrollTop() > 100) {
			$('.am-icon-arrow-circle-up').fadeIn();
		} else {
			$('.am-icon-arrow-circle-up').fadeOut();
		}
	});