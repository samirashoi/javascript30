function playAudio(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);

    if(!audio) return;

    key.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
    
}       


function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll(`div.key[data-key]`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


document.addEventListener('keydown', playAudio);
