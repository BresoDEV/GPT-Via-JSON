document.write('<script src="js/respostasDefinidas.js"></script>' +
  '<script src="js/carregarJSON.js"></script>' +
  '<script src="js/calculosSimilaridade.js"></script>' +
  '<script src="js/variaveis.js"></script>' +
  '<script src="js/diversas.js"></script>' +
  '<script src="js/devMode.js"></script>');





var loopCarregamento = setInterval(() => {
  
  if (carregouperguntasRespostas.valor === true &&
    carregouRespostasBemVindo.valor === true &&
    carregouRespostasTchau.valor === true &&
    carregouRespostasNaoEntendeu.valor === true &&
    carregouRespostasBlacklist.valor === true &&
    carregouRespostasBlacklist.valor === true &&
    carregouRespostasObrigado.valor === true) {

    console.log('Todos JSONS carregados com sucesso');
    clearInterval(loopCarregamento);
    MsgBot(BemVindo());


  }
}, 1000);



function Perguntar(txtPergunta) {
  if (txtPergunta !== null && txtPergunta !== undefined) 
  {

      if (DevMode(txtPergunta) === false) 
      {
          if (comandosDEV(txtPergunta) === false) 
          {
              
              if (contemPalavraArray(txtPergunta, arrayTchaus)) 
              {
                  console.log('disse tchau');
                  MsgUsuario(txtPergunta);
                  MsgBot(Tchau());
                  document.getElementById('pergunta').value = '';
              }
              else if (contemPalavraArray(txtPergunta, arrayObrigados)) 
              {
                  MsgUsuario(txtPergunta);
                  MsgBot(Obrigado());
                  document.getElementById('pergunta').value = '';
              }
              else if (contemPalavraArray(txtPergunta, arrayPalavroes)) 
              {
                  MsgUsuario(txtPergunta);
                  MsgBot(Palavrao());
                  document.getElementById('pergunta').value = '';
              }
              else if (contemPalavraArray(txtPergunta, arrayDesculpas)) 
              {
                  MsgUsuario(txtPergunta);
                  MsgBot(Desculpas());
                  document.getElementById('pergunta').value = '';
              }
              else 
              {
                  //Resposta normal via cerebro
                  var perguntas = txtPergunta;
                  MsgUsuario(perguntas);

                  //sistema via similaridade
                  //var resposta = encontrarPerguntaSemelhante(perguntas);
                  
                  //sistema via palavras iguais
                  var resposta = verificarStringEObterResposta(perguntas.toLowerCase());
                  MsgBot(resposta);

                  document.getElementById('pergunta').value = '';
              }
          }
      }

  }
}


function MsgUsuario(texto) {
  const chat = document.getElementById('chat');
  const div = document.createElement('div');
  div.classList.add('message', 'user-message');
  div.innerHTML = texto;
  chat.appendChild(div);
}


function MsgBot(texto) {
  let index = 0;

  function digitar() {
    div.innerHTML = texto.substring(0, index);
    index++;
    document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
    if (index <= texto.length) {
      setTimeout(digitar, delay);
      document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
    }
  }

  const chat = document.getElementById('chat');
  const div = document.createElement('div');
  div.classList.add('message', 'bot-message');
  chat.appendChild(div);
  digitar(div);
}
















































