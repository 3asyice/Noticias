// seleciona todos os elementos de áudio
const audioPlayers = document.querySelectorAll('.audio-player');

// função para reproduzir a próxima música baseada no ID
function playNext(currentPlayer) {
  const nextAudioId = currentPlayer.querySelector('.next').getAttribute('data-next');
  const nextPlayer = [...audioPlayers].find(player =>
    player.querySelector('audio').getAttribute('data-audio-id') === nextAudioId
  );

  if (nextPlayer) {
    const nextAudioElement = nextPlayer.querySelector('audio');
    const currentAudio = currentPlayer.querySelector('audio');

    currentAudio.pause(); // Pausa a música atual
    currentAudio.currentTime = 0; // Reseta o tempo
    nextAudioElement.play(); // Reproduz a próxima música

    // Atualiza o título da página e o título da mídia
    const nextTitle = nextPlayer.querySelector('h2').textContent;
    document.title = nextTitle;
    updateMediaMetadata(nextTitle);
  }
}

// Função para atualizar os metadados da mídia
function updateMediaMetadata(title) {
  if (typeof document.mediaSession !== 'undefined') {
    document.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: 'Artista Desconhecido', // Você pode adicionar o artista aqui se desejar
      album: 'Álbum Desconhecido' // Você pode adicionar o álbum aqui se desejar
    });
  }
}

// adiciona ouvintes de eventos a cada botão de play, pause, stop e next
audioPlayers.forEach(player => {
  const audio = player.querySelector('audio');
  const playButton = player.querySelector('.play');
  const pauseButton = player.querySelector('.pause');
  const stopButton = player.querySelector('.stop');
  const nextButton = player.querySelector('.next'); // Botão para próxima música

  // Evento para reproduzir a próxima música quando a atual termina
  audio.addEventListener('ended', () => {
    playNext(player); // Chama a função para tocar a próxima música
  });

  playButton.addEventListener('click', () => {
    audioPlayers.forEach(p => {
      const otherAudio = p.querySelector('audio');
      if (otherAudio !== audio) {
        otherAudio.pause(); // Pausa outros áudios
        otherAudio.currentTime = 0; // Reseta o tempo
      }
    });
    audio.play(); // Reproduz a música atual

    // Atualiza o título da página e o título da mídia
    const currentTitle = player.querySelector('h2').textContent;
    document.title = currentTitle;
    updateMediaMetadata(currentTitle);
  });

  pauseButton.addEventListener('click', () => {
    audio.pause(); // Pausa a música
  });

  stopButton.addEventListener('click', () => {
    audio.pause(); // Pausa a música
    audio.currentTime = 0; // Reseta o tempo
  });

  // Evento para reproduzir a próxima música ao clicar no botão "Próxima Música"
  nextButton.addEventListener('click', () => {
    playNext(player); // Chama a função para tocar a próxima música
  });
});
