function toggleMenu() {
  var menu = document.getElementById('z');
  var isVisible = menu.style.display === 'block';
  menu.style.display = isVisible ? 'none' : 'block';
}

function sharePage() {
  const pageUrl = window.location.href;
  const pageTitle = document.title;

  if (navigator.share) {
    navigator.share({
      title: pageTitle,
      url: pageUrl,
    }).then(() => {
      console.log('Página compartilhada com sucesso.');
    }).catch((error) => {
      console.error('Erro ao compartilhar a página:', error);
    });
  } else {
    alert('O compartilhamento não é suportado neste navegador. Copie o link: ' + pageUrl);
  }
}


var x = document.getElementById('z');
var y = false;

function a() {
  y = !y;
  x.style.display = y ?
    'block' : 'none';
}

var s = document.getElementById('b');
var h = false;

function e() {
  s = !s;
  h.style.display = s ?
    'block' : 'none';
}
