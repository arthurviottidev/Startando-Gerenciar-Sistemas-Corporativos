const listaDeOpcoesDoJogador = document.querySelectorAll(".jogador .opcao");
const listaDeOpcoesDoComputador = document.querySelectorAll(".computador .opcao");

listaDeOpcoesDoJogador.forEach((opcao) => {
    opcao.onclick = () => {
        limparOpcoes(listaDeOpcoesDoJogador);

        opcao.style.opacity = "1";
        opcao.setAttribute("data-selected", true);

        computador();

        const maoJogador = opcao.getAttribute("data-value");
        const maoComputador = computador();

        //console.log(computador());
        resultado(maoJogador, maoComputador);
    };
});


const computador = () => {
    const opcaoAleatoria = Math.floor(Math.random() * listaDeOpcoesDoComputador.length);
    const opcaoSelecionada = listaDeOpcoesDoComputador[opcaoAleatoria];

    limparOpcoes(listaDeOpcoesDoComputador);

    opcaoSelecionada.style.opacity = "1";
    opcaoSelecionada.setAttribute("data-selected", "true");

    return opcaoSelecionada.getAttribute("data-value");
};

const limparOpcoes = (listaDeOpcoes) => {
    listaDeOpcoes.forEach((opcao) => {
        opcao.setAttribute("data-selected", "false");
        opcao.style.opacity = "0.3";
    });
};

const resultado = (maoJogador, maoComputador) => {
    const resultadoJogo = document.querySelector(".resultado_texto");

    if (maoJogador === maoComputador) {
        resultadoJogo.textContent = "Empatou";
    } else if (
        (maoJogador === "pedra" && maoComputador === "papel") ||
        (maoJogador === "papel" && maoComputador === "tesoura") ||
        (maoJogador === "tesoura" && maoComputador === "pedra")
    ) {
        resultadoJogo.textContent = "Você perdeu";
    } else if (
        (maoJogador === "pedra" && maoComputador === "tesoura") ||
        (maoJogador === "papel" && maoComputador === "pedra") ||
        (maoJogador === "tesoura" && maoComputador === "papel")
    ) {
        resultadoJogo.textContent = "Você ganhou";
    };
};