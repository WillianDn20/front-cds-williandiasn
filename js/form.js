export function initForm(){let e=document.getElementById("container-formulario");if(!e)return;e.innerHTML=`
        <section>
            <h2>Cadastro de Participa\xe7\xe3o</h2>
            <form id="form-cadastro" novalidate>
                <fieldset>
                    <legend>Informa\xe7\xf5es Pessoais</legend>
                    
                    <label for="nome">Nome Completo: *</label>
                    <input type="text" id="nome" name="nome" required aria-required="true" placeholder="Digite seu nome completo">

                    <label for="email">E-mail: *</label>
                    <input type="email" id="email" name="email" required aria-required="true" placeholder="seuemail@exemplo.com">

                    <label for="telefone">Telefone/WhatsApp:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999">

                    <label for="tipo-apoio">Como deseja apoiar? *</label>
                    <select id="tipo-apoio" name="tipoApoio" required aria-required="true">
                        <option value="">Selecione uma op\xe7\xe3o</option>
                        <option value="voluntario">Volunt\xe1rio</option>
                        <option value="doador">Doador</option>
                        <option value="parceiro">Parceiro Institucional</option>
                    </select>
                </fieldset>

                <button type="submit">Enviar Cadastro</button>
            </form>
            <div id="mensagem-feedback" aria-live="polite" style="margin-top: 15px; font-weight: bold;"></div>
        </section>
    `;let o=document.getElementById("form-cadastro"),t=document.getElementById("mensagem-feedback"),a=localStorage.getItem("dadosCadastro");if(a){let i=JSON.parse(a);document.getElementById("nome").value=i.nome||"",document.getElementById("email").value=i.email||"",document.getElementById("telefone").value=i.telefone||"",document.getElementById("tipo-apoio").value=i.tipoApoio||""}o.addEventListener("submit",e=>{e.preventDefault();let o=document.getElementById("nome").value.trim(),a=document.getElementById("email").value.trim(),i=document.getElementById("tipo-apoio").value;if(!o||!a||!i){t.style.color="#d9534f",t.textContent="Por favor, preencha todos os campos obrigat\xf3rios marcados com asterisco.";return}let l={nome:o,email:a,telefone:document.getElementById("telefone").value.trim(),tipoApoio:i,dataRegistro:new Date().toISOString()};localStorage.setItem("dadosCadastro",JSON.stringify(l)),t.style.color="#28a745",t.textContent="Cadastro realizado e salvo com sucesso!"})}