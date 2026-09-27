export function renderGlobalComponents(){let e=document.getElementById("app-header"),a=document.getElementById("app-footer");e&&(e.innerHTML=`
            <header class="banner" role="banner">
                <picture>
                    <source srcset="imagens/avif/banner.avif" type="image/avif">
                    <source srcset="imagens/webp/banner.webp" type="image/webp">
                    <img src="imagens/png/banner.jpg" alt="Banner ilustrativo da ONG Solidariedade" class="fundo-banner">
                </picture>
                <div class="banner-overlay"></div>
                <div class="conteudo-banner">
                    <h1>ONG Solidariedade</h1>
                    <nav role="navigation" aria-label="Menu principal">
                        <a href="index.html">In\xedcio</a>
                        <a href="projetos.html">Nossos Projetos</a>
                        <a href="cadastro.html">Participe</a>
                    </nav>
                </div>
            </header>
        `),a&&(a.innerHTML=`
            <footer class="banner" role="contentinfo">
                <picture>
                    <source srcset="imagens/avif/rodape.avif" type="image/avif">
                    <source srcset="imagens/webp/rodape.webp" type="image/webp">
                    <img src="imagens/png/rodape.jpg" alt="Rodap\xe9 da p\xe1gina com informa\xe7\xf5es institucionais" class="fundo-banner">
                </picture>
                <div class="banner-overlay"></div>
                <div class="conteudo-banner">
                    <p>&copy; 2026 ONG Solidariedade. Todos os direitos reservados.</p>
                </div>
            </footer>
        `)}export function renderTemplatesProjetos(){let e=document.getElementById("container-templates");e&&(e.innerHTML=[{categoria:"Voluntariado",titulo:"Refor\xe7o Escolar Comunit\xe1rio",descricao:"Buscamos professores e estudantes universit\xe1rios dispostos a doar 2 horas semanais para auxiliar crian\xe7as da comunidade com dificuldades de aprendizado escolar.",linkTexto:"Inscreva-se como volunt\xe1rio",linkDestino:"cadastro.html"},{categoria:"Voluntariado",titulo:"Mutir\xe3o de Limpeza Ambiental",descricao:"A\xe7\xe3o mensal para revitaliza\xe7\xe3o de pra\xe7as e espa\xe7os p\xfablicos da nossa regi\xe3o. Todo material de prote\xe7\xe3o \xe9 fornecido pela ONG.",linkTexto:"Inscreva-se como volunt\xe1rio",linkDestino:"cadastro.html"},{categoria:"Doa\xe7\xf5es",titulo:"Campanha Contra a Fome",descricao:"Arrecada\xe7\xe3o cont\xednua para montagem e distribui\xe7\xe3o de cestas b\xe1sicas destinadas a 200 fam\xedlias cadastradas no projeto.",linkTexto:"Fazer uma doa\xe7\xe3o",linkDestino:"cadastro.html"},{categoria:"Doa\xe7\xf5es",titulo:"Inverno Solid\xe1rio",descricao:"Recebemos roupas de frio, cobertores e cal\xe7ados em bom estado para distribui\xe7\xe3o durante os meses de baixa temperatura.",linkTexto:"Saiba onde doar",linkDestino:"cadastro.html"}].map(e=>`
        <article style="background-color: #f9f9f9; padding: 20px; margin-bottom: 20px; border-left: 4px solid #333; border-radius: 4px;">
            <span style="font-size: 0.85em; font-weight: bold; color: #555; text-transform: uppercase;" aria-label="Categoria: ${e.categoria}">${e.categoria}</span>
            <h3 style="margin-top: 5px; color: #222;">${e.titulo}</h3>
            <p>${e.descricao}</p>
            <a href="${e.linkDestino}" style="display: inline-block; margin-top: 10px; font-weight: bold; color: #0056b3; text-decoration: underline;">${e.linkTexto}</a>
        </article>
    `).join(""))}