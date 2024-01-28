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
function Palavrao() {
    let i = Math.floor(Math.random() * RespostasBlacklist.length);
    //console.log(RespostasBemVindo[i]);
    return RespostasBlacklist[i];
}

function Desculpas() {
    let i = Math.floor(Math.random() * arrayRespostasDesculpas.length);
    //console.log(RespostasBemVindo[i]);
    return arrayRespostasDesculpas[i];
}

function Ola() {
    let i = Math.floor(Math.random() * RespostasOla.length);
    //console.log(RespostasBemVindo[i]);
    return RespostasOla[i];
}

function DataHoje() {
    const o = {
        timeZone: 'America/Sao_Paulo',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    };
    const f = new Intl.DateTimeFormat('pt-BR', o);
    return f.format(new Date().hour);
}

function HoraHoje() {
    const o = {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const f = new Intl.DateTimeFormat('pt-BR', o);
    return f.format(new Date().hour);
}
