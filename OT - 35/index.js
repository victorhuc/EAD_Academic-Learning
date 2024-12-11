var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1

var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.imprimirDescricao = function () {
        console.log("Carro: ".concat(this.marca, " ").concat(this.modelo, ", Ano: ").concat(this.ano));
    };
    return Carro;
}());
var carro1 = new Carro("Toyota", "Corolla", 2020);
var carro2 = new Carro("Ford", "Mustang", 2023);
carro1.imprimirDescricao(); 
carro2.imprimirDescricao(); 
//2
console.log("2");
var Carro2 = /** @class */ (function () {
    function Carro2(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro2.prototype.imprimirDescricao = function () {
        console.log("Carro: ".concat(this.marca, " ").concat(this.modelo, ", Ano: ").concat(this.ano));
    };
    return Carro2;
}());

var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico(marca, modelo, ano, capacidadeBateria) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.capacidadeBateria = capacidadeBateria;
        return _this;
    }
    CarroEletrico.prototype.imprimirDescricao = function () {
        _super.prototype.imprimirDescricao.call(this); 
        console.log("Capacidade da Bateria: ".concat(this.capacidadeBateria, " kWh"));
    };
    return CarroEletrico;
}(Carro));
var carroEletrico1 = new CarroEletrico("Tesla", "Model S", 2023, 100);
var carroEletrico2 = new CarroEletrico("Nissan", "Leaf", 2022, 40);
carroEletrico1.imprimirDescricao();


carroEletrico2.imprimirDescricao();

//3
console.log("3");
var Conta = /** @class */ (function () {
    function Conta(saldoInicial) {
        this.saldo = saldoInicial;
    }
    Conta.prototype.depositar = function (valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado com sucesso."));
    };
    Conta.prototype.obterSaldo = function () {
        return "Saldo atual: R$".concat(this.saldo.toFixed(2));
    };
    return Conta;
}());
var minhaConta = new Conta(100); 
console.log(minhaConta.obterSaldo()); 
minhaConta.depositar(50); 
console.log(minhaConta.obterSaldo()); 
minhaConta.depositar(-10); 

console.log(minhaConta.obterSaldo()); 
//4  
console.log("4");

var Conta2 = /** @class */ (function () {
    function Conta2(saldoInicial) {
        this.saldo = saldoInicial;
    }
    Conta2.prototype.depositar = function (valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado com sucesso."));
    };
    Conta2.prototype.obterSaldo = function () {
        return "Saldo atual: R$".concat(this.saldo.toFixed(2));
    };
    Conta2.prototype.calcularJuros = function () {
        var taxa = 0.01; 
        return this.saldo * taxa;
    };
    return Conta2;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.calcularJuros = function () {
        var taxa = 0.02; 
        var saldo = parseFloat(this.obterSaldo().replace("Saldo atual: R$", ""));
        return saldo * taxa;
    };
    return ContaCorrente;
}(Conta2));

var contaPadrao = new Conta2(1000); 
var contaCorrente = new ContaCorrente(1000);
console.log("Conta Padrão:");
console.log(contaPadrao.obterSaldo());
console.log("Juros: R$".concat(contaPadrao.calcularJuros().toFixed(2)));

console.log("\nConta Corrente:");
console.log(contaCorrente.obterSaldo());
console.log("Juros: R$".concat(contaCorrente.calcularJuros().toFixed(2)));

console.log("5");
var Barco = /** @class */ (function () {
    function Barco() {
    }
    Barco.prototype.ligarMotor = function () {
        console.log("Motor do barco foi ligado. Pronto para navegar!");
    };
    return Barco;
}());
var Motocicleta = /** @class */ (function () {
    function Motocicleta() {
    }
    Motocicleta.prototype.ligarMotor = function () {
        console.log("Motor da motocicleta foi ligado. Pronto para acelerar!");
    };
    return Motocicleta;
}());
var meuBarco = new Barco();
var minhaMoto = new Motocicleta();
meuBarco.ligarMotor(); 
minhaMoto.ligarMotor(); 