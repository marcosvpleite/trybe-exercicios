function mudaTexto(texto){
    let mudarTexto = document.getElementsByTagName("p")[1];
    mudarTexto.innerText = texto;
}

mudaTexto("texto alterado");
