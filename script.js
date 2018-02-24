document.addEventListener("DOMContentLoaded", function(e) {
  console.log('Man can never be hot!');

  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  });

  const removeTransition = function(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
    console.log(this.classList);
    this.className='key';
  };

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  console.log(keys);

});
