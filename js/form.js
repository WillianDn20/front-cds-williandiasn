export function initForm() {
    const container = document.getElementById("container-formulario");
    if (!container) return;

    container.innerHTML = `
        <section>
            <h2>Cadastro de Participação</h2>
            <form id="form-cadastro" novalidate>
                <fieldset>
                    <legend>Informações Pessoais</legend>
                    
                    <label for="nome">Nome Completo: *</label>
                    <input type="text" id="nome" name="nome" required aria-required="true" placeholder="Digite seu nome completo">

                    <label for="email">E-mail: *</label>
                    <input type="email" id="email" name="email" required aria-required="true" placeholder="seuemail@exemplo.com">

                    <label for="telefone">Telefone/WhatsApp:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999">

                    <label for="tipo-apoio">Como deseja apoiar? *</label>
                    <select id="tipo-apoio" name="tipoApoio" required aria-required="true">
                        <option value="">Selecione uma opção</option>
                        <option value="voluntario">Voluntário</option>
                        <option value="doador">Doador</option>
                        <option value="parceiro">Parceiro Institucional</option>
                    </select>
                </fieldset>

                <button type="submit">Enviar Cadastro</button>
            </form>
            <div id="mensagem-feedback" aria-live="polite" style="margin-top: 15px; font-weight: bold;"></div>
        </section>
    `;

    const form = document.getElementById("form-cadastro");
    const feedback = document.getElementById("mensagem-feedback");

    // Carregar dados salvos anteriormente no localStorage se existirem
    const dadosSalvos = localStorage.getItem("dadosCadastro");
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        document.getElementById("nome").value = dados.nome || "";
        document.getElementById("email").value = dados.email || "";
        document.getElementById("telefone").value = dados.telefone || "";
        document.getElementById("tipo-apoio").value = dados.tipoApoio || "";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const tipoApoio = document.getElementById("tipo-apoio").value;

        if (!nome || !email || !tipoApoio) {
            feedback.style.color = "#d9534f";
            feedback.textContent = "Por favor, preencha todos os campos obrigatórios marcados com asterisco.";
            return;
        }

        const formData = {
            nome,
            email,
            telefone: document.getElementById("telefone").value.trim(),
            tipoApoio,
            dataRegistro: new Date().toISOString()
        };

        localStorage.setItem("dadosCadastro", JSON.stringify(formData));
        feedback.style.color = "#28a745";
        feedback.textContent = "Cadastro realizado e salvo com sucesso!";
    });
}