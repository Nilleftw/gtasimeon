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
};

$(document).ready(main);