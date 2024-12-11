//1
let array = [10, 20, 30];
let [primeiro, segundo, terceiro] = array;

console.log(primeiro);
console.log(segundo);  
console.log(terceiro); 
//2
let pessoa = {
    nome: 'Julia',
    idade: 20
};

let { nome, idade } = pessoa;

console.log(nome);  
console.log(idade); 

//3
function exibirUsuario({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

let usuario = { nome: 'Carlos', idade: 30 };
exibirUsuario(usuario);
//4
let arrayAninhado = [[1, 2], [3, 4], [5, 6]];
let [[a, b], [c, d], [e, f]] = arrayAninhado;

console.log(a, b); 
console.log(c, d); 
console.log(e, f); 

let arrayComUmElemento = [42];
let [valor1, valor2 = 100] = arrayComUmElemento;

console.log(valor1); 
console.log(valor2); 

let x = 'primeiro';
let y = 'segundo';

[x, y] = [y, x];

console.log(x); 
console.log(y); 