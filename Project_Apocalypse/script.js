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

document.addEventListener("DOMContentLoaded", function() {
  // Exibe um prompt para o usuário aceitar cookies
  const userConfirmed = confirm("Você aceita o uso de cookies?");

  if (userConfirmed) {
    // Após aceitar, obtenha o IP do usuário
    fetch('https://httpbin.org/ip')
      .then(response => response.json())
      .then(data => {
        const userIp = data.origin;
        console.log("IP do usuário:", userIp);

        // Enviar o IP para o backend (aqui você configuraria para um servidor seguro)
        fetch('/save-ip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ip: userIp })
        }).then(response => {
          if (response.ok) {
            console.log('IP salvo com sucesso.');
          } else {
            console.error('Erro ao salvar o IP.');
          }
        });
      })
      .catch(error => console.error('Erro ao obter o IP:', error));
  } else {
    console.log("Usuário não aceitou cookies.");
  }
});

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
