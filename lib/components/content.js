export class Content extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({mode: "open"});
        component.appendChild(this.build());
        component.appendChild(this.style());
    }

    build(){
        const content = document.createElement("main");
        content.innerHTML = `
            <h1 class="titulo"></h1>
            <slot></slot>
        `

        const titulo = content.getElementsByClassName("titulo").item(0);
        titulo.textContent = this.getAttribute("titleContent");

        return content;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
            main {
                display: flex;
                flex-direction: column;
                height: 77.8vh;
                width: 71.8vw;

                padding: 1.5em;
            }
            
            h1 {
                font-size: 1.3em;
                color: #363636;
                
                height: max-content;
                width: max-content;
            }
        `

        return style;
    }
}