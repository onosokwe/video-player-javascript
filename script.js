function firstRun(){
    barSize = 600;
    movie = document.getElementById('movie');
    playButton = document.getElementById('playButton');
    defaultBar = document.getElementById('defaultBar');
    progressBar = document.getElementById('progressBar');

    playButton.addEventListener('click', playPause, false);
    defaultBar.addEventListener('click', clickedBar, false);
}

function playPause(){
    if(!movie.paused && !movie.ended){
        movie.pause();
        playButton.innerHTML = 'Play';
        window.clearInterval(updateBar);
    } else {
        movie.play();
        playButton.innerHTML = 'Pause';
        window.setInterval(update, 500);
    }
}

function update(){
    if(!movie.ended){
        var size = parseInt(movie.currentTime*barSize/ movie.duration);
        progressBar.style.width = size+'px';
    } else {
        progressBar.style.width = '0px';
        playButton.innerHTML = 'Play';
        window.clearInterval(updateBar);
    }
}

function clickedBar(e){
    if(!movie.paused && !movie.ended){
        var mouseX = e.pageX - defaultBar.offsetLeft;
        var newtime  = mouseX * movie.duration / barSize;
        movie.currentTime = newtime;
        progressBar.style.width = mouseX+'px';
    }
}

window.addEventListener('load', firstRun, false);