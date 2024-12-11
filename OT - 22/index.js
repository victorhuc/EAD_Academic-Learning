
const championship = "Paulista";
console.log(championship);

const teams = ["Corinthians", "Palmeiras", "São Paulo", "Santos", "Ponte Preta"];
console.log("Times que estão participando do campeonato:", teams);

function showTeamPosition(posicao) {

  if (posicao >= 1 && posicao <= 5) {
    const indice = posicao - 1; 
    return `O time que está em ${posicao}º lugar é o ${teams[indice]}.`;
  } else {
    return "Não temos a informação do time que está nessa posição.";
  }
}

console.log(showTeamPosition(1));
console.log(showTeamPosition(3));
console.log(showTeamPosition(5));
console.log(showTeamPosition(6));

let numero = 20;
while (numero <= 30) {
  console.log(numero);
  numero++;
}

function convertToHex(cor) {
  let hexadecimal;

  switch (cor.toLowerCase()) {
    case "red":
      hexadecimal = "#FF0000";
      break;
    case "green":
      hexadecimal = "#00FF00";
      break;
    case "blue":
      hexadecimal = "#0000FF";
      break;
    case "yellow":
      hexadecimal = "#FFFF00";
      break;
    case "black":
      hexadecimal = "#000000";
      break;
    default:
      return `Não temos o equivalente hexadecimal para ${cor}.`;
  }

  return `O hexadecimal para a cor ${cor} é ${hexadecimal}.`;
}

console.log(convertToHex("red")); 
console.log(convertToHex("green")); 
console.log(convertToHex("blue")); 
console.log(convertToHex("yellow")); 
console.log(convertToHex("black")); 
console.log(convertToHex("purple")); 
console.log(convertToHex("orange")); 
console.log(convertToHex("white")); 