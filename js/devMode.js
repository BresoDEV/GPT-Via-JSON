
function DevMode(pergunta) {
    var palavraProcurada = '/dev';
    if (pergunta.toLowerCase().includes(palavraProcurada.toLowerCase())) {
        MsgUsuario(pergunta);
        document.getElementById('pergunta').value = '';
        MsgBot("Voce ativou o recurso de desenvolvedor " +escolherEmotionAleatorio(emotionsTecnologia)+'<br><br>'+
            "Comandos:<br><br>" +
            "<b>/vel</b> = Define o quanto o bot demora para escrever cada letra (em milisegundos), de 1 a qualquer valor<br><br>" +
            "<i><b>Ex:</b> /vel <font style='color:lime'>30</font></i><br>Valor padrao:10<br><hr><br>" +
            "<b>/reset</b> = Redefine os valores para o padrão.<br><br>" +
            "<i><b>Ex:</b> /reset<br><hr><br>" +
            "");
        ativouDevMode = true;
        return true;
    }



    return false;
}

function comandosDEV(pergunta) {
    if (contemPalavra(pergunta, '/vel ')) {
        delay = parseInt(pergunta.replace('/vel ', ''));
        MsgUsuario(pergunta);
        MsgBot('Otimo,agora vou mudar a velocidade de escrever '+escolherEmotionAleatorio(emotionsVelocidade));
        document.getElementById('pergunta').value = '';
        return true;
    }
    else if (contemPalavra(pergunta, '/reset')) {
        //delay = parseInt(pergunta.replace('/vel ', ''));
        limiteSimilaridade = 0.4;
        delay = 25;
        MsgUsuario(pergunta);
        MsgBot('Entendido,tudo redefinido &#128516');
        document.getElementById('pergunta').value = '';
        return true;
    }
    else if (contemPalavra(pergunta, '/off')) {
        if (ativouDevMode) {
            ativouDevMode = false;
            MsgUsuario(pergunta);
            MsgBot('Entendido,modo dev desativado &#128516');
            document.getElementById('pergunta').value = '';
            return true;
        }
        else {
            MsgUsuario(pergunta);
            MsgBot('Modo dev ja esta desativado &#128516');
            document.getElementById('pergunta').value = '';
            return true;
        }
    }
    else if (contemPalavra(pergunta, '/') && ativouDevMode) {
        //Comando invalido
        MsgUsuario(pergunta);
        MsgBot('Comando de desenvolvedor inválido.<br>' +
            'Quer desativar o modo desenvolvedor? &#128516 <br> Digite: ' +
            '<font style="color:lime">/off</font>');
        document.getElementById('pergunta').value = '';
        return true;
    }


    return false;
}
