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

// animação

const intersectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    entry.target.classList.toggle("show", entry.isIntersecting)
  })
})

const elements = document.querySelectorAll(".animate")
elements.forEach((el) => intersectObserver.observe(el))
