//ATIVIDADE 1
let livros = new Map();
livros.set('harry potter', 'J.K');
livros.set('senhor dos aneis', 'Tokkin');
livros.set('Super amarelo feliz', 'Anderson');

//ATIVIDADE 2
console.log(livros.get('senhor dos aneis'));

//ATIVIDADE 3 
for(let[chave, valor] of livros){
    console.log(`${chave}: ${valor}`);
}

//ATIVIDADE 4
console.log(livros.size);
livros.delete('super amarelo feliz');
console.log(livros.has('super amarelo feliz'));

//ATIVIDADE 5
const colecao = new Map();
colecao.set('nome', 'João'); 
colecao.set(1, 'Um');       
colecao.set(true, 'Verdadeiro');
colecao.set({ id: 1 }, 'Objeto com ID 1'); 
colecao.set(Symbol('simbolo'), 'Símbolo Único');