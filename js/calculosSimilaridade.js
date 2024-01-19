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
    console.log('Cerebro: ' + limiteSimilaridade);
    console.log('Vel: ' + delay);
    return respostaCorrespondente;
}
