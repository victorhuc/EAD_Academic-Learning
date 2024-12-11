
function somar(a, b) {
    return a + b;
  }
  
  let resultado = somar(10, 20) + 5;
  

  console.log(resultado); 
  let minhaVariavel;

  function adicionarValor(valor) {
    minhaVariavel = valor;
    return `O valor da variável agora é ${minhaVariavel}`;
  }
  
  console.log(adicionarValor(50));  

  function multiplicarSomar(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
      return "Preencha todos os valores corretamente!";
    }
    return (a * b * c) + 2;
  }
  
  console.log(multiplicarSomar(2, 3));  

  console.log(multiplicarSomar(2, 3, 4));  

  