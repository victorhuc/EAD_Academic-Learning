//1

function concatenaNomes(nome, sobrenome) {
    return "".concat(nome, " ").concat(sobrenome);
}
var nomeCompleto = concatenaNomes("João", "Silva");
console.log("Nome completo:", nomeCompleto);
//2

var soma = function (a, b) { return a + b; };
var resultado = soma(5, 10);
console.log("Resultado da soma:", resultado);
//3

function saudacao(nome, titulo) {
    if (titulo) {
        return "Ol\u00E1, ".concat(titulo, " ").concat(nome, "!");
    }
    else {
        return "Ol\u00E1, ".concat(nome, "!");
    }
}
console.log(saudacao("João")); 
console.log(saudacao("João", "Dr.")); 

function ajustar(valor) {
    if (typeof valor === "number") {
        return valor + 10; 
    }
 
    return valor.toUpperCase(); 
}

console.log(ajustar(20));
console.log(ajustar("Olá TypeScript!"));
//5

function incrementa(numero, incremento) {
    if (incremento === void 0) { incremento = 1; }
    return numero + incremento;
}
console.log(incrementa(5)); 
console.log(incrementa(5, 3)); 