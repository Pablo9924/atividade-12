let vida = 100;
let forca = 10;
let recurso = 50;

function start() {
    console.log("A aventura de Valente começa!");
    console.log(`VIDA: ${vida}, FORÇA: ${forca}, RECURSO: ${recurso}`);
    rodada();
}

function rodada() {
    if (vida > 0) {
        console.log("Você está prestes a enfrentar um desafio!");
        let acao = prompt("Escolha uma ação: 1. Atacar 2. Usar Recurso 3. Fugir");

        switch (acao) {
            case '1':
                atacar();
                break;
            case '2':
                usarRecurso();
                break;
            case '3':
                fugir();
                break;
            default:
                console.log("Ação inválida! Tente novamente.");
                rodada();
                break;
        }
    } else {
        console.log("Você foi derrotado. Fim de jogo!");
    }
}

function atacar() {
    console.log("Valente ataca!");
    // lógica para ataque
    vida -= 10; // exemplo de dano
    console.log(`VIDA: ${vida}`);
    rodada();
}

function usarRecurso() {
    console.log("Valente usa um recurso!");
    // lógica para usar recurso
    recurso -= 10; // exemplo de uso
    console.log(`RECURSO: ${recurso}`);
    rodada();
}

function fugir() {
    console.log("Valente fugiu do combate!");
    rodada();
}
