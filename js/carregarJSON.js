carregarJsons();



function carregarJsons() {
    let arquivo = 'json/cerebro.json';
    fetch(arquivo)
        .then(response => response.json())
        .then(data => {
            perguntasRespostas = data;
            carregouperguntasRespostas.valor = true;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON ' + arquivo, error);
        });
    //------------------
    arquivo = 'json/BemVindo.json';
    fetch(arquivo)
        .then(response => response.json())
        .then(data => {
            RespostasBemVindo = data;
            carregouRespostasBemVindo.valor = true;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON ' + arquivo, error);
        });
    //------------------
    arquivo = 'json/tchau.json';
    fetch(arquivo)
        .then(response => response.json())
        .then(data => {
            RespostasTchau = data;
            carregouRespostasTchau.valor = true;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON ' + arquivo, error);
        });
    //------------------
    arquivo = 'json/obrigado.json';
    fetch(arquivo)
        .then(response => response.json())
        .then(data => {
            RespostasObrigado = data;
            carregouRespostasObrigado.valor = true;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON ' + arquivo, error);
        });
    //------------------
    arquivo = 'json/naoEntendeu.json';
    fetch(arquivo)
        .then(response => response.json())
        .then(data => {
            RespostasNaoEntendeu = data;
            carregouRespostasNaoEntendeu.valor = true;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON ' + arquivo, error);
        });
    //------------------






    //console.log(RespostasBemVindo);
    //console.log(perguntasRespostas);
    //console.log(RespostasTchau);
    //console.log(RespostasObrigado);
}