
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;
let altura: number = 1.75;


console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Ativo:", ativo);
console.log("Altura:", altura);


function somarElementos(numeros: number[]): number {
    return numeros.reduce((acc, num) => acc + num, 0);
}

// Testando a função
const numeros: number[] = [1, 2, 3, 4, 5];
console.log("Soma dos elementos:", somarElementos(numeros));






enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}


function mensagemDoDia(dia: DiasDaSemana): void {
    switch (dia) {
        case DiasDaSemana.Domingo:
            console.log("Hoje é domingo! Dia de descanso.");
            break;
        case DiasDaSemana.Segunda:
            console.log("Hoje é segunda! Início da semana.");
            break;
        case DiasDaSemana.Terca:
            console.log("Hoje é terça-feira. Vamos continuar a semana com força!");
            break;
        case DiasDaSemana.Quarta:
            console.log("Hoje é quarta-feira. Metade da semana!");
            break;
        case DiasDaSemana.Quinta:
            console.log("Hoje é quinta-feira. Falta pouco para o fim de semana!");
            break;
        case DiasDaSemana.Sexta:
            console.log("Hoje é sexta! Quase fim de semana!");
            break;
        case DiasDaSemana.Sabado:
            console.log("Hoje é sábado! Dia de relaxar.");
            break;
        default:
            console.log("Dia inválido.");
    }
}


mensagemDoDia(DiasDaSemana.Domingo);
mensagemDoDia(DiasDaSemana.Quarta);
mensagemDoDia(DiasDaSemana.Sexta);




let produto: [string, number] = ["Notebook", 2500.00];


function imprimirProduto(produto: [string, number]): void {
    const [nome, preco] = produto;
    console.log(`Produto: ${nome}, Preço: R$${preco.toFixed(2)}`);
}


imprimirProduto(produto);



let variavel: any;


variavel = "Uma string";
console.log(variavel); /

variavel = 42;
console.log(variavel); 

variavel = true;
console.log(variavel); 

variavel = { nome: "João", idade: 30 };
console.log(variavel); 

variavel = [1, 2, 3];
console.log(variavel); 





function funcaoVoid(): void {
    console.log("Esta função não retorna nada.");
}


function funcaoUndefined(): undefined {
    console.log("Esta função retorna undefined.");
    return undefined;
}

funcaoVoid();
const resultadoVoid = funcaoVoid(); 
console.log("Resultado da função void:", resultadoVoid);

funcaoUndefined();
const resultadoUndefined = funcaoUndefined(); 
console.log("Resultado da função que retorna undefined:", resultadoUndefined);