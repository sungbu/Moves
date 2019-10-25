(function ($,root) {
    var pageY = window.scrollY;
    var videoTop;
    function scroll() {
        $(window).scroll(function (e) {
            if(e.currentTarget.scrollY > pageY){
                $('.head').css({
                    'top':'-80px',
                    'opacity' : '0'
                })
            }
            if(e.currentTarget.scrollY < pageY){
                $('.head').css({
                    'top':'0',
                    'opacity' : '1',
                    'border' : 'none'
                })
            }
            if(e.currentTarget.scrollY <= 0){
                $('.head').css({
                    'border-bottom' : '2px solid #fff'
                })
            }
            pageY = e.currentTarget.scrollY;
        })
    }
    root.srcoll = scroll
} (window.jQuery,window.player || (window.player = {})))