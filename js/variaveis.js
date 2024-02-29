//Variaveis
var delay = 25;
var limiteSimilaridade = 0.4;

var ativouDevMode = false;


// Lista de perguntas e respostas
var RespostasBemVindo = [];
var carregouRespostasBemVindo = { valor: false };

var RespostasTchau = [];
var carregouRespostasTchau = { valor: false };

var RespostasObrigado = [];
var carregouRespostasObrigado = { valor: false };

var perguntasRespostas = [];
var carregouperguntasRespostas = { valor: false };

var RespostasNaoEntendeu = [];
var carregouRespostasNaoEntendeu = { valor: false };

var RespostasBlacklist = [];
var carregouRespostasBlacklist = { valor: false };

var RespostasOla = [];
var carregouRespostasOla = { valor: false };


var perguntasRespostasCerebro2 = [];
var carregouperguntasRespostasCerebro2 = { valor: false };

var arrayData = [
    'dia','hoje'
];
var arrayOla = [
    'oi','ola','olá','bom dia','boa noite','boa tarde','oie','alô','alo','eai','e ai','opa'
];
var arrayObrigados = [
    'valeu','obrigad','agrade','perfeito','muito bom'
];
var arrayTchaus = [
    'tchau','ate mais','até mais','adeus','ate logo','até logo',
];
var arrayDesculpas = [
    'desculp','perdão','perdao'
];
var arrayRespostasDesculpas = [
    "Não precisa se desculpar &#128516",
    "Sem necessidade de desculpas &#128516",
    "Tudo bem, sem desculpas necessárias &#128516",
    "Está tudo bem, não precisa pedir desculpas &#128516",
    "Entendido, sem desculpas &#128516",
    "Está tudo certo, não precisa se desculpar &#128516",
    "Não há problema, sem desculpas &#128516",
    "Entendi, sem necessidade de desculpas &#128516",
    "Sem preocupações, não precisa se desculpar &#128516",
    "Está ok, não é necessário pedir desculpas &#128516"
];

var arrayPalavroes = [
    'buceta',
    'da puta',
    'viado',
    'gay',
    'bixa',
    'lesbica',
    'lésbica',
    'cacet',
    'punheta',
    'penis',
    'pênis',
    'xoxota',
    'piranha',
    'xereca',
    'meu pau',
    'sexo',
    'fuder',
    'foder',
    'bosta',
    'merda',
    'transar',
    'boquete',
    'oral',
    'travesti',
    'burro',
    'idiota',
    'caralh'
];


//emotions aleatorios

var emotionsFeliz = [
    '&#128512;',//😀
    '&#128513;',//😁
    '&#128515;',//😃
    '&#128516;',//😄
    '&#128518;',//😆
    '&#128522;',//😊
    '&#128525;',//😍
];
var emotionsTriste = [
    '&#128530;',//😒
    '&#128529;',//😑
    '&#128533;',//😕
    '&#128543;',//😟
    '&#128546;',//😢
];
var emotionsAnimais = [
    '&#128004;',
    '&#128012;',
    '&#128020;',
    '&#128030;',
    '&#128049;',
    '&#128056;',
];
var emotionsAleatorios = [
    '&#128077;',//👍
    '&#128123;',//👻
    '&#128126;',//👾
    '&#128142;',//💎
    '&#128151;',//💗
    '&#128161;',//💡
    '&#128165;',//💥
    '&#128175;',//💯
    '&#128293;',//🔥
    '&#128400;',//🖐
];
var emotionsTecnologia = [
    '&#128187;',//💻
    '&#128223;',//📟
    '&#128241;',//📱
    '&#128274;',//🔒
    '&#128295;',//🔧
];

var emotionsPalavrao = [
    '&#129324;',// 🤬
    '&#129326;',// 🤮
    '&#129314;',// 🤢
    '&#128286;',// 🔞
];
var emotionsVelocidade = [
    '&#128640;',// 🚀
    '&#128692;',// 🚴
    '&#127939;',// 🏃
];



function escolherEmotionAleatorio(array)
{
    return array[Math.floor(Math.random() * array.length)];
}
