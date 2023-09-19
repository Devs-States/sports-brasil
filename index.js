// Menu hamburguer //
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

// Menu hamburguer //

// overflowTabela //
const table = document.querySelector("#tabelaJogos")
const tableInitialHeight = table.clientHeight
const overflowTable = document.querySelector(".overflowTabela")
const buttonVisibleTable = document.querySelector(".buttonTabelaJogos")

buttonVisibleTable.addEventListener("click", visibleTable)

function visibleTable(e) {
  table.style.maxHeight =
    e.target.dataset.state === "more"
      ? `${table.scrollHeight}px`
      : `${tableInitialHeight}px`

  e.target.setAttribute(
    "data-state",
    e.target.dataset.state === "more" ? "less" : "more"
  )

  e.target.innerHTML =
    e.target.dataset.state === "more" ? "Ver Mais!" : "Ver Menos!"

  overflowTable.setAttribute(
    "data-state",
    e.target.dataset.state === "more" ? "visible" : "hidden"
  )
}
// overflowTabela //
