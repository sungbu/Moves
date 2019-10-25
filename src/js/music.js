(function ($,root) {
    function AudioManger () {
        this.audio = new Audio();
        this.audio.src = "/dist/audio/best-of-your-todays.mp3";
        this.audio.load();
        this.audio.loop = true;
        this.status = 'pause'
    }
    AudioManger.prototype.play = function () {
        this.audio.play();
        this.status = 'play'
    }
    AudioManger.prototype.pause = function () {
        this.audio.pause();
        this.status = 'pause'
    }
    root.audioManger = new AudioManger();
    
} (window.jQuery,window.player || (window.player = {})))