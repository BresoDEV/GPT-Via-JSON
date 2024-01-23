//Variaveis
var delay = 25;
var limiteSimilaridade = 0.4;


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


var arrayObrigados = [
    'valeu','obrigad','agrade'
];
var arrayTchaus = [
    'tchau','ate mais','até mais','adeus','ate logo','até logo',
];
var arrayDesculpas = [
    'desculp','perdão','perdao'
];
var arrayRespostasDesculpas = [
    "Não precisa se desculpar.",
    "Sem necessidade de desculpas.",
    "Tudo bem, sem desculpas necessárias.",
    "Está tudo bem, não precisa pedir desculpas.",
    "Entendido, sem desculpas.",
    "Está tudo certo, não precisa se desculpar.",
    "Não há problema, sem desculpas.",
    "Entendi, sem necessidade de desculpas.",
    "Sem preocupações, não precisa se desculpar.",
    "Está ok, não é necessário pedir desculpas."
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
