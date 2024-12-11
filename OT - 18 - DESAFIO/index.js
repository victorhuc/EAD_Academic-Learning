
let isTruthy = function (valor) {
    return Boolean(valor); 
  };

  console.log(isTruthy(false)); 
  console.log(isTruthy(0)); 
  console.log(isTruthy("")); 
  console.log(isTruthy(null)); 
  console.log(isTruthy(undefined)); 
  console.log(isTruthy(NaN)); 
  console.log("------");
  
  console.log(isTruthy(true)); 
  console.log(isTruthy(1)); 
  console.log(isTruthy("texto")); 
  console.log(isTruthy([])); 
  console.log(isTruthy({})); 
  console.log(isTruthy(Infinity)); 
  console.log(isTruthy(42)); 
  console.log(isTruthy(" ")); 
  console.log(isTruthy(new Date())); 
  console.log(isTruthy(() => {})); 
  let carro = {
    marca: "Volkswagen",
    modelo: "GOL",
    placa: "ABC-1234",
    ano: 2021,
    cor: "branco",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
  
    mudarCor: function (novaCor) {
      this.cor = novaCor;
    },
  
    obterCor: function () {
      return this.cor;
    },
    obterModelo: function () {
      return this.modelo;
    },
    obterMarca: function () {
      return this.marca;
    },
    obterMarcaModelo: function () {
      return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
    },
    adicionarPessoas: function (numPessoas) {
      if (this.quantidadePessoas >= this.assentos) {
        return "O carro já está lotado!";
      }
  
      let lugaresDisponiveis = this.assentos - this.quantidadePessoas;
  
      if (numPessoas > lugaresDisponiveis) {
        return `Só cabem mais ${lugaresDisponiveis} ${
          lugaresDisponiveis === 1 ? "pessoa" : "pessoas"
        }!`;
      }
  
      this.quantidadePessoas += numPessoas;
      return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
    },
    removerPessoas: function (numPessoas) {
      if (this.quantidadePessoas <= 0) {
        return "Não há ninguém no carro!";
      }
  
      this.quantidadePessoas -= numPessoas;
      if (this.quantidadePessoas < 0) {
        this.quantidadePessoas = 0;
      }
      return `Agora temos ${this.quantidadePessoas} ${
        this.quantidadePessoas === 1 ? "pessoa" : "pessoas"
      } no carro.`;
    },
  };
  console.log(carro.obterCor()); 
  carro.mudarCor("vermelho"); 
  console.log(carro.obterCor()); 
  carro.mudarCor("verde musgo"); 
  console.log(carro.obterCor()); 
  console.log(carro.obterMarcaModelo()); 
  console.log(carro.adicionarPessoas(2));
  console.log(carro.adicionarPessoas(4)); 
  console.log(carro.adicionarPessoas(3)); 
  console.log(carro.removerPessoas(4)); 
  console.log(carro.adicionarPessoas(10)); 
  console.log(carro.quantidadePessoas); 