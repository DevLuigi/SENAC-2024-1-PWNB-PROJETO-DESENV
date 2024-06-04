export class ParteBrancaLogin extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({ mode: "open" });
        component.appendChild(this.build());
        component.appendChild(this.style());
    }

    build() {
        const component = document.createElement("div");
        component.innerHTML = `
            <h2> LOGIN </h2>
            <wc-input-label class="container-input" label="Email" placeholder="Digite seu e-mail"></wc-input-label>
            <wc-input-label class="container-input" label="Senha" placeholder="Digite sua senha"></wc-input-label>
            <button> Entrar </button>
            <div>
                <p>Não tem uma conta? <a href="/pages/cadastrese/index.html"> Cadastre-se </a></p>
            </div>
        `;
        component.classList.add("container");

        return component;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            
                height: 100vh;
                width: 50vw;
            }
            
            h2 {
                color: #404040;
            }

            .container-input {
                width: 70%; 
            }

            button {
                font-weight: bold;
                font-size: .9em;
                color: #f2f2f2;
                background-color: #4169E1;
            
                height: 3.5em;
                width: 70%;
                
                border: none;
                border-radius: .5em;
            }
            
            a, a:hover, a:focus, a:active {
                color: #4169E1;
            }
        `;

        return style;
    }
}