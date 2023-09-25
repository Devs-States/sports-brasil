// butão mobile

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


// carrossel de cards

const cardConteiner = document.querySelector('.carrosselBox');
const cards = document.querySelectorAll('.carrosselBox .card');

let count = 0;

function carrossel(){
    count++;
    
    if(count > cards.length - 3){
        count = 0;
    }

    cardConteiner.style.transform = `translateX(${-count * 470}px)`;
}

setInterval(carrossel, 1800);