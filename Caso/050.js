const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const terra = document.querySelector('.terra')

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const jump = () => {

  mario.classList.add('jump');

  setTimeout(() => {

    mario.classList.remove('jump');

  }, 700);
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
  const terraPosition = +window.getComputedStyle(terra).left.replace('px', '');

  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    pipe.style.width = '25%';

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'img/videotogif_2025.01.01_22.47.08.gif';
    mario.style.width = '140px';
    mario.style.marginLeft = '35px';

    cloud.style.animation = 'cloud 20s infinite linear';
    cloud.style.left = `${cloudPosition}px`;
    terra.style.animation = 'giro 20s infinite linear';
    terra.style.left = `${terraPosition}px`;
    gameOver.style.visibility = 'visible';

    clearInterval(loop);
  }
}, 10);

const restart = () => {

  gameOver.style.visibility = 'hidden';

  pipe.style.animation = 'pipe-animations 1.5s infinite linear';
  pipe.style.left = ``;

  mario.src = 'img/videotogif_2025.01.05_14.04.07.gif';
  mario.style.width = '140px';
  mario.style.bottom = '0px';
  mario.style.marginLeft = '';
  mario.style.animation = '';

  cloud.style.left = ``;
  terra.style.left = ``;
  const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    const terraPosition = +window.getComputedStyle(terra).left.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;
      pipe.style.width = '25%';
      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = 'img/videotogif_2025.01.01_22.47.08.gif';
      mario.style.width = '140px';
      mario.style.marginLeft = '35px';

      cloud.style.animation = 'cloud 20s infinite linear';
      cloud.style.left = `${cloudPosition}px`;
      terra.style.animation = 'giro 20s infinite linear';
      terra.style.left = `${terraPosition}px`;
      gameOver.style.visibility = 'visible';

      clearInterval(loop);
    }
  }, 10);
}

document.addEventListener('click', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);
document.addEventListener('DOMContentLoaded', function() {
  // Criar o elemento de áudio
  var audio = new Audio('https://raw.githubusercontent.com/3asyice/Noticias/main/M/Song/Alpha Centauri.m4a');

  // Adicionar evento de clique ao documento
  document.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
    }
  });
});
