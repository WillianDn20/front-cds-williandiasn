import { renderGlobalComponents, renderTemplatesProjetos } from "./components.js";
import { initRouter } from "./router.js";
import { initForm } from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Renderiza cabeçalho e rodapé globais
    renderGlobalComponents();

    // 2. Inicializa roteador SPA para links internos
    initRouter();

    // 3. Verifica e inicializa componentes específicos da página atual
    if (document.getElementById("container-templates")) {
        renderTemplatesProjetos();
    }

    if (document.getElementById("container-formulario")) {
        initForm();
    }
});