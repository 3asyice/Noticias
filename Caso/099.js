  const oklahoma = document.getElementById('az').innerHTML = `
      <h2>Bomba caseira</h2>
      <div class="youtube">
        <span class="image">P</span>
        <p class="author" onclick="ytube_redc()">@pedroalvaressantos6220 • <span id="tempo__do__comentario">há 1 ano</span></p>
        <p>O sistema quer que você acredite que você só se tornará algo após conquistar posições na sociedade e ser capaz de adquirir posses, mas a verdade é que você é um ser infinitamente poderoso porque seus laços congênitos estão diretamente ligados a fonte criativa da vida primordial você é um deus livre em essência, mas não querem que você tenha certeza disso. </p>
      </div>
      <article class="article">
        <p>Muitas explosões ocorrem devido a reações de combustão, nas quais um combustível reage de forma rápida com um oxidante, tipicamente o oxigênio, resultando na liberação de calor e gases. Um exemplo comum dessa reação é a combustão de hidrocarbonetos.</p>
        <p>Além disso, existem reações de decomposição, onde certas substâncias se quebram rapidamente em produtos gasosos, liberando energia. Um caso ilustrativo é a decomposição do peróxido de hidrogênio, que, ao se desintegrar em água e oxigênio, pode provocar uma explosão se a reação for acelerada.</p>
        <p>Misturas explosivas também representam um risco significativo, pois certas combinações de substâncias químicas podem ser instáveis e suscetíveis a explosões. Por exemplo, a combinação de clorato de potássio com açúcar pode se tornar explosiva se não for manipulada com a devida cautela.</p>
        <p>Ademais, alguns explosivos apresentam sensibilidade à fricção, calor ou impacto, o que implica que podem detonar acidentalmente se não forem manuseados com precaução. Por último, reações que produzem gases rapidamente podem resultar em explosões se ocorrerem em ambientes confinados, onde a pressão gerada não consegue se dissipar.</p>
        <p>A fabricação de explosivos caseiros é um tema cercado de desinformação. Contudo, a produção de nitroglicerina pode resultar em um explosivo extremamente potente, capaz de causar detonações significativas.</p>
       <video poster="/img/McVey.jpg" style="margin-left:100px;border:3px solid #06A49E" controls width="200" height="200" 
       disablePictureInPicture controlsList="nofullscreen nodownload">
    <source src="https://raw.githubusercontent.com/3asyice/Noticias/main/Caso/a/Canal History Brasil - O Atentado de Oklahoma City ｜ EU ESTAVA LÁ ｜ HISTORY.mp4" type="video/mp4">
</video>
      </article>`;


  let anos = 1; // Inicializa a contagem de anos

  function atualizarTempoComentario() {
    const tempoElement = document.getElementById('tempo__do__comentario');

    // Atualiza o texto para refletir o número de anos
    tempoElement.textContent = `há ${anos} ano${anos > 1 ? 's' : ''}`;

    // Incrementa o número de anos
    anos++;
    localStorage.setItem('anos', anos);
  }

  // Configura a atualização para acontecer a cada 1 ano
  setInterval(atualizarTempoComentario, 31557600000); // Atualiza a cada 1 ano

  function ytube_redc() {
    window.location.href = "https://youtube.com/watch?v=Jg1TRLgsDls&lc=UgxlOT9bcBoKjPurHLh4AaABAg&si=cqioa1F_LTPBVSVz&t=51s";
  }

  const definitionText = 'Informação que, quando revelada, pode representar uma ameaça à segurança de quem a detém. Um exemplo disso é o século XVII, quando mulheres que eram consideradas detentoras de conhecimentos ocultos ou de métodos de contracepção enfrentavam um risco elevado de serem acusadas de feitiçaria.';
  const imageHTML = '<img id="dangerImage" width="16" height="16" src="https://raw.githubusercontent.com/3asyice/Noticias/main/Caso/aeropass/icons8-danger-100.png" alt="danger">';
  const definition = document.getElementById('definition');
  definition.style.display = 'none';

  function carregar() {
    definition.style.display = 'block';
    digitarTexto(definitionText + ' ', definition);
    criarTitulo();
  }

  function digitarTexto(text, element) {
    let index = 0;

    function typing() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typing, 54);
      } else {
        element.innerHTML += imageHTML;
        iniciarAnimacaoImagem();
      }
    }

    typing();
  }

  function iniciarAnimacaoImagem() {
    const image = document.getElementById('dangerImage');
    image.style.display = 'inline-block'; // Exibe a imagem inicialmente

    setInterval(() => {
      if (image.style.display === 'inline-block') {
        image.style.display = 'none'; // Esconde a imagem
      } else {
        image.style.display = 'inline-block'; // Mostra a imagem
      }
    }, 1000); // Alterna a cada 1 segundo
  }

  function criarTitulo() {
    const titleText = "INFOHAZARD"; // Texto do título
    const header = document.getElementById('header');

    // Adiciona cada letra como um elemento separado
    for (let i = 0; i < titleText.length; i++) {
      const char = titleText[i];
      const span = document.createElement('span');
      span.classList.add('letter');
      span.textContent = char;

      // Aplica uma animação diferente a cada letra
      const rotationDirection = Math.random() > 0.5 ? 1 : -1; // Decide aleatoriamente a direção
      const animationDuration = Math.random() * 2 + 9; // Duração da animação entre 1s e 3s
      span.style.animation = `spin ${animationDuration}s infinite`;

      header.appendChild(span);
    }
  }

  let clickCount = 0; // Contador de cliques

  function colorChange() {
    const title = document.getElementById('title');
    clickCount++;

    if (clickCount < 3) {
      title.style.color = 'yellow'; // Muda a cor do texto para amarelo
      title.style.textShadow = '1px 1px 18px blue'; // Adiciona sombra de texto azul
    }
    else if (clickCount < 4) {
      title.style.color = 'pink';
      title.style.textShadow = '1px 1px 18px pink ';
    }
    else if (clickCount < 5) {
      title.style.color = '#00ff00';
      title.style.textShadow = '1px 1px 18px #00ff00 ';
    }

    else if (clickCount < 6) {
      title.style.color = 'red';
      title.style.textShadow = '1px 1px 18px red ';
    }
    else {
      // Reseta para o estado original
      title.style.color = '#97FFFC'; // Cor original
      title.style.textShadow = 'none'; // Remove a sombra
      clickCount = 0; // Reseta o contador
    }
  }
