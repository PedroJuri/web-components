class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        
        const shadow = this.attachShadow({mode: "open"});

        //BASE do component <h1>Notícia</h1>
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = 'Notícia';

        //ESTILIZAR o component <h1 style="color: red">Notícia</h1>
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;

        //ENVIAR para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico)