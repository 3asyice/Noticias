const consoleDiv = document.getElementById('console');
const inputField = document.getElementById('input');
const outputDiv = document.getElementById('output');

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const inputText = inputField.value;
    inputField.value = '';

    appendToOutput(`🐧 ${inputText}`);


    const resposta = processarEntrada(inputText);


    appendToOutput(`🦄 ${resposta}`);
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
    .trim();




  if (sanitizedInput === 'oi' || sanitizedInput === 'olá') {
    return 'Olá! Como posso ajudar?';
  }
else if (sanitizedInput === 'thales' || sanitizedInput === 'thales junior braga ferreira' || sanitizedInput === 'thales junior') {
  return 'O Thales nasceu dia 15 de novembro e ele tem um irmão chamado Rael. Ele é filho de Camila Braga e de Sandor Droppa.';
}
  else if (sanitizedInput === 'jupiterh' || sanitizedInput === 'o que é jupiterh') {
    return 'é a senha usada por Guilherme de Abreu Carvalho. Esta é a sua senha de Email: Jupiterh12$ ou JUPITERH ou JUPITERH12';
  }
  else if (sanitizedInput === 'como você está' || sanitizedInput === 'como vai' ) {
    return 'Estou bem, obrigado!';
  }
  else if (sanitizedInput === 'vania' || sanitizedInput === 'vania moura') {
    return 'A Vania é uma mulher antipática. Ela mora em Ijuí, no bairro Colonial, perto da rua João Buzetto, ela é uma mulher muito arrogante. O marido dela se chama Jefferson Lopes Vargas. Ela tem uma filha chamada Laryssa.';
  }
  else if (sanitizedInput === 'google') {
    return 'acesse o <a href="https://www.google.com" target="_blank">Google</a>';
  }
  else if (sanitizedInput === 'youtube') {
    return 'acesse o <a href="https://www.youtube.com" target="_blank">YouTube</a>';
  }

  else if (sanitizedInput === 'odair' || sanitizedInput === 'odair josé trindade dos santos') {
    return 'Ele é um criminoso desgraçado. É conhecido como Macanha e seu mais fiel conhecido é a "PEDRA FILOSOFAL" porque ele é um pedreiro de merda.';
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
  else if (sanitizedInput === 'patricia' || sanitizedInput === 'patricia braga de abreu') {
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
  else if (sanitizedInput === 'gustavo santos') {
    return 'O Gustavo Santos é um estuprador. Uma de suas últimas tentativas de estupro foi no Colonial com uma menina que costumava ser uma babá das filhas de sua irmã mais velha. Daniele dos Santos';
  }

  else {
    return 'Desculpe, não entendi. Pode reformular sua pergunta?';
  }


}
