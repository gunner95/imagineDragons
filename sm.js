$(document).ready(function(){
$("#navigationdrop").click(function(){
	$("#navigdrop").slideToggle("slow");	
	
	
});	

$(".gallery").find("*").on({
    mouseenter: function(){
        $(this).addClass("imgbig");
		$("#box").css({"display":"block"});
		$("#reviewbox").css({"visibility":"hidden"});
		$(".gallery").find("img").not(this).addClass("notimg");
		$("#box").css({"font":"black"});
		var x;
		x = $(this).attr("id");
		switch (x){
			case "0":$("#box").append(($("#box").html("<h2>Lyrics</h2>")),($("#box").text("It comes back to you")));
					$("#box").css({"backgroundColor":"#003366"});
			break;
			case "1":$("#box").html("<h2>I'm So Sorry</h2><br> About time for anyone telling you off for all your deeds<br>No sign the roaring thunder stopped in cold to read<br>No time<br>Get mine and make no excuses waste of precious breath<br>No time<br>The sun shines on everyone, everyone love yourself to death");
					$("#box").css({"backgroundColor":"#CC9933"});
			break;
			case "3":$("#box").append(($("#box").html("<h2>Lyrics</h2>")),($("#box").text("It comes back to you")));
					$("#box").css({"backgroundColor":"#FF9966"});
			break;
			case "4":$("#box").append(($("#box").html("<h2>Lyrics</h2>")),($("#box").text("It comes back to you")));
					$("#box").css({"backgroundColor":"#989898 "});
			break;
			case "5":$("#box").append(($("#box").html("<h2>Lyrics</h2>")),($("#box").text("It comes back to you")));
					$("#box").css({"backgroundColor":"#FFFF66"});
			break;
			case "6":{$("#box").html("<h2><center>Shots</center></h2><br>I'm sorry for everything<br>Oh, everything I've done<br>Am I out of touch?<br>Am I out of my place?<br>When I keep saying that I'm looking for an empty space<br>Oh, I'm wishing you're here<br>But I'm wishing you're gone<br>I can't have you and I'm only gonna do you wrong<br>Oh, I'm going to mess this up<br>Oh, this is just my luck<br>Over and over and over again");
					  $("#box").css({"backgroundColor":"#0066CC"});
			}
			break;
			case "8":$("#box").append(($("#box").html("<h2>Lyrics</h2>")),($("#box").text("It comes back to you")));
					$("#box").css({"backgroundColor":"#006633"});
			break;
		};
    }, 
    mouseleave: function(){
        $(this).removeClass("imgbig");
		$("img").not(this).removeClass("notimg");
		$("#box").css({"display":"none"});
		$("#box").empty();
		$("#reviewbox").css({"visibility":"visible"});
    }
        
	   
     
});
});
