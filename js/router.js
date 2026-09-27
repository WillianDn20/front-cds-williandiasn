import { renderGlobalComponents, renderTemplatesProjetos } from "./components.js";
import { initForm } from "./form.js";

export function initRouter() {
    document.body.addEventListener("click", async (e) => {
        const link = e.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");
        if (href && href.endsWith(".html") && !href.startsWith("http")) {
            e.preventDefault();
            
            try {
                const response = await fetch(href);
                if (!response.ok) throw new Error("Erro ao carregar página");
                
                const htmlText = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlText, "text/html");
                const novoMain = doc.querySelector("main");
                
                if (novoMain) {
                    document.querySelector("main").innerHTML = novoMain.innerHTML;
                    history.pushState({}, "", href);
                    
                    // Reaplicar componentes globais e inicializações específicas da página
                    renderGlobalComponents();
                    if (href.includes("projetos.html")) {
                        renderTemplatesProjetos();
                    } else if (href.includes("cadastro.html")) {
                        initForm();
                    }
                    
                    window.scrollTo(0, 0);
                } else {
                    window.location.href = href;
                }
            } catch (error) {
                window.location.href = href;
            }
        }
    });

    // Tratar eventos de histórico (botão voltar/avançar do navegador)
    window.addEventListener("popstate", () => {
        window.location.reload();
    });
}