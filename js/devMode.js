
function DevMode(pergunta) {
    var palavraProcurada = '/dev';
    if (pergunta.toLowerCase().includes(palavraProcurada.toLowerCase())) {
        MsgUsuario(pergunta);
        document.getElementById('pergunta').value = '';
        MsgBot("Voce ativou o recurso de desenvolvedor<br><br>" +
            "Comandos:<br><br>" +
            "<b>/cerebro</b> = Define o quanto o bot é preciso nas respostas, de 0.1 a 1.0<br><br>" +
            "<i><b>Ex:</b> /cerebro <font style='color:lime'>0.4</font></i><br>Valor padrao:0.4<br><hr><br>" +
            "<b>/vel</b> = Define o quanto o bot demora para escrever cada letra (em milisegundos), de 1 a qualquer valor<br><br>" +
            "<i><b>Ex:</b> /vel <font style='color:lime'>30</font></i><br>Valor padrao:10<br><hr><br>" +
            "<b>/reset</b> = Redefine os valores para o padrão.<br><br>" +
            "<i><b>Ex:</b> /reset<br><hr><br>" +
            "");
        return true;
    }



    return false;
}

function comandosDEV(pergunta) {
    if (contemPalavra(pergunta, '/cerebro ')) {
        limiteSimilaridade = parseFloat(pergunta.replace('/cerebro ', ''));
        MsgUsuario(pergunta);
        MsgBot('Otimo,agora vou mudar meu modo de pensar');
        document.getElementById('pergunta').value = '';
        return true;
    }
    else if (contemPalavra(pergunta, '/vel ')) {
        delay = parseInt(pergunta.replace('/vel ', ''));
        MsgUsuario(pergunta);
        MsgBot('Otimo,agora vou mudar a velocidade de escrever');
        document.getElementById('pergunta').value = '';
        return true;
    }
    else if (contemPalavra(pergunta, '/reset')) {
        //delay = parseInt(pergunta.replace('/vel ', ''));
        limiteSimilaridade = 0.4;
        delay = 25;
        MsgUsuario(pergunta);
        MsgBot('Entendido,tudo redefinido');
        document.getElementById('pergunta').value = '';
        return true;
    }


    return false;
}
