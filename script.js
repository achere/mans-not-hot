document.addEventListener("DOMContentLoaded", function() {
  console.log('Man can never be hot!');

  const keys = document.querySelectorAll('.key');

  const removeTransition = function(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
  };
  /*const testFun = function(e) {
    console.log('testFun ', this.attributes['data-key'].value);
  };*/
  const playSound = function(code) {
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  };

  window.addEventListener('keydown', function(e) {
    playSound(e.keyCode);
  });

  keys.forEach(key => {
    key.addEventListener('click', function() {
      playSound(this.attributes['data-key'].value);
    });
    key.addEventListener('transitionend', removeTransition)
  });
});
