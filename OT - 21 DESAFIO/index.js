
let valoresAleatorios = [23, 'JavaScript', true, 42, [1, 2, 3]];


function retornarArray(arr) {
  return arr;
}

let arrayRetornado = retornarArray(valoresAleatorios);
console.log(arrayRetornado[2]); 

function retornarIndice(arr, indice) {
  return arr[indice];
}

let arrayDiverso = [100, 'Hello', false, {nome: 'João'}, [5, 6, 7]];


console.log(retornarIndice(arrayDiverso, 0));  
console.log(retornarIndice(arrayDiverso, 1));  
console.log(retornarIndice(arrayDiverso, 2));  
console.log(retornarIndice(arrayDiverso, 3));  
console.log(retornarIndice(arrayDiverso, 4)); 


function book(nomeLivro) {
  const livros = {
    "Livro A": {
      quantidadePaginas: 250,
      autor: "Autor A",
      editora: "Editora A"
    },
    "Livro B": {
      quantidadePaginas: 300,
      autor: "Autor B",
      editora: "Editora B"
    },
    "Livro C": {
      quantidadePaginas: 150,
      autor: "Autor C",
      editora: "Editora C"
    }
  };

  if (nomeLivro) {
    return livros[nomeLivro];
  }

  return livros;
}


console.log(book());  

let livroA = book("Livro A");
console.log(`O livro Livro A tem ${livroA.quantidadePaginas} páginas!`); 


console.log(`O autor do livro Livro A é ${livroA.autor}.`);  


console.log(`O livro Livro A foi publicado pela editora ${livroA.editora}.`); 