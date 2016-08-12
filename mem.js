$(document).ready(function(){

$("#row2").children("div").on({
    mouseenter: function(){
		var x;
		x = $(this).attr("id");
		switch(x){
				case "0":$(".b1").css({"visibility":"visible"});
						
				break;
				case "1":$(".b2").css({"visibility":"visible"});
				break;
				case "2":$(".b3").css({"visibility":"visible"});
				break;
				case "3":$(".b4").css({"visibility":"visible"});
				break;
			};
		};
    }, 
    mouseleave: function(){
		$("#circlebox").css({"visibility":"hidden"});
    }
        
	   
     
});
});
