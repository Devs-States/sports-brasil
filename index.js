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

// video carrossel / popup //

const controls = document.querySelectorAll(".control")
let currentItem = 0
const items = document.querySelectorAll(".item")
const maxItems = items.length

controls.forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault()
    event.stopPropagation()

    const isLeft = control.classList.contains("prev-button")

    if (isLeft) {
      currentItem -= 1
    } else {
      currentItem += 1
    }

    if (currentItem >= maxItems) {
      currentItem = 0
    }
    if (currentItem < 0) {
      currentItem = maxItems - 1
    }

    items.forEach((item) => item.classList.remove("current-item"))
    items[currentItem].scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    })
    items.forEach((item) => item.classList.remove("current-item"))
    items[currentItem].classList.add("current-item")
  })
})

function openPopup(videoID) {
  const popup = document.getElementById(videoID)
  popup.style.display = "block"

  popup.classList.remove("item", "current-item")
  setTimeout(() => {
    popup.style.opacity = "1"
  }, 200)
}
function closeVideoPopup(videoID) {
  const popup = document.getElementById(videoID)
  popup.style.opacity = "0"

  setTimeout(() => {
    popup.style.display = "none"
  }, 300)
}

const images = document.querySelectorAll(".image-carrossel")

images.forEach((image) => {
  image.addEventListener("click", () => {
    const videoID = image.dataset.video

    openPopup(videoID)
  })
})

// video popup //
