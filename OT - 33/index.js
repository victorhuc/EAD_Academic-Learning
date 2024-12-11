function imprimirContato(contato) {
    console.log("Email: ".concat(contato.email));
    console.log("Telefone: ".concat(contato.telefone));
}
var meuContato = {
    email: "exemplo@email.com",
    telefone: "(11) 99999-9999",
};
imprimirContato(meuContato);
var soma = function (a, b) { return a + b; };
var subtracao = function (a, b) { return a - b; };
var multiplicacao = function (a, b) { return a * b; };
var divisao = function (a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
};
console.log("Soma:", soma(10, 5)); 
console.log("Subtração:", subtracao(10, 5)); 
console.log("Multiplicação:", multiplicacao(10, 5)); 
console.log("Divisão:", divisao(10, 5)); 
function definirConfiguracao(config) {
    var bg = config.background || "padrão branco";
    console.log("A configura\u00E7\u00E3o do aplicativo foi definida com o background: ".concat(bg));
}
var config1 = { background: "azul" };
definirConfiguracao(config1);
var config2 = {};
definirConfiguracao(config2);
//4

function processarEntrada(entrada) {
    if (Array.isArray(entrada)) {
        return entrada.join(", ");
    }
    return entrada;
}
var resultado1 = processarEntrada("Texto único");
console.log(resultado1);
var resultado2 = processarEntrada(["Texto 1", "Texto 2", "Texto 3"]);
console.log(resultado2);

function descricaoJogo(jogo) {
    console.log("Jogo: ".concat(jogo.nome));
    console.log("Pre\u00E7o: R$".concat(jogo.preco.toFixed(2)));
 
    if (jogo.jogar) {
        console.log("Convidando você para jogar...");
        jogo.jogar(); 
    }
    else {
        console.log("Este jogo não pode ser jogado agora.");
    }
}

var jogo1 = {
    nome: "Aventura Épica",
    preco: 59.99,
    jogar: function () { return console.log("Iniciando o jogo: Aventura Épica!"); }
};

var jogo2 = {
    nome: "Quebra-Cabeça Relaxante",
    preco: 29.99
};

descricaoJogo(jogo1);

descricaoJogo(jogo2);
