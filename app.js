let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    
}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }

        tentativas++;
        limparCampo()

    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input') ;
    chute.value = '';     
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);


    console.log(numeroSecreto);

}
console.log(numeroSecreto);




// let peso = 60;
// let altura = 1.70;


// function calculoDeIndice(p , a) {
//     return p / (a * a);
// }

// console.log(calculoDeIndice(peso, altura))






// function mostrarTabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       console.log(`${numero} x ${i} = ${resultado}`);
//     }
//   }

//   mostrarTabuada(7)









// let nota1 = 3;
// let nota2 = 6;
// let nota3 = 3;
// let nota4 = 5;


// let resultMedia = calcularMedia(nota1, nota2, nota3,nota4);
// console.log(resultMedia, verificarAprovacao(resultMedia));



// function calcularMedia(a, b, c, d) {
//     return (a + b + c + d ) / 4;
// }


// function verificarAprovacao(media) {
//     return media >= 5 ? 'Aprovado' : 'Reprovado'
// }




// let numeroDobrado = exibirOlarMundo('5');
// function exibirOlarMundo(numero) {
//     return numero * 2
// }

// console.log(numeroDobrado);

// let mediaNumber = media('2', '3', '10');
// function media(numberOne, numberTwo, number03) {
//     return (Number(numberOne) + Number(numberTwo) + Number(number03)) / 3;
// }
// console.log(mediaNumber)

// let resultNumber = numberMaior(5, 10);
// function numberMaior(numberOne, numberTow) {
//    return numberOne > numberTow ? numberOne:numberTow;
// }
// console.log(resultNumber);



// function multinumber(number) {
//     return number * number;
// }
//  console.log(multinumber(5));

