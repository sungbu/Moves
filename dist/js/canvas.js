!function(){document.onselectstart=function(){return!1},$("body").on("mousedown",function(){var t=parseInt($(".bottom").css("height"));t+=70,$(".bottom").css("height",t+"px"),$("body").on("mouseup",function(){var t=parseInt($(".bottom").css("height"));t=0,$(".bottom").css("height",t+"px"),parseInt($(".bottom").css("height"))>130&&($(".canvas").show().css({top:0}),setTimeout(function(){$(".wrapper").show(),$(".cnavas-wrap").css("top","-100vh")},800))})})}();