// Função para calcular a similaridade entre duas strings
function calcularSimilaridade(str1, str2) {
    const tokens1 = str1.toLowerCase().split(' ');
    const tokens2 = str2.toLowerCase().split(' ');

    const conjuntoIntersecao = tokens1.filter(token => tokens2.includes(token));
    const similaridade = (2 * conjuntoIntersecao.length) / (tokens1.length + tokens2.length);

    return similaridade;
}

// Função para encontrar a pergunta mais semelhante
function encontrarPerguntaSemelhante(perguntaUsuario) {

    let melhorSimilaridade = 0;
    let respostaCorrespondente = '';

    perguntasRespostas.forEach(item => {
        const similaridade = calcularSimilaridade(perguntaUsuario, item.pergunta);

        if (similaridade > melhorSimilaridade) {
            melhorSimilaridade = similaridade;
            respostaCorrespondente = item.resposta;
        }
    });



    // Se a melhor similaridade não atingir o limite desejado, use uma mensagem de fallback
    if (melhorSimilaridade < limiteSimilaridade) {
        respostaCorrespondente = NaoEntendeu();
    }
    
    return respostaCorrespondente;
}


function verificarStringEObterResposta(str) {
    var ra = '';
    console.clear();
    //perguntasRespostas
    if(ra ==='')
    {
        for (const array of perguntasRespostas) {
            const pc = Object.keys(array).filter(key => key.includes('pergunta'));
    
            if (pc.every(palavra => str.includes(array[palavra]))) 
            {
                const r = Object.keys(array).filter(key => key.includes('resposta'));
                ra = array[r[Math.floor(Math.random() * r.length)]];
                
                return ra;
            }
        }
    }
    
    console.log('pesquisa no cerebro2.json');
    
    
    if (ra === '') {
        //ainda nao achou uma resposta
        //pesquisa no cerebro2.json
        for (const array of perguntasRespostasCerebro2) {
            const pc = Object.keys(array).filter(key => key.includes('pergunta'));

            if (pc.every(palavra => str.includes(array[palavra]))) {
                const r = Object.keys(array).filter(key => key.includes('resposta'));
                ra = array[r[Math.floor(Math.random() * r.length)]];
                
                console.log(ra);
                
                return ra;
            }
        }
    }

    
    //não achou nada
    console.log('Nao Entendeu');
    return NaoEntendeu();

}