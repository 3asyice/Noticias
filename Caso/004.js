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
  
  
  
  // linkScripted 
  const linkstwentytwentyfour = document.getElementById('linksScripted').innerHTML = `<div id="links"> <div class="link-item">
          <a href="https://web.archive.org/web/20241230175328/https://www.big-loser.site/Caso/099">099 - infohazard/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
            <div class="link-item">
          <a href="https://web.archive.org/web/20241230174901/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230172502/https://www.big-loser.site/Caso/017#expand">017 - quebrado/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
  
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230172113/https://www.big-loser.site/Caso/030">sindicância & Expulsão/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230171719/https://www.big-loser.site/Caso/029">029 - estupro/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230171330/https://www.big-loser.site/Caso/028">028 - vereador/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230171106/https://www.big-loser.site/Caso/sobre.html">&copy;[...sobre/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230170808/https://www.big-loser.site/Caso/027">027 - Codes/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230170247/https://www.big-loser.site/Caso/026">Avenida026Liberdade/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230165713/https://www.big-loser.site/music">020/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230164719/https://www.big-loser.site/Caso/001">001/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241207113247/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Dec 07, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://4wjffvdqkc4xmu6yx7dqmiab6gtmtdtx2zs45mjy6i535ygxovjvoiid.onion">Cebola.onion/</a>
          <p class="date">Dec 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://1drv.ms/u/c/e2112d3399c3a63a/ETqmw5kzLREggOJrAAAAAAABM-cVStNc7DRLRGMdD8Li9A">OneDrive Saved Archives/</a>
          <p class="date">Dec 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241202051245/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Dec 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241202051049/https://www.big-loser.site/Caso/018">Caso 018/</a>
          <p class="date">Dec 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241202051738/https://www.big-loser.site/Caso/015">Caso 015/</a>
          <p class="date">Dec 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241117030251/https://3asyice.github.io/TALK-TO-ME/Frontend/index.html">Caso 016/</a>
          <p class="date">Nov 17, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241117043440/https://www.big-loser.site/">big-loser.site/ </a>
          <p class="date">Nov 17, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241106052953/https://www.big-loser.site/Caso/015">Caso 015/</a>
          <p class="date">Nov 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241105062214/https://3asyice.github.io/login/">Página misteriosa/</a>
          <p class="date">Nov 05, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241105070719/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/008">Caso 008/</a>
          <p class="date">Nov 05, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241104184913/https://www.big-loser.site/">big-loser.site/ </a>
          <p class="date">Nov 04, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241005085052/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/006">Caso 006/</a>
          <p class="date">Oct 05, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241005085343/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/005">Caso 005/</a>
          <p class="date">Oct 05, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241002050442/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/007">Caso 007/</a>
          <p class="date">Oct 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001200029/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/004">Caso 004/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001133832/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/003">Caso 003/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131431/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/002">Caso 002/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131327/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/001">Caso 001/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131908/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/comandante">Soares, um Monstro?/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
  
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131830/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/assediado">Militar assediado/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131622/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/atropelado">Atropelamento/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131537/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/suicide">Suicídio do Sd 614 Teixeira/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131730/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/sindicancia">Expulsão do Sd 609 Carvalho/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131146/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/">NoticiasDelTomorrow/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240930040725/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Sep 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240920044105/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Sep 20, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="./badmgusm.html">BADMGUSM SAVED LINKS/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915113235/https://badmgusm.eb.mil.br/">BADMGUSM/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915201121/https://hack.chat/">hack.chat/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915200033/https://www.big-loser.site/Project_Apocalypse/comandante.html">big-loser - cel Soares/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915195902/https://www.big-loser.site/Project_Apocalypse/assedio.html">big-loser - assédio/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915195559/https://www.big-loser.site/Project_Apocalypse/expulso">big-loser - expulsão/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915195338/https://www.big-loser.site/Project_Apocalypse/atropelamento">big-loser - acidente/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915131558/https://www.big-loser.site/Project_Apocalypse/suicide">big-loser - suicide/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915130525/https://3asyice.github.io/big-loser.site/">big-loser.site teste/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915122933/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915121230/https://www.big-loser.site/Caso/004_4RCH1V3S">004&copy; archives/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915114109/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2253-palestra-sobre-valorizacao-da-vida-aos-soldados-do-efetivo-variavel">BADMGUSM - CVV?/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915115722/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2252-campo-do-periodo-basico-e-entrega-da-boina-preta-aos-soldados-do-efetivo-variavel">BADMGUSM - CAMPO/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809042433/https://bandersnatch.club/">bandersnatch.club/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809042434/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915115222/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2232-incorporacao-dos-novos-recrutas-do-ano-de-2024">BADMGUSM - Incorporação/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915114816/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2227-instrucao-basica-de-primeiros-socorros-3">BADMGUSM - EB F@cil/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915061856/https://www.big-loser.site/Caso/004_4RCH1V3S">004&copy; archives/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915053759/https://www.malditonatal.online/daniele.html">malditonatal - daniele/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240914144838/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a>
          <p class="date">Sep 14, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240913031505/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240913175959/https://bandersnatch.club/">bandersnatch.club/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913052319/https://3asyice.github.io/MirrorNEWS/chop-suey.html">MirrorNEWS - chopSuey/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240913231132/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240913050423/https://3asyice.github.io/Hospital-Bom-Pastor-Iju-/">Hospital Bom Pastor/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913051624/https://3asyice.github.io/MirrorNEWS/julho.html">MirrorNEWS - julhoNews/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913051401/https://3asyice.github.io/MirrorNEWS/junho.html">MirrorNEWS - junhoNews/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
        
          <a href="http://web.archive.org/web/20240913045629/https://3asyice.github.io/MirrorNEWS/maio.html">MirrorNEWS - maioNews/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913045043/https://3asyice.github.io/MirrorNEWS/buttons.html">MirrorNEWS - opções/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913044317/https://3asyice.github.io/MirrorNEWS/">MirrorNEWS/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912021313/https://www.big-loser.site/Opinions/Relatos">relatos.html/</a>
          <p class="date">Sep 12, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912020831/https://www.big-loser.site/Project_Apocalypse/comandante">Soares.html/</a>
          <p class="date">Sep 12, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912020433/https://www.big-loser.site/Project_Apocalypse/assedio">rapeCase.html/</a>
          <p class="date">Sep 12, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911204454/https://www.big-loser.site/Caso/003">Caso - 003.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911204122/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912015343/https://www.big-loser.site/Caso/011">Caso - 011.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912015131/https://www.big-loser.site/Caso/010">Caso - 010.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205320/https://www.big-loser.site/dark_web/avoid">Caso - 009.html.Risks/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205248/https://www.big-loser.site/dark_web/dados">Caso - 009.html.Data/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205206/https://www.big-loser.site/dark_web/vpn">Caso - 009.VPN/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205126/https://www.big-loser.site/dark_web/tor">Caso - 009.Tor/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205049/https://www.big-loser.site/dark_web/privacy">Caso - 009.DarkWeb/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240911204817/https://www.big-loser.site/Project_Apocalypse/chat">Caso - 008.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911204706/https://www.big-loser.site/Caso/007">Caso - 007.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827180613/https://www.big-loser.site/Opinions/horizon">horizon.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173350/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827174003/https://www.big-loser.site/Project_Apocalypse/expulso">Expelled.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173832/https://www.big-loser.site/Project_Apocalypse/atropelamento">Accident.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173752/https://www.big-loser.site/Project_Apocalypse/suicide"> Suicide.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173544/https://www.big-loser.site/Caso/006">Caso - 006.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173428/https://www.big-loser.site/Caso/005">Caso - 005.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
                        <div class="link-item">
            <a href="https://web.archive.org/web/20240827213157/https://ponte.org/militar-do-exercito-e-encontrado-morto-com-indicios-de-suicidio-em-quartel-de-sp/">Antônio - Suicídio/</a>
            <p class="date">Aug 27, 2024</p>
            <hr>
          </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173350/https://www.big-loser.site/Caso/004_4RCH1V3S">Caso - 004.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173106/https://www.big-loser.site/Caso/003">Caso - 003.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827172634/https://www.big-loser.site/Opinions/002">Caso - 002.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827172504/https://www.big-loser.site/Caso/001">Caso - 001.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827172322/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827180851/https://raw.githubusercontent.com/3asyice/Noticias/main/Caso/Conversa%20do%20WhatsApp%20com%20B%20ADM%20GU%20SM%F0%9F%94%B0%F0%9F%87%A7%F0%9F%87%B7.txt">CONVERSATION.TXT/</a>
          <p class="date">Aug 22, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://onedrive.live.com/?authkey=%21AE%5FJKH8TjAFMdmU&id=E2112D3399C3A63A%21109&cid=E2112D3399C3A63A&parId=root&parQt=sharedby&o=OneUp">SECRET CON/</a>
          <p class="date">Aug 22, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240819213021/https://bandersnatch.club/">bandersnatch.club/</a>
          <p class="date">Aug 19, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240816165949/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Aug 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809053055/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 09, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809042446/https://3asyice.github.io/military/">Diario de um Militar/</a>
          <p class="date">Aug 09, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809042409/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 09, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240808173720/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 08, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240806133333/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240806234351/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE origem/</a>
          <p class="date">Aug 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240806234350/https://3asyice.github.io/military/">Diario de um Militar/</a>
          <p class="date">Aug 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240802223609/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240729201825/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 29, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240729201825/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 29, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240728211312/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 28, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240725213620/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 25, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240725062826/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 25, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240717022130/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 17, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240717005335/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 17, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716211532/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716083645/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716015740/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716004427/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240616101250/https://bandersnatch.club/">bandersnatch.club/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716005216/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240715031605/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240715034331/https://3asyice.github.io/military/">Diario de um Militar origem/</a>
          <p class="date">Jul 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240715033139/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Jul 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240715124739/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240603235628/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jun 03, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240603235628/https://www.big-loser.site/">big-loser.site origem/</a>
          <p class="date">Jun 03, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240419155855/https://bandersnatch.club/">bandersnatch.club origem/</a>
          <p class="date">Apr 19, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240418171838/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Apr 18, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240418171838/https://www.malditonatal.online/">malditonatal.online origem/</a>
          <p class="date">Apr 18, 2024</p>
          <hr>
        </div> <div>`;
