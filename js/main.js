$(document).ready(function($) {

    // Controls appearance of the 'back to top' caret

    $(window).scroll(function() {
        var height = $(window).scrollTop();

        if(height > 400) {
          $('.scrollHome').css('display', 'flex');
        }
        else {

            $('.scrollHome').css('display', 'none');
        }
    });


	$('#topbar').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

/**Controls appearance of mobile navbar*/
$(".button-collapse").sideNav();




});
