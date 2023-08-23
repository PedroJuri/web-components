class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardleft");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardright");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);
        newsImage.src = this.getAttribute("img-src") || "assets/default-profile.png";
        newsImage.alt = this.getAttribute("img-alt") || "Imagem";

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){

    }
}

customElements.define('card-news', CardNews);