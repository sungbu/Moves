(function () {
    document.onselectstart = function () { return false; };
    $('body').on('mousedown', function (e) {
        var oHeight = parseInt($('.bottom').css('height'));
        oHeight += 70;
        $('.bottom').css('height', oHeight + 'px')
        $('body').on('mouseup', function () {
            var oHeight = parseInt($('.bottom').css('height'));
            oHeight = 0;
            $('.bottom').css('height', oHeight + 'px')
            if (parseInt($('.bottom').css('height')) > 130) {
                $('.canvas').css('top', 0)
            }
        })
    })
    $(document).ready(function () {
        $('.moves').css('marginLeft', 0)
        setTimeout(function () {
            $('.shleter').css('top', 0)

            setTimeout(function () {
                $('.shleter').css('height', 0)
            }, 1000);
        }, 500);
        $('.video').css('top','50%')
    });

}())