// Botão mobile

const buttonMenuMobile = document.getElementById("buttonMenu")

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault()
  const navHeaderDesktop = document.getElementById("navHeader")
  navHeaderDesktop.classList.toggle("active")
  const active = navHeaderDesktop.classList.contains("active")
  event.currentTarget.setAttribute("aria-expanded", active)
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu")
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu")
  }
}

buttonMenuMobile.addEventListener("click", toggleMenu)
buttonMenuMobile.addEventListener("touchstart", toggleMenu)


// Carrossel de cards

const cardConteiner = document.querySelector('.carrosselBox');
const cards = document.querySelectorAll('.carrosselBox .card');

let count = 0;

function carrossel() {
  count++;

  if (count > cards.length - 3) {
    count = 0;
  }

  cardConteiner.style.transform = `translateX(${-count * 332}px)`;
}

setInterval(carrossel, 1800);


// zoom in cards 

const elementoPai = document.querySelector('.carrosselBox');
const intervaloDeTempo = 1800; // Tempo em milissegundos (2 segundos, por exemplo)
let indiceAtual = 1;

function aplicarClasse() {
  // Remova a classe de todos os elementos filhos
  for (let i = 1; i <= 24; i++) {
    elementoPai.children[i].classList.remove('cardGrow');
  }

  // Adicione a classe ao elemento atual
  elementoPai.children[indiceAtual].classList.add('cardGrow');

  // Avance para o próximo elemento
  indiceAtual++;

  // Se chegarmos ao índice 25, volte ao índice 1
  if (indiceAtual > 24) {
    indiceAtual = 1;
  }
}

// Chame a função inicialmente
aplicarClasse();

// Configurar um intervalo de tempo para chamar a função repetidamente
setInterval(aplicarClasse, intervaloDeTempo);

// Card ==> Popup

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card")

  cards.forEach((card) => {
    
    card.addEventListener("click", () => {
      card.classList.add('cardGrow');
      const cardClone = card.cloneNode(true);
      const popup = document.createElement("div");
      popup.classList.add("popup"); 
      const jogadorNomeClone = cardClone.querySelector(".JogadorNome");
      jogadorNomeClone.style.fontSize = "1.14rem";
      popup.appendChild(cardClone);
      document.body.appendChild(popup);
      
      // Centralizar o popup
      popup.classList.add("popup-opened");
      
      // Fechar o popup ao clicar fora dele
      popup.addEventListener("click", (event) => {
        if (event.target === popup) {
          popup.classList.remove("popup-opened");
          setTimeout(() => {
            popup.style.display = "none";
          }, 300);
        }
      });
    });
  });
});
