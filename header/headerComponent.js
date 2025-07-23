function header (){
    let header = document.createElement("header")
    
    let titulo = document.createElement (h1);
    titulo.classname = "titulo";
    titulo.innerText = "@fimendez";
    header.appendChild(Titulo);

    let divLogo = document.createElement ("div");
    divLogo.classname = "div-logo";
    divLogo.innerText = ""

    return header;
}

export (header);