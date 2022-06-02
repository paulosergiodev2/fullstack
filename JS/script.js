let video= document.getElementsByClassName("videosol")[0];

function play(){
    video.play();
    video.currentTime = 1;
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}

function dec(){
    video.playbackRate -= 0.2;
}

function inc(){
    video.playbackRate += 0.3;
}

function retroceder(){
    video.currentTime -= 10;
}

function avancar(){
    video.currentTime += 10;
}