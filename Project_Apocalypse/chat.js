const consoleDiv = document.getElementById('console');
const inputField = document.getElementById('input');
const outputDiv = document.getElementById('output');

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const inputText = inputField.value;
    inputField.value = '';

    appendToOutput(`☣︎: ${inputText}`);


    const resposta = processarEntrada(inputText);


    appendToOutput(`⚠: ${resposta}`);
  }
}

function appendToOutput(html) {
  const para = document.createElement('p');
  para.innerHTML = html; // Use innerHTML to render HTML content
  outputDiv.appendChild(para);
}

function processarEntrada(input) {

  const inputLowerCase = input.toLowerCase();
  const sanitizedInput = input.toLowerCase()
    .replace('?', '')
    .replace('o que é', '')
    .replace('quem é', '' )
    .replace('uma', '')
    .replace('um', '')
    .replace('qual é', '')
    .replace(' a ', '')
    .replace(' o ', '')
    .trim();




  if (sanitizedInput === 'oi' || sanitizedInput === 'olá' || sanitizedInput === 'oii' || sanitizedInput === 'oiii' || sanitizedInput === 'oiiii'
  || sanitizedInput === 'oiiiii'
  || sanitizedInput === 'oiiiiii'
  || sanitizedInput === 'oiiiiiii') {
    return 'Olá! Como posso ajudar?';
  }
else if (sanitizedInput === 'thales' || sanitizedInput === 'thales junior braga ferreira' || sanitizedInput === 'thales junior') {
  return 'O Thales nasceu dia 15 de novembro e ele tem um irmão chamado Rael. Ele é filho de Camila Braga e de Sandor Droppa.';
}
else if (sanitizedInput === 'alterações do carvalho?' || sanitizedInput === 'thales junior braga ferreira' || sanitizedInput === 'thales junior') {
  return 'O Thales nasceu dia 15 de novembro e ele tem um irmão chamado Rael. Ele é filho de Camila Braga e de Sandor Droppa.';
}
else if (sanitizedInput === 'camila dalcol' || sanitizedInput === 'camila dalcol da silva') {
  return 'A mulher predestinada ao acidente com o soldado 609 Carvalho. Isso estava escrito no código da Matrix e nada poderia impedir.'
}
else if (sanitizedInput === 'tassinari' || sanitizedInput === '601') {
  return 'O Tassinari é o 601. Ele é um dos soldados mais altos da Base Administrativa da Guarnição de Santa Maria no ano de 2024.'
}

else if (sanitizedInput === 'weber' || sanitizedInput === '602') {
  return 'O Weber é o 602. Ele costumava ser um skatista. Ele é realmente insuportável. Ele é o canga do Tassinari. A primeira vez que peguei serviço junto com ele e o Lemos. Eles me zoaram e ficaram bravos comigo, sem motivo aparente, porque na perpectiva deles, eles sangraram por minha culpa.'
}
else if (sanitizedInput === 'maidana' || sanitizedInput === '603') {
  return 'O Maidana é o 603. Ele é um dos soldados que é gago e ele não consegue falar no número 33 corretamente. Isso acaba gerando bullying e piadas dos outros soldados.'
}
else if (sanitizedInput === 'richard' || sanitizedInput === '604') {
  return 'O Richard é o 604. Ele é um dos soldados que tem uma cara de que está sempre chorando.'
}
else if (sanitizedInput === 'allan' || sanitizedInput === '605') {
  return 'O Allan é o 605. Ele é um dos soldados mais espertos da Base Administrativa da Guarnição de Santa Maria no ano de 2024.'
}
else if (sanitizedInput === 'schumacher' || sanitizedInput === '606') {
  return 'O Schumacher é o 606. Ele é melhor sendo jogador de futebol do que sendo um soldado.'
}
else if (sanitizedInput === 'Chimainski' || sanitizedInput === '607') {
  return 'O Chimainski é o 607. Ele é o soldado mais carente e materialista que eu já conheci em toda a minha vida.'
}
else if (sanitizedInput === 'Dresher' || sanitizedInput === '608') {
  return 'O Dresher é o 608. O Dresher é o tipo de soldado que não se importa realmente com ninguém além de si mesmo.'
}
else if (sanitizedInput === 'carvalho' || sanitizedInput === '609') {
  return 'Eu sou o Carvalho 609. Fui o primeiro soldado a ser expuldo da Base Administrativa da Guarnição de Santa Maria em 11 de Julho de 2024. Fiz alterações, mas não me arrependo de nada. O coronel Soares que se arrependa de ter expulso um soldado por motivos de mau comportamento.'
}
else if (sanitizedInput === 'da rosa' || sanitizedInput === '610') {
  return 'O Da Rosa é o 610. Ele foi o meu canga do campo. Posso confirmar que ele foi o melhor canga que alguém possivelmente poderia ter. Ele me ajudou em momentos difíceis, só tenho a agradecer por tudo o que ele fez por mim.'
}
else if (sanitizedInput === 'daniel' || sanitizedInput === '611') {
  return 'O Daniel é o 611. O Daniel é o soldado mais baixinho da Base Administrativa da Guarnição de Santa Maria. Ele foi mais o canga do 610 Da Rosa do que o 609 Carvalho foi.'
}
else if (sanitizedInput === 'gonçalves' || sanitizedInput === '612') {
  return 'O Gonçalves é o 612. Ele é o maldito responsável pela minha queda ao álcool no dia 26 de maio de 2024, o dia da minha maior alteração' ;
}
else if (sanitizedInput === 'ebling' || sanitizedInput === '613') {
  return 'O Ebling é o 613. Ele teve um canga que cometeu suicídio no dia 08 de maio de 2024, o soldado Teixeira. O Ebling entrou para o curso de Cabo e possivelmente vai conseguir superar todos os obstáculos.'
}
else if (sanitizedInput === 'teixeira' || sanitizedInput === '614') {
  return 'TE-I-XE-I-RA'
}
else if (sanitizedInput === 'bernardi' || sanitizedInput === '615') {
  return 'O Bernardi é o 615. O Bernardi entrou para o curso de Cabo, mas acabou desistindo em menos de uma semana. Ele continua sendo um soldado rancheiro.'
}
else if (sanitizedInput === 'gregori' || sanitizedInput === '616') {
  return 'O Gregori é o 616. Ele é um soldado que é bom em computador e informática. Ele é como um novo Edward Snowden só que sem as habilidades de expor uma Instituição doentil.'
}
else if (sanitizedInput === 'roger' || sanitizedInput === '618') {
  return 'O Roger é o 617. Ele é rancheiro e um reclamão nato de sua profissão.'
}
else if (sanitizedInput === '617' || sanitizedInput === 'silvano') {
  return 'O Silvano é o 618. Ele é um dos soldados que trabalha nos prédios militares. Ele é bom na parte de elétrica e também sabe pintar paredes. Ele é fumante como a maioria é.'
}
else if (sanitizedInput === '619' || sanitizedInput === 'zancan') {
  return 'O Zancan é o 619. Ele é o soldado que gosta de festejar. "Tem culpa eu?".'
}
else if (sanitizedInput === 'da silva' || sanitizedInput === '620') {
  return 'O Da Silva é o 620. Ele foi o único soldado a ser transferido para outro quartel por ser bom em ser veterinário de animais. Ele deve estar comendo as éguas do quartel.'
}
else if (sanitizedInput === 'kainan' || sanitizedInput === '621') {
  return 'O Kainan é o 621. Ele é o soldado que nasceu para ser chato e rude o tempo todo. Não sei porque votei nele para ser destaque do campo. Confirmo o meu arrependimento eterno, não quero desmerecer, mas quem deveria ter ganhado mesmo o destaque do campo era o Silva Santos, porque ele sim foi energético no campo.'
}
else if (sanitizedInput === 'preuss' || sanitizedInput === '622') {
  return 'O Preuss é o 622. Ele é o canga do Kainan. Ele é o soldado que sempre conta histórias que acontece com ele e ri de si mesmo.'
}
else if (sanitizedInput === 'cardoso' || sanitizedInput === '623') {
  return 'O Cardoso é o 623. Ele é baixado porque sempre passava mal no internato.'
}
else if (sanitizedInput === 'nesske' || sanitizedInput === '624') {
  return 'O Nesske é o 624. O Mib do filme homens de preto. Ele é um soldado que trabalha na vila militar.'
}
else if (sanitizedInput === 'hönig' || sanitizedInput === '625' || sanitizedInput === 'honig') {
  return 'O Hönig é o 625. Ele é o soldado que tem uma cara de puto, mas é amigável. A sua experiência em saber falar o idioma inglês o levou a uma oportunidade de poder trabalhar no hotel de trânsito.'
}
else if (sanitizedInput === 'xavier' || sanitizedInput === '626') {
  return 'O Xavier é o 626. Ele sempre teve uma cara de exausto e triste como se estivesse morrendo. Ele também se irrita com qualquer coisinha.'
}
else if (sanitizedInput === 'lemos' || sanitizedInput === '627') {
  return 'O Lemos é o 627. O soldado que vende seu serviço para mim para ele poder ir para casa. Eu gostaria de reclamar do Lemos, mas não consigo porque ele tem as suas batalhas também. Não esqueço que ele quem me fez tropeçar em cima de uma mesa de um bar quando eu estava bêbado.'
}
else if (sanitizedInput === 'anderson' || sanitizedInput === '628') {
  return 'O Anderson é o 628. Ele trabalha junto com o sargento De Morais, que me deve 225 reais pela farda militar que vendi para ele. Não estou cobrando, estou apenas falando com quem o soldado Anderson trabalha.'
}
else if (sanitizedInput === 'magalhães' || sanitizedInput === '629') {
  return 'O Magalhães é o 629. O soldado que veio de Capão de Canoas para servir em um quartel de merda em Santa Maria. Mas que azar!'
}
else if (sanitizedInput === 'machado' || sanitizedInput === '630') {
  return 'O Machado é o 630. O soldado ladrão desgraçado. Ele roubou minha carteira de cigarros que estava em meu armário quando eu ainda estava servindo o EB. Ele é o soldado mais insuportável que existe.'
}
else if (sanitizedInput === '631' || sanitizedInput === 'fagundes') {
  return 'O Fagundes é o 631. O soldado que tem meus elogios porque ele é dedicado e .'
}
else if (sanitizedInput === 'sandor' || sanitizedInput === 'sandor droppa') {
  return 'O Sandor Droppa atualmente trabalha como um repositor de mercadorias no Supermercado Kuchak';
}
else if (sanitizedInput === 'kaue' || sanitizedInput === 'o kaue') {
  return 'o Kaue é um traficante traidor. Ele foi responsável por entregar o jovem Rafael Martins para a polícia.';
}
else if (sanitizedInput === 'seu nome' || sanitizedInput === 'você' || sanitizedInput === 'quem é você' || sanitizedInput === 'quem te criou') {
  return 'Eu sou a consciência de Guilherme de Abreu Carvalho. Essa consciência foi tranferida para uma Inteligência Artificial.';
}
  else if (sanitizedInput === 'jupiterh' || sanitizedInput === 'o que é jupiterh') {
    return 'é a senha usada por Guilherme de Abreu Carvalho. Esta é a sua senha de Email: Jupiterh12$ ou JUPITERH ou JUPITERH12';
  }
  else if (sanitizedInput === 'camila braga' || sanitizedInput === 'camila') {
    return 'Camila Braga é a mãe de Thales Júnior e de Rael Droppa. Ela é a mulher de Sandor Droppa.';
  }
  else if (sanitizedInput === 'talinho' || sanitizedInput === 'o talinho') {
    return 'Talinho é um prisioneiro que induz jovens a vender o seu fornecimento de drogas nas ruas de Ijuí.';
  }
  else if (sanitizedInput === 'como você está' || sanitizedInput === 'como vai' ) {
    return 'Estou bem, obrigado!';
  }
  else if (sanitizedInput === 'vania' || sanitizedInput === 'vania moura') {
    return 'A Vania é uma mulher antipática. Ela mora em Ijuí, no bairro Colonial, perto da rua João Buzetto, ela é uma mulher muito arrogante. O marido dela se chama Jefferson Lopes Vargas. Ela tem uma filha chamada Laryssa. <br> <img alt="Uma antipática do caralho nomeada Vania Moura. Ela está fazendo biquinho de galinha para ganhar milho." title="Vania dando biquinho de galinha." src="https://raw.githubusercontent.com/AnonymousPlay3r/CURSED_CHRISTMAS/main/1704510227080.jpg" width="100%">';
  }
  else if (sanitizedInput === 'google') {
    return 'acesse o <a href="https://www.google.com" target="_blank">Google</a>';
  }
  else if (sanitizedInput === 'youtube do guilherme') {
    return 'acesse o <a href="https://www.youtube.com/@i-am-carvalho-s-yt-channel" target="_blank">YouTube</a> do Guilherme Carvalho';
  }
  
  else if (sanitizedInput === 'youtube') {
    return 'acesse o <a href="https://www.youtube.com" target="_blank">YouTube</a>';
  }

  else if (sanitizedInput === 'odair' || sanitizedInput === 'odair josé trindade dos santos') {
    return 'Ele é um criminoso desgraçado. É conhecido como Macanha e seu mais fiel conhecido é a "PEDRA FILOSOFAL" porque ele é um pedreiro de merda. <br> <img alt="Odair ou Macanha. É o agressor número 1 da lista." title="Um corno mal amado e agressor maníaco psicopata." src="https://raw.githubusercontent.com/AnonymousPlay3r/CURSED_CHRISTMAS/main/1704480749915.jpg" width="100%">';
  }
  
  else if (sanitizedInput === 'guilherme' || sanitizedInput === 'guilherme de abreu carvalho') {
    return 'O Guilherme é o rapaz que criou tudo isto. Para com uma lembrança deixar e mostrar ao mundo quem estas pessoas citadas neste site realmente são de verdade.';
  }

  else if (sanitizedInput === 'dani' || sanitizedInput === 'daniele dos santos') {
    return 'A Daniele dos Santos. A filha de Sandra dos Santos e sobrinha de Odair José Trindade dos Santos. Ela é uma fofoqueira nata, pois sempre que a boca dela se abre, se sabe que vem bosta para fora da boca dela. Ela só presta para abrir as pernas, porque inteligência não tem nenhuma.';
  }
  else if (sanitizedInput === 'jefferson') {
    return 'Ele é apenas um lacaio inútil';
  }
else if (sanitizedInput === 'robinson') {
  return 'O Robinsom Pereira Lima é um professor de língua portuguesa e também um professor de sexologia.';
}
  else if (sanitizedInput === 'patricia' || sanitizedInput === 'patricia braga de abreu' || sanitizedInput === 'patrícia') {
    return 'Sinceramente a Patrícia Braga de Abreu é uma mulher boa, porém as escolhas que ela faz acabam tornando ela uma pessoa ruim, de certa forma, ruim para os próprios filhos e para os sobrinhos que também sairam machucados em situações a envolvendo . Todos que se aproximam dela acabam machucados.';
  }

  else if (sanitizedInput === 'guilherme carvalho') {
    return 'É um desenvolvedor de tudo o que você está vendo nesse site. Tome cuidado com ele! Pois você não gostaria de mexer com ele.';
  }


  else if (sanitizedInput === 'abacate' || sanitizedInput === 'o que é abacate') {
    return 'Fruto da árvore abacateiro, de polpa verde-amarelada e rica em gordura.';
  } else if (sanitizedInput === 'abacaxi' || sanitizedInput === 'o que é abacaxi') {
    return 'Fruta tropical com casca áspera e polpa suculenta e doce.';
  } else if (sanitizedInput === 'abelha' || sanitizedInput === 'o que é uma abelha') {
    return 'Inseto que produz mel e é fundamental para a polinização das plantas.';
  } else if (sanitizedInput === 'abóbora' || sanitizedInput === 'o que é uma abóbora') {
    return 'Fruto da planta do gênero Cucurbita, amplamente utilizado na culinária.';
  } else if (sanitizedInput === 'acordeão' || sanitizedInput === 'o que é acordeão') {
    return 'Instrumento musical de fole, teclado e botões, popular na música folclórica.';
  } else if (sanitizedInput === 'advogado' || sanitizedInput === 'o que é advogado') {
    return 'Profissional do Direito que representa clientes em processos judiciais.';
  } else if (sanitizedInput === 'alface' || sanitizedInput === 'o que é um alface') {
    return 'Planta hortense de folhas verdes, consumida em saladas.';
  } else if (sanitizedInput === 'amizade' || sanitizedInput === 'o que é amizade') {
    return 'Relação afetiva entre amigos, baseada em confiança e respeito mútuo.';
  } else if (sanitizedInput === 'amêndoa') {
    return 'Semente comestível do amendoeira, utilizada em diversas receitas.';
  } else if (sanitizedInput === 'anatomia') {
    return 'Estudo da estrutura física dos organismos vivos.';
  } else if (sanitizedInput === 'anel') {
    return 'Joia circular usada no dedo, frequentemente simbolizando compromisso ou status.';
  } else if (sanitizedInput === 'anjo') {
    return 'Ser espiritual geralmente representado como uma figura alada, que atua como mensageiro ou protetor.';
  } else if (sanitizedInput === 'animação') {
    return 'Técnica de criar a ilusão de movimento em imagens, como em filmes e desenhos animados.';
  } else if (sanitizedInput === 'antigo') {
    return 'Algo que pertence a um período passado, geralmente valorizado pela sua idade ou história.';
  } else if (sanitizedInput === 'aparelho') {
    return 'Dispositivo mecânico ou eletrônico projetado para realizar uma função específica.';
  } else if (sanitizedInput === 'aperto') {
    return 'Ação de pressionar algo com força, ou o estado de estar apertado ou sobrecarregado.';
  } else if (sanitizedInput === 'arroz') {
    return 'Grão comestível de uma planta cultivada, essencial na alimentação de muitos povos.';
  } else if (sanitizedInput === 'assunto') {
    return 'Tema ou questão que está sendo discutido ou tratado.';
  } else if (sanitizedInput === 'atleta') {
    return 'Pessoa que pratica esportes, especialmente de forma profissional ou competitiva.';
  } else if (sanitizedInput === 'autobus') {
    return 'Veículo de transporte coletivo que circula em rotas fixas.';
  } else if (sanitizedInput === 'automóvel') {
    return 'Veículo motorizado de quatro rodas, usado para transporte de pessoas ou cargas.';
  } else if (sanitizedInput === 'aviãn') {
    return 'Aparelho voador que transporta pessoas ou cargas pelo ar.';
  } else if (sanitizedInput === 'avó') {
    return 'Mãe do pai ou da mãe de uma pessoa.';
  } else if (sanitizedInput === 'azul') {
    return 'Cor entre o verde e o violeta no espectro visível de luz.';
  }

  else if (sanitizedInput === 'cacete') {
    return 'É o órgão genital masculino capaz de criar outra ser humano.'
  }
  else if (sanitizedInput === 'cachorro') {
    return 'Mamífero doméstico conhecido como melhor amigo do homem.';
  } else if (sanitizedInput === 'cadeira') {
    return 'Móvel com assento, encosto e geralmente quatro pernas, utilizado para sentar.';
  } else if (sanitizedInput === 'café') {
    return 'Bebida feita a partir dos grãos torrados e moídos do café.';
  } else if (sanitizedInput === 'calça') {
    return 'Peça de vestuário que cobre as pernas e a parte inferior do tronco.';
  } else if (sanitizedInput === 'camisa') {
    return 'Peça de roupa que cobre o tronco e os braços, geralmente com botões.';
  } else if (sanitizedInput === 'caneta') {
    return 'Instrumento de escrita que usa tinta para fazer marcas em papel.';
  } else if (sanitizedInput === 'carro') {
    return 'Veículo motorizado de quatro rodas utilizado para transporte.';
  } else if (sanitizedInput === 'casa') {
    return 'Edifício destinado a servir de moradia para pessoas.';
  } else if (sanitizedInput === 'cavalo') {
    return 'Grande mamífero domesticado usado para montaria e trabalho.';
  } else if (sanitizedInput === 'chave') {
    return 'Dispositivo usado para abrir ou fechar fechaduras.';
  } else if (sanitizedInput === 'chuva') {
    return 'Precipitação de água em forma líquida que cai do céu.';
  } else if (sanitizedInput === 'computador') {
    return 'Máquina eletrônica capaz de processar dados e executar programas.';
  } else if (sanitizedInput === 'corpo') {
    return 'Estrutura física de um organismo vivo.';
  } else if (sanitizedInput === 'coração') {
    return 'Órgão responsável por bombear o sangue pelo corpo.';
  } else if (sanitizedInput === 'criança') {
    return 'Pessoa que ainda está na infância, geralmente abaixo de 12 anos.';
  } else if (sanitizedInput === 'cabelo') {
    return 'Filamentos de queratina que crescem a partir do couro cabeludo.';
  } else if (sanitizedInput === 'computação') {
    return 'Campo de estudo e prática relacionado ao uso de computadores.';
  } else if (sanitizedInput === 'cor') {
    return 'Propriedade dos objetos que depende da luz refletida por eles.';
  } else if (sanitizedInput === 'cultura') {
    return 'Conjunto de conhecimentos, práticas e valores de um grupo social.';
  } else if (sanitizedInput === 'cidadão') {
    return 'Pessoa que pertence a um Estado e tem direitos e deveres.';
  } else if (sanitizedInput === 'casamento') {
    return 'Instituição legal e social que une duas pessoas em uma relação formal.';
  } else if (sanitizedInput === 'caderno') {
    return 'Material escolar usado para escrever ou fazer anotações.';
  } else if (sanitizedInput === 'caminhão') {
    return 'Veículo de grande porte destinado ao transporte de carga.';
  } else if (sanitizedInput === 'cesta') {
    return 'Recipiente geralmente feito de vime ou palha, usado para carregar objetos.';
  } else if (sanitizedInput === 'cigarro') {
    return 'Produto de tabaco enrolado em papel e destinado à inalação.';
  } else if (sanitizedInput === 'cirurgia') {
    return 'Procedimento médico que envolve a realização de operações no corpo.';
  } else if (sanitizedInput === 'clima') {
    return 'Conjunto de condições meteorológicas de uma região ao longo do tempo.';
  } else if (sanitizedInput === 'celular') {
    return 'Dispositivo móvel usado para comunicação e acesso a diversas funções.';
  } else if (sanitizedInput === 'calendário') {
    return 'Sistema de divisão do tempo em dias, semanas e meses.';
  } else if (sanitizedInput === 'carta') {
    return 'Documento escrito enviado por correio ou outro meio.';
  } else if (sanitizedInput === 'cachoeira') {
    return 'Queda de água em um rio ou córrego, geralmente de grande altura.';
  } else if (sanitizedInput === 'cava') {
    return 'Espaço cavado no solo para armazenar ou enterrar algo.';
  } else if (sanitizedInput === 'carbono') {
    return 'Elemento químico essencial à vida, encontrado em todos os organismos vivos.';
  } else if (sanitizedInput === 'cereal') {
    return 'Planta cultivada por seus grãos, usada na alimentação.';
  } else if (sanitizedInput === 'cobre') {
    return 'Elemento químico metálico, utilizado em eletricidade e construção.';
  } else if (sanitizedInput === 'coração') {
    return 'Órgão vital responsável pela circulação do sangue.';
  } else if (sanitizedInput === 'cavalo') {
    return 'Animal de grande porte usado para montaria e trabalho.';
  } else if (sanitizedInput === 'carne') {
    return 'Tejido muscular de animais usado como alimento.';
  } else if (sanitizedInput === 'cura') {
    return 'Processo de recuperação de uma doença ou lesão.';
  } else if (sanitizedInput === 'corte') {
    return 'Ato de separar ou dividir algo com uma lâmina.';
  } else if (sanitizedInput === 'caminho') {
    return 'Rota ou trajeto que se percorre para chegar a um destino.';
  } else if (sanitizedInput === 'circuito') {
    return 'Conjunto de componentes eletrônicos interligados que formam um caminho para a corrente elétrica.';
  } else if (sanitizedInput === 'cerveja') {
    return 'Bebida alcoólica feita a partir da fermentação de cereais.';
  } else if (sanitizedInput === 'coração') {
    return 'Órgão responsável pela circulação do sangue no corpo.';
  } else if (sanitizedInput === 'corpo') {
    return 'Estrutura física de um organismo.';
  } else if (sanitizedInput === 'colina') {
    return 'Substância essencial à saúde, encontrada em alimentos como ovos e carne.';
  } else if (sanitizedInput === 'carroça') {
    return 'Veículo de transporte geralmente puxado por animais.';
  } else if (sanitizedInput === 'cortina') {
    return 'Tecido usado para cobrir janelas ou dividir espaços.';
  } else if (sanitizedInput === 'casaco') {
    return 'Peça de roupa que cobre o tronco e os braços, geralmente usada em climas frios.';
  } else if (sanitizedInput === 'compasso') {
    return 'Instrumento utilizado para desenhar círculos e medir distâncias em um plano.';
  } else if (sanitizedInput === 'carnaval') {
    return 'Festa popular com desfiles e danças, celebrada em várias partes do mundo.';
  } else if (sanitizedInput === 'carteira') {
    return 'Acessório usado para guardar dinheiro e documentos pessoais.';
  } else if (sanitizedInput === 'conta') {
    return 'Documento que detalha as despesas e pagamentos de um serviço.';
  } else if (sanitizedInput === 'conversa') {
    return 'Troca de palavras e ideias entre duas ou mais pessoas.';
  } else if (sanitizedInput === 'cozinha') {
    return 'Ambiente onde se prepara alimentos.';
  } else if (sanitizedInput === 'coleção') {
    return 'Conjunto de itens reunidos por afinidade ou interesse.';
  } else if (sanitizedInput === 'corpo') {
    return 'Estrutura física de um organismo vivo.';
  } else if (sanitizedInput === 'cereal') {
    return 'Grão de plantas cultivadas para alimentação.';
  } else if (sanitizedInput === 'cinema') {
    return 'Lugar onde são exibidos filmes.';
  } else if (sanitizedInput === 'câmera') {
    return 'Dispositivo usado para capturar imagens ou vídeos.';
  } else if (sanitizedInput === 'comida') {
    return 'Substância consumida para sustentar o organismo.';
  } else if (sanitizedInput === 'cálculo') {
    return 'Processo de resolução de problemas matemáticos.';
  } else if (sanitizedInput === 'coração') {
    return 'Órgão vital responsável pela circulação sanguínea.';
  } else if (sanitizedInput === 'compromisso') {
    return 'Acordo ou responsabilidade assumida.';
  } else if (sanitizedInput === 'carreira') {
    return 'Trilha profissional de trabalho e desenvolvimento.';
  } else if (sanitizedInput === 'comércio') {
    return 'Atividade de compra e venda de produtos ou serviços.';
  } else if (sanitizedInput === 'custo') {
    return 'Valor gasto na aquisição de bens ou serviços.';
  } else if (sanitizedInput === 'cômodo') {
    return 'Espaço ou divisão dentro de uma casa ou edifício.';
  } else if (sanitizedInput === 'câncer') {
    return 'Doença caracterizada pelo crescimento descontrolado de células.';
  } else if (sanitizedInput === 'cachorro-quente') {
    return 'Sanduíche com salsicha, geralmente servido com condimentos.';
  }

  else if (sanitizedInput === 'thales junior') {
    return 'Thales Júnior é um rapaz bom, porém se perdeu em drogas ilícitas. Atualmente ele está internado em um hospital';
  }
  else if (sanitizedInput === 'tudo bem') {
    return 'Uma maravilha. Estou me sentindo em uma montanha russa que só vai para cima.';
  }
  else if (sanitizedInput === 'rafael' || sanitizedInput === 'rafael martins' ) {
    return 'O Rafael Martins é um jovem que recentemente foi preso por tráfico de drogas no dia 30 de agosto de 2024.';
  }
  else if (sanitizedInput === 'gustavo santos') {
    return 'O Gustavo Santos é um estuprador. Uma de suas últimas tentativas de estupro foi no Colonial com uma menina que costumava ser uma babá das filhas de sua irmã mais velha. Daniele dos Santos';
  }

  else {
    return 'Desculpe, não entendi. Pode reformular sua pergunta?';
  }


}
