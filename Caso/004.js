function saveToWayback() {
  const url = document.getElementById('urlInput').value;
  if (url) {
    const waybackUrl = `https://web.archive.org/save/${encodeURIComponent(url)}`;
    window.open(waybackUrl, '_blank');
  } else {
    alert('Por favor, insira uma URL válida.');
  }
}

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
const linkstwentytwentyfour = document.getElementById('linksScripted').innerHTML = `<div id="links"> 
  
                  <div class="link-item">
          <a href="https://web.archive.org/web/20250227180609/https://www.montedo.com.br/2024/10/31/familia-e-oab-contestam-versao-do-exercito-de-suicidio-de-soldado-em-quartel-do-rio/">morte sd Vitor.html/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div> <div class="link-item" >
                <a href="https://youtu.be/Gfvo3kMHoUs?si=39SJPFIcAq486Gdv">morte sd Vitor/</a> <p class="date"> Feb 26, 2025 </p> <hr>
                  </div>
  
          <div class="link-item">
          <a href="https://web.archive.org/web/20250227173247/https://noticias.r7.com/minas-gerais/mg-record/videos/familia-de-soldado-que-se-matou-em-quartel-do-exercito-diz-que-ele-sofria-humilhacoes-21022018/">suicídio sd pablo/</a>
          <p class="date"> Feb 27, 2025 </p>
          <hr>
        </div> <div class="link-item">
        <a href="https://web.archive.org/web/20250227174730/https://www.big-loser.site/M/Fev/pablo_soares.mp4"> sd pablo soares.mp4/</a> <p class="date"> Feb 27, 2025 </p>
        <hr>
          </div> <div class="link-item">
          <a href="https://web.archive.org/web/20250227172730/https://www1.folha.uol.com.br/fsp/brasil/fc22069814.htm">suicídio sd Weslley/</a> <p class ="date"> Feb 27, 2025 </p> <hr>
          </div> <div class = "link-item">
          <a href="https://web.archive.org/web/20250227170708/https://noticias.r7.com/hora7/morte-explorador-caverna-cabeca-para-baixo-eua-04122023/">John Edward Jones/</a> <p class ="date"> Feb 27, 2025 </p> <hr>
          </div> <div class = "link-item">
          <a href="https://web.archive.org/web/20250227090800/https://badmgusm.eb.mil.br/index.php/galeria-dos-eternos-comandantes">badmgusm eternos cmt/</a> <p class ="date"> Feb 27, 2025 </p> <hr>
          </div> <div class = "link-item">
          <a href="https://web.archive.org/web/20250226193728/https://g1.globo.com/rs/rio-grande-do-sul/video/policial-militar-e-flagrado-agredindo-mulher-gravida-com-cassetete-13360745.ghtml">pm agride grávida/</a> <p class ="date"> Feb 26, 2025 </p> <hr>
          </div>
  
                  <div class="link-item">
          <a href="https://web.archive.org/web/20250226192512/https://noticias.uol.com.br/cotidiano/ultimas-noticias/2025/02/21/policial-agride-mulher-gravida-rs.htm">pm agride grávida/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
                <div class="link-item">
          <a href="https://web.archive.org/web/20250226185730/https://www.big-loser.site/A/Audio/Audio_001">a dicisao errada/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
                <div class="link-item">
          <a href="https://web.archive.org/web/20250226183622/https://www.big-loser.site/Caso/095">095 audio files/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
                <div class="link-item">
          <a href="https://web.archive.org/web/20250226183419/https://www.big-loser.site/Caso/106">106 incorporacao/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226182415/https://www.big-loser.site/Caso/004">004 archives/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226181518/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226055552/https://www.big-loser.site/Caso/053">053 nota falecimento/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226054326/https://www.big-loser.site/M/Fev/internato.txt">internato.txt/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226055003/https://www.big-loser.site/M/Fev/incorporacao.txt">incorporação.txt/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226055219/https://www.big-loser.site/M/Fev/decisao_errada.txt">decisao_errada.txt/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226054156/https://www.big-loser.site/M/Fev/plantao.txt">plantao.txt/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://jack-sbraincancer.github.io/CHAT-ONLINE/frontend/index.html">chat online/</a>
          <p class="date">Feb 23, 2025</p>
          <hr>
        </div>
  
                   <div class="link-item">
          <a href="https://web.archive.org/web/20250223035130/https://www.big-loser.site/A/Audio/Mensagem.m4a">Mensagem.m4a/</a>
          <p class="date">Feb 23, 2025</p>
          <hr>
       </div>
 <div class = "link-item">
          <a href="https://web.archive.org/web/20250221180205/https://www.big-loser.site/">big-loser.site/</a> <p class = "date"> Feb 21, 2025 </p> <hr>
          </div> <div class = "link-item">
          <a href="https://web.archive.org/web/20250220055600/https://www.big-loser.site/A/Feb/soldiers%20salary%20.pdf">soldiers salary.pdf/</a> <p class = "date"> Feb 20, 2025 </p> <hr>
          </div> <div class = "link-item">
          <a href="https://web.archive.org/web/20250220013715/https://www.big-loser.site/BADMGUSM.xlsx">soldiers salary.xlsx/</a> <p class = "date"> Feb 20, 2025 </p> <hr>
          </div>
           <div class="link-item">
           <a href="https://docs.google.com/document/d/1Efy3SJXIWxvfZS-2DAayph6DKpgwggCY/edit?usp=drivesdk&ouid=110305946732979825489&rtpof=true&sd=true">a recruit's story/</a>
           <p class="date">feb 16, 2025</p>
           <hr>
         </div>
         <div class="link-item">
   <a href="https://docs.google.com/document/d/1LJSJu4HxLEwiAy7bkEPqqC3SsH2C1lGA3pArmm2pVpc/edit?usp=drivesdk">police power abuse/</a>
   <p class="date">feb 16, 2025</p>
   <hr>
 </div>

                 <div class="link-item">
         <a href="https://web.archive.org/web/20250216171319/https://www.big-loser.site/Caso/004">archives 004/</a>
         <p class="date">Feb 16, 2025</p>
         <hr>
       </div>
       <div class="link-item">
          <a href="https://web.archive.org/web/20250216164225/https://www.big-loser.site/A/Audio/FITA-3,-LADO-B.opus">10:38 fita 3, lado b/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div> 
       <div class="link-item">
          <a href="https://web.archive.org/web/20250216163930/https://www.big-loser.site/A/Audio/FITA-3,-LADO-A.opus">14:43 fita 3, lado a/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div> 
        <div class="link-item">
          <a href="https://web.archive.org/web/20250216163513/https://www.big-loser.site/A/Audio/FITA-2,-LADO-B.m4a">4:10 fita 2, lado b/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div>
        <div class="link-item">
  <a href="https://web.archive.org/web/20250216163326/https://www.big-loser.site/A/Audio/FITA-2,-LADO-A.m4a">1:22 fita 2, lado a/</a>
  <p class="date">Feb 16, 2025</p>
  <hr>
</div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250216163024/https://www.big-loser.site/A/Audio/FITA-1,-LADO-B.opus">2:08 fita 1, lado b/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250216162814/https://www.big-loser.site/A/Audio/FITA%201,%20LADO%20A.opus">6:06 fita 1, lado a/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="https://web.archive.org/web/20250216144046/https://www.big-loser.site/M/Fev/Big%20Loser%20-%20Sd%20609%20Carvalho%20FITA%201,%20LADO%20A.m4a"> 6:06 fita 1, lado a/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="http://g7ejphhubv5idbbu3hb3wawrs5adw7tkx7yjabnf65xtzztgg4hcsqqd.onion/">official defcon site/</a>
          <p class="date">Feb 11, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250208032740/https://www.big-loser.site/Caso/004">Caso 004/</a>
          <p class="date">Feb 08, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250208025819/https://www.big-loser.site/">big loser.site/</a>
          <p class="date">Feb 08, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250201102618/https://www.big-loser.site/">big loser.site/</a>
          <p class="date">Feb 01, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250127170619/https://www.big-loser.site/">big loser.site/</a>
          <p class="date">Jan 27, 2025</p>
          <hr>
        </div>
        <div <div <div class="link-item">
          <a href="https://youtu.be/F9fflX-9wRA">big loser podcast/</a>
          <p class="date">Jan 19, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250125013140/https://www.big-loser.site/Caso/aeropass/VID-20240825-WA0000.mp4">Vídeo atropelamento/</a>
          <p class="date">Jan 19, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250118021045/https://www.big-loser.site/Caso/040">040 ocorrência/</a>
          <p class="date">Jan 18, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250114010510/https://www.big-loser.site/Project_Apocalypse/scherer">douglas Scherer/</a>
          <p class="date">Jan 14, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250110005911/https://www.big-loser.site/Caso/050">S0ar5s [project]/</a>
          <p class="date">Jan 10, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109232809/https://www.big-loser.site/Caso/033">033 RDE/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109234242/https://www.big-loser.site/Project_Apocalypse/assedio">assédio alojamento/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109233559/https://www.big-loser.site/Project_Apocalypse/atropelamento">atropelamento/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109232651/https://www.big-loser.site/Project_Apocalypse/expulso">expulsão de Carvalho/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109232308/https://www.big-loser.site/Project_Apocalypse/suicide">Suicídio do sd 614/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250106222448/https://www.poder360.com.br/poder-brasil/numero-de-pessoas-em-situacao-de-rua-aumenta-25-no-brasil/">situação de rua/</a>
          <p class="date">Jan 06, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250103042712/https://www.big-loser.site/Caso/004">004rquives&copy;/</a>
          <p class="date">Jan 03, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250103042712/https://www.big-loser.site/Caso/004"> 004Archives&copy;/</a>
          <p class="date">Jan 03, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250103014950/https://blogatualidade.com/militar-morre-e-outros-tres-ficam-feridos-apos-acidente-em-atividade-dentro-de-quartel-em-santa-maria/">morte do sd breno/</a>
          <p class="date">Jan 03, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250103013604/http://radaraltovale.com/noticia/noticias/soldado-de-fraiburgo-comete-suicidio-no-quartel-do-exercito-e-deixa-carta-de-despedida-51071">Wennigkamp's suicide/</a>
          <p class="date">Jan 03, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241231005253/https://www.big-loser.site/Caso/014">014 - Memorial/</a>
          <p class="date">Dec 31, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230181835/https://www.big-loser.site/M/Dec/sindicancia.html">sindicância/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230180953/https://3asyice.github.io/login/salvar_senhas.html">Save Passwords/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
  
  <div class="link-item">
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
          <a href="https://web.archive.org/web/20241230172113/https://www.big-loser.site/Caso/030">Expulsão das FAB/</a>
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
          <a href="https://1drv.ms/u/c/e2112d3399c3a63a/ETqmw5kzLREggOJrAAAAAAABM-cVStNc7DRLRGMdD8Li9A">OneDrive - Archives/</a>
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
          <a href="https://web.archive.org/web/20241001131537/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/suicide">Suicídio do Sd 614/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131730/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/sindicancia">Expulsão do Sd 609/</a>
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
          <a href="https://web.archive.org/web/20240915200033/https://www.big-loser.site/Project_Apocalypse/comandante.html">big-loser - Soares/</a>
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
          <a href="https://web.archive.org/web/20240915115222/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2232-incorporacao-dos-novos-recrutas-do-ano-de-2024">Incorporação/</a>
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
          <a href="https://web.archive.org/web/20240915053759/https://www.malditonatal.online/daniele.html">malditonatal - dani/</a>
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
          <a href="http://web.archive.org/web/20240913052319/https://3asyice.github.io/MirrorNEWS/chop-suey.html">MirrorNEWS - chop/</a>
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
          <a href="http://web.archive.org/web/20240913051624/https://3asyice.github.io/MirrorNEWS/julho.html">MirrorNEWS - julho/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913051401/https://3asyice.github.io/MirrorNEWS/junho.html">MirrorNEWS - junho/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
        
          <a href="http://web.archive.org/web/20240913045629/https://3asyice.github.io/MirrorNEWS/maio.html">MirrorNEWS - maio/</a>
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
          <a href="http://web.archive.org/web/20240715034331/https://3asyice.github.io/military/">Diario de um Militar/</a>
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
          <a href="https://web.archive.org/web/20240603235628/https://www.big-loser.site/">big-loser.site old/</a>
          <p class="date">Jun 03, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240419155855/https://bandersnatch.club/">bandersnatch.club /</a>
          <p class="date">Apr 19, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240418171838/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Apr 18, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240418171838/https://www.malditonatal.online">malditonatal.online/</a>
          <p class="date">Apr 18, 2024</p>
          <hr>
        </div> <div>`;
