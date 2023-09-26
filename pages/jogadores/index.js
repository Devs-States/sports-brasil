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

function carrossel(){
    count++;
    
    if(count > cards.length - 4){
        count = 0;
    }

    cardConteiner.style.transform = `translateX(${-count * 332}px)`;
}

setInterval(carrossel, 1800);


// Card ==> Popup

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const popup = document.createElement("div");
  popup.classList.add("popup");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardText = card.textContent;
      const popupContent = document.createElement("div");
      popupContent.classList.add("popup-content");
      popupContent.textContent = cardText;
      popup.innerHTML = "";
      popup.appendChild(popupContent);
      document.body.appendChild(popup);
      popup.style.display = "flex";

      // Fechar o popup ao clicar fora dele
      popup.addEventListener("click", (event) => {
        if (event.target === popup) {
          popup.style.display = "none";
        }
      });
    });
  });
});
