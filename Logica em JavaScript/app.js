alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Match.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;
    } else{
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O númeor secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);