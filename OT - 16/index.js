// ATIVIDADE 1
const frutas = new Set();
frutas.add("maçã");
frutas.add("banana");
frutas.add("laranja");

frutas.add("maçã"); 
console.log("Frutas no Set:", frutas);
// ATIVIDADE 2

const temBanana = frutas.has("banana");
console.log("O Set contém banana?", temBanana);

// ATIVIDADE 3

frutas.delete("laranja");
console.log("Frutas após remover a laranja:", frutas);

// ATIVIDADE 4

frutas.clear();
console.log("Frutas após limpar o Set:", frutas);

// ATIVIDADE 5

const numeros = new Set([1, 2, 3, 4, 5, 5, 6]);
console.log("Tamanho do Set de números:", numeros.size);

// ATIVIDADE 6

for (const numero of numeros) {
  console.log("Número no Set:", numero);
}
// ATIVIDADE 7

const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
const setDeDuplicatas = new Set(arrayComDuplicatas);
console.log("Set a partir do array (removendo duplicatas):", setDeDuplicatas);