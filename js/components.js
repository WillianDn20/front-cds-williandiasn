export function renderGlobalComponents() {
    const headerContainer = document.getElementById("app-header");
    const footerContainer = document.getElementById("app-footer");

    if (headerContainer) {
        headerContainer.innerHTML = `
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
                        <a href="index.html">Início</a>
                        <a href="projetos.html">Nossos Projetos</a>
                        <a href="cadastro.html">Participe</a>
                    </nav>
                </div>
            </header>
        `;
    }

    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="banner" role="contentinfo">
                <picture>
                    <source srcset="imagens/avif/rodape.avif" type="image/avif">
                    <source srcset="imagens/webp/rodape.webp" type="image/webp">
                    <img src="imagens/png/rodape.jpg" alt="Rodapé da página com informações institucionais" class="fundo-banner">
                </picture>
                <div class="banner-overlay"></div>
                <div class="conteudo-banner">
                    <p>&copy; 2026 ONG Solidariedade. Todos os direitos reservados.</p>
                </div>
            </footer>
        `;
    }
}

export function renderTemplatesProjetos() {
    const container = document.getElementById("container-templates");
    if (!container) return;

    const projetos = [
        {
            categoria: "Voluntariado",
            titulo: "Reforço Escolar Comunitário",
            descricao: "Buscamos professores e estudantes universitários dispostos a doar 2 horas semanais para auxiliar crianças da comunidade com dificuldades de aprendizado escolar.",
            linkTexto: "Inscreva-se como voluntário",
            linkDestino: "cadastro.html"
        },
        {
            categoria: "Voluntariado",
            titulo: "Mutirão de Limpeza Ambiental",
            descricao: "Ação mensal para revitalização de praças e espaços públicos da nossa região. Todo material de proteção é fornecido pela ONG.",
            linkTexto: "Inscreva-se como voluntário",
            linkDestino: "cadastro.html"
        },
        {
            categoria: "Doações",
            titulo: "Campanha Contra a Fome",
            descricao: "Arrecadação contínua para montagem e distribuição de cestas básicas destinadas a 200 famílias cadastradas no projeto.",
            linkTexto: "Fazer uma doação",
            linkDestino: "cadastro.html"
        },
        {
            categoria: "Doações",
            titulo: "Inverno Solidário",
            descricao: "Recebemos roupas de frio, cobertores e calçados em bom estado para distribuição durante os meses de baixa temperatura.",
            linkTexto: "Saiba onde doar",
            linkDestino: "cadastro.html"
        }
    ];

    container.innerHTML = projetos.map(proj => `
        <article style="background-color: #f9f9f9; padding: 20px; margin-bottom: 20px; border-left: 4px solid #333; border-radius: 4px;">
            <span style="font-size: 0.85em; font-weight: bold; color: #555; text-transform: uppercase;" aria-label="Categoria: ${proj.categoria}">${proj.categoria}</span>
            <h3 style="margin-top: 5px; color: #222;">${proj.titulo}</h3>
            <p>${proj.descricao}</p>
            <a href="${proj.linkDestino}" style="display: inline-block; margin-top: 10px; font-weight: bold; color: #0056b3; text-decoration: underline;">${proj.linkTexto}</a>
        </article>
    `).join('');
}