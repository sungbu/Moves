
(function () {
    var root = window.player;
    var audio = root.audioManger;
    var flag = 0;
    init();
    function init () {
        playAudio();
        bindEvent();
        root.srcoll();
    }
    function playAudio () {
        audio.play();
    }
    function bindEvent () {
        $('.audio').on('click',function () {
            if(audio.status == 'play'){
                audio.pause();
                $('.audio').addClass('active')
            }else{
                audio.play();
                $('.audio').removeClass('active')
            }
        })
    }
    $(document).ready(function () {
        setTimeout(function () {
            $('.loading').css('display','none')
            $('.cnavas-wrap').show()
        },2200)
    });

} ())
