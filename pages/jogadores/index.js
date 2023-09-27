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

  if(window.screen.width <= 600){
    if (count > cards.length - 1) {
      count = 0;
    }
  }

  cardConteiner.style.transform = `translateX(${-count * 332}px)`;
}

setInterval(carrossel, 1800);



// Card ==> Popup

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card")

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardClone = card.cloneNode(true);
      const popup = document.createElement("div");
      popup.classList.add("popup");
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
