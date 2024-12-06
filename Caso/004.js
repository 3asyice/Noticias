function filterItems() {
  const searchInput = document.querySelector('.search-input').value.toLowerCase();
  const linkItems = document.querySelectorAll('.link-item');

  linkItems.forEach(item => {
    const link = item.querySelector('a');
    const text = link.textContent.toLowerCase();
    const date = item.querySelector('.date').textContent.toLowerCase();
    const hr = item.querySelector('hr');

    // Verifica se o texto de entrada corresponde ao link ou à data
    if (text.includes(searchInput) || date.includes(searchInput)) {
      item.style.display = '';
      hr.style.display = ''; // Mostrar hr se o item corresponder
    } else {
      item.style.display = 'none';
      hr.style.display = 'none'; // Ocultar hr se o item não corresponder
    }
  });
}
