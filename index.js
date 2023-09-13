const buttonMenuMobile = document.getElementById("buttonMenu")

function toggleMenu() {
  const navHeaderDesktop = document.getElementById("navHeader")
  navHeaderDesktop.classList.toggle("active")
}

buttonMenuMobile.addEventListener("click", toggleMenu)
