var main = function() {
    $('.non-active').click(function(){
    	if( $(this).hasClass("active") ){
    		$(this).removeClass();
    		$(this).addClass("non-active");
    	}
    	else {
    		$(".active").removeClass();
    		$(this).addClass('active');
            
    	}
    	}
    );


/*    $(document).scroll(function(){
        $(".toTop").fadeIn(200);
    });*/
    $(".toTop").hide();

    $(window).scroll(function(){
        var height = $(window).scrollTop();

        if (height == 0){
            $(".toTop").fadeOut(200);
        }

        else if (height != $(window).height()){
            $(".toTop").fadeIn(200);
        }
    });
};

$(document).ready(main);