let setaEsq = document.querySelector('#setaEsq');
let setaDir = document.querySelector('#setaDir');
let conteinerCards = document.querySelector('.conteudo');
let posicaoCards = 0;

setaEsq.onclick = () => {
    // Reduza a posição dos cards ao clicar na seta esquerda
    posicaoCards -= 330;
    // Verifique se a posição dos cards ultrapassa o limite direito
    if (posicaoCards > 0) {
        posicaoCards = 0;
    }
    // Aplique a transformação com base na posição atual
    conteinerCards.style.transform = `translateX(${posicaoCards}px)`;
}

setaDir.onclick = () => {
    // Aumente a posição dos cards ao clicar na seta direita
    posicaoCards += 330;
    // Verifique se a posição dos cards ultrapassa o limite esquerdo
    if (posicaoCards < 0) {
        posicaoCards = 0;
    }
    // Aplique a transformação com base na posição atual
    conteinerCards.style.transform = `translateX(${posicaoCards}px)`;
}
