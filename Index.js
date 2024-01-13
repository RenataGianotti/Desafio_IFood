// Define o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = "Arlequina";
let xpDoHeroi = 1250; // Você pode mudar isso para outros resultados

// Utilize uma estrutura de decisão para determinar o nível
var nivelDoHeroi;

if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Exiba a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelDoHeroi);
