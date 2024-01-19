function BemVindo() {
    let i = Math.floor(Math.random() * RespostasBemVindo.length);
    //console.log(RespostasBemVindo[i]);
    return RespostasBemVindo[i];
}

function Tchau() {
    let i = Math.floor(Math.random() * RespostasTchau.length);
    //console.log(RespostasBemVindo[i]);
    return RespostasTchau[i];
}
function Obrigado() {
    let i = Math.floor(Math.random() * RespostasObrigado.length);
    //console.log(RespostasBemVindo[i]);
    return RespostasObrigado[i];
}
function NaoEntendeu() {
    let i = Math.floor(Math.random() * RespostasNaoEntendeu.length);
    //console.log(RespostasBemVindo[i]);
    return RespostasNaoEntendeu[i];
}
