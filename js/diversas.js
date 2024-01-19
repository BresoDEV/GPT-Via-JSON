function _GET(nomeDoParametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nomeDoParametro);
}

function ajustarAltura(elemento) {
    elemento.style.height = 'auto'; // Define a altura para 'auto' para resetar
    elemento.style.height = (elemento.scrollHeight) + 'px'; // Ajusta a altura com base no conteúdo
}

function contemPalavra(pergunta, palavra) {
    var palavraProcurada = palavra;
    if (pergunta.toLowerCase().includes(palavraProcurada.toLowerCase())) {
        return true;
    }
    return false;
}

function contemPalavraArray(pergunta, arrays) {
    let achou = false;
    arrays.forEach(element => {
        console.log(element+' : '+contemPalavra(pergunta,element));
        if (contemPalavra(pergunta,element))
        {
            achou = true;
        }
    });
    return achou;
}
