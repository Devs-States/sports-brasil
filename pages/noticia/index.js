//header
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
//header

// timer noticia
function calcularTempoDecorrido() {
  const temposDecorridos = document.querySelectorAll(".timer-noticia")

  temposDecorridos.forEach((tempoDecorridoElemnt) => {
    const dataPostagem = new Date("2023-10-18T18:23:00")

    setInterval(() => {
      const agora = new Date()
      const diferenca = agora - dataPostagem
      const segundosDecorridos = Math.floor(diferenca / 1000)
      const minutosDecorridos = Math.floor(segundosDecorridos / 60)
      const horasDecorridas = Math.floor(minutosDecorridos / 60)
      const diasDecorridos = Math.floor(horasDecorridas / 24)

      const tempoDecorrido =
        diasDecorridos > 0
          ? `${diasDecorridos} dia(s) atrás`
          : horasDecorridas > 0
          ? `${horasDecorridas} hora(s) atrás`
          : minutosDecorridos > 0
          ? `${minutosDecorridos} minuto(s) atrás`
          : `${segundosDecorridos} segundo(s) atrás`

      tempoDecorridoElemnt.textContent = tempoDecorrido
    }, 1000)
  })
}
calcularTempoDecorrido()
// timer noticia
