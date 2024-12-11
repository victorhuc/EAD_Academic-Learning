
let meuObjeto = {};

let pessoa = {
  nome: "Victor",
  sobrenome: "Correa",
  sexo: "masculino",
  idade: 21,
  altura: 1.77,
  peso: 75,
  andando: false,
  caminhouQuantosMetros: 0,

  fazerAniversario: function () {
    this.idade += 1;
  },

  andar: function (metros) {
    this.caminhouQuantosMetros += metros;
    this.andando = true;
  },

  parar: function () {
    this.andando = false;
  },

  nomeCompleto: function () {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
  },

  mostrarIdade: function () {
    return `Olá, eu tenho ${this.idade} anos!`;
  },

  mostrarPeso: function () {
    return `Eu peso ${this.peso}Kg.`;
  },

  mostrarAltura: function () {
    return `Minha altura é ${this.altura}m.`;
  },

  apresentacao: function () {
    const pronome = this.sexo === "Feminino" ? "a" : "o";
    const anoOuAnos = this.idade === 1 ? "ano" : "anos";
    const metroOuMetros = this.caminhouQuantosMetros === 1 ? "metro" : "metros";

    return `Olá, eu sou ${pronome} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anoOuAnos}, ${this.altura}m, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metroOuMetros}!`;
  },
};

console.log(pessoa.nomeCompleto()); 

console.log(pessoa.mostrarIdade()); 

console.log(pessoa.mostrarPeso()); 

console.log(pessoa.mostrarAltura()); 

pessoa.fazerAniversario();


console.log(pessoa.idade)

pessoa.andar(100);
pessoa.andar(200);
pessoa.andar(150);

console.log(pessoa.andando);

pessoa.parar();

console.log(pessoa.andando); 

console.log(pessoa.caminhouQuantosMetros);

console.log(pessoa.apresentacao()); 