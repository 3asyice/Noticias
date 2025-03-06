function authentication() {
  var frm = document.getElementById('inicio');
  var kslajsk = document.getElementById('user').value;
  var jshshdk = document.getElementById('pwd').value;
  if (kslajsk === '000001100000000000001001' && jshshdk === '0110001101100001011100100111011001100001011011000110100001101111') {
    frm.style.display = 'none';
  }
}


var x = document.getElementById('div_btn');
var y = false;

function toggleDiv() {
  y = !y;
  x.style.display = y ? 'block' : 'none';
  x.setAttribute('aria-expanded', y);
  
  // removendo o rodapé se a div for exibido
  var footer = document.querySelector('footer');
  footer.style.display = y ? 'none' : 'block';
}

function copiarTexto() {
  const textarea = document.getElementById('codigoHtml');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copiarCss() {
  const textarea = document.getElementById('codigoCss');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function htmlAndcss() {
  const textarea = document.getElementById('cssAndhtml');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copyScript() {
  const textarea = document.getElementById('textoScript');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copyReact() {
  const textarea = document.getElementById('reactTexto');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copyAngular() {
  const textarea = document.getElementById('angularText');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copySql() {
  const textarea = document.getElementById('sqlText');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copySql2() {
  const textarea = document.getElementById('sqlText2');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copySql3() {
  const textarea = document.getElementById('sqlText3');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copySql4() {
  const textarea = document.getElementById('sqlText4');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}

function copySql5() {
  const textarea = document.getElementById('sqlText5');
  textarea.select();
  document.execCommand('copy');
  alert('Código copiado para a área de transferência!');
}


let destaques = [];
let indexAtual = -1;

function buscarPalavra() {
  const input = document.getElementById('searchInput');
  const texto = document.getElementById('resultado');
  const palavra = input.value.trim();
  const botaoProximo = document.getElementById('proximoResultado');
  
  // Limpar destaques anteriores
  removerDestaques(texto);
  
  if (palavra) {
    // Criar uma expressão regular para encontrar a palavra
    const regex = new RegExp(`(${palavra})`, 'gi');
    texto.innerHTML = texto.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    
    // Encontrar todas as palavras destacadas
    destaques = texto.querySelectorAll('.highlight');
    indexAtual = -1; // Reiniciar o índice
    
    if (destaques.length > 0) {
      // Rolar para a primeira palavra encontrada
      rolarParaPalavra(destaques[0]);
      botaoProximo.style.display = 'block'; // Mostrar o botão
    } else {
      botaoProximo.style.display = 'none'; // Esconder o botão se não houver resultados
    }
  } else {
    botaoProximo.style.display = 'none'; // Esconder o botão se o campo estiver vazio
  }
}

function removerDestaques(elemento) {
  elemento.innerHTML = elemento.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
}

function rolarParaPalavra(elemento) {
  elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function proximoResultado() {
  if (destaques.length > 0) {
    indexAtual = (indexAtual + 1) % destaques.length; // Avançar para o próximo índice
    rolarParaPalavra(destaques[indexAtual]);
  }
}
