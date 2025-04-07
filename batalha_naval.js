function TabuleiroNaval() {
    var tabuleiro = [];
    for (let a = 0; a < 5; a++) {
        tabuleiro[a] = [];
        for (let b = 0; b < 5; b++) {
            tabuleiro[a][b] = false;
        }
    }
    return tabuleiro;
}


var tabuleiro = TabuleiroNaval();
for (let n = 0; n < 5; n++) {
    let posX = Math.floor(Math.random() * 5);
    let posY = Math.floor(Math.random() * 5);
    if (!tabuleiro[posX][posY]) {
        tabuleiro[posX][posY] = true; 
    } else {
        n--; 
    }
}

console.log("Tabuleiro Gerado (com barcos):");
console.log(tabuleiro);

var prompt = require('prompt-sync')();

function Atirar() {
    let tirosRestantes = 5;
    let acertos = 0;

    console.log("Você tem 5 tiros:\n");

    while (tirosRestantes > 0) {
        console.log(`Tiros restantes: ${tirosRestantes}`);
        let linha = parseInt(prompt("Em qual linha você deseja atirar? (0-4) \n"));
        let coluna = parseInt(prompt("Em qual coluna você deseja atirar? (0-4) \n"));

        if (linha < 0 || linha > 4 || coluna < 0 || coluna > 4) {
            console.log("Entrada inválida! Escolha números entre 0 e 4.");
            continue; 
        }

        if (tabuleiro[linha][coluna] === true) {
            console.log("Você acertou um barco!");
            acertos++;
            tabuleiro[linha][coluna] = false; 
        } else {
            console.log("Seu tiro foi na água.");
        }

        tirosRestantes--;
    }


    if (acertos > 0) {
        console.log(`Fim de jogo! Você acertou ${acertos} barcos.`);
    } else {
        console.log("Fim de jogo! Você não acertou nenhum barco.");
    }
}

Atirar();

