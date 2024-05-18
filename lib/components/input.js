export class LabelInput extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({ mode: "open" });
        component.appendChild(this.build());
        component.appendChild(this.style());
    }

    build() {
        const component = document.createElement("div");
        component.innerHTML = `
            <label class="label"></label>
            <input class="input"></input>
        `;

        const attLabel = this.getAttribute("label");
        const attType = this.getAttribute("type");

        const label = component.getElementsByTagName("label").item(0);
        label.textContent = attLabel;

        const input = component.getElementsByTagName("input").item(0);
        input.setAttribute("type", attType);

        return component;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                
                width: 30em;
                margin-bottom: 1em;
            }

            input {
                width: 60%;
                height: 1.8em;
            }
        `;

        return style;
    }
}