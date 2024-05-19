function importar() {
    if (!validarInputObrigatorio()) {
        alert("Preencha todos os campos");
        return;
    } 

    inserirLocalStorage();
    alert("inserido com sucesso");
}

function validarInputObrigatorio() {
    const component = window.document.getElementsByTagName("wc-input");
    let validacao = true;

    for (let i = 0; i < component.length; i++) {
        const element = component[i].shadowRoot;

        let input = element.querySelector(".input");
        let img = element.querySelector("#error");

        if (input.value == "") {
            validacao = false;
            img.style.visibility = "visible";
        } else {
            img.style.visibility = "hidden";
        }   
    }
    
    return validacao;
}

function cancelar() {
    const component = window.document.getElementsByTagName("wc-input");

    for (let i = 0; i < component.length; i++) {
        const element = component[i].shadowRoot;

        let input = element.querySelector(".input");
        let img = element.querySelector("#error");

        input.value = "";
        img.style.visibility = "hidden";   
    }
}

function inserirLocalStorage() {
    let item = {cliente: "",produto: "",empresa: "",qtdVenda: 0,valorTotal: 0,dataVenda: ""};
    let vendas = localStorage.getItem("vendas");
    if (vendas !== null) {
        vendas = JSON.parse(vendas); 
    } else {
        vendas = [];
    } 

    const component = window.document.getElementsByTagName("wc-input");

    for (let i = 0; i < component.length; i++) {
        const element = component[i].shadowRoot;
        let input = element.querySelector(".input");

        item = {
            cliente: input.name === "cliente" ? input.value : item.cliente,
            produto: input.name === "produto" ? input.value : item.produto,
            empresa: input.name === "empresa" ? input.value : item.empresa,
            qtdVenda: input.name === "qtdVenda" ? input.value : item.qtdVenda,
            valorTotal: input.name === "valorTotal" ? input.value : item.valorTotal,
            dataVenda: input.name === "dataVenda" ? input.value : item.dataVenda
        }

        delete element;
        delete input;
    }

    vendas = [...vendas, item];
    localStorage.setItem("vendas", JSON.stringify(vendas));
}