const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeCSSTransition));

window.addEventListener('keydown', playSound);

const btns = Array.from(document.getElementsByClassName('key'));
btns.forEach(btn => btn.addEventListener('click', playSound)); 

function removeCSSTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  if (e.type === "keydown") {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  if (e.type === "click") {
    const dataKey = this.getAttribute('data-key'); 
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    const key = document.querySelector(`div[data-key="${dataKey}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
}

