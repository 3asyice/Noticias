// seleciona todos os elementos de áudio
const audioPlayers = document.querySelectorAll('.audio-player');

// função para reproduzir a próxima música
function playNext(currentPlayer) {
  // encontra o próximo <section class="pop__song">
  const nextAudioSection = currentPlayer.parentElement.parentElement.nextElementSibling;

  if (nextAudioSection && nextAudioSection.classList.contains('pop__song')) {
    const nextAudioElement = nextAudioSection.querySelector('audio');
    if (nextAudioElement) {
      // Pausa a música atual
      const currentAudio = currentPlayer.querySelector('audio');
      currentAudio.pause();
      currentAudio.currentTime = 0; // Reseta o tempo
      // Reproduz a próxima música
      nextAudioElement.play();
    }
  }
}

// adiciona ouvintes de eventos a cada botão de play e trata o evento 'ended'
audioPlayers.forEach(player => {
  const audio = player.querySelector('audio');
  const playButton = player.querySelector('.play');
  const pauseButton = player.querySelector('.pause');
  const stopButton = player.querySelector('.stop');

  playButton.addEventListener('click', () => {
    // Pausa todos os outros áudios
    audioPlayers.forEach(p => {
      const otherAudio = p.querySelector('audio');
      if (otherAudio !== audio) {
        otherAudio.pause();
        otherAudio.currentTime = 0; // Reseta o tempo
      }
    });
    audio.play();
  });

  pauseButton.addEventListener('click', () => {
    audio.pause();
  });

  stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0; // Reseta o tempo
  });

  // Evento para reproduzir a próxima música quando a atual acabar
  audio.addEventListener('ended', () => {
    playNext(player);
  });
});
