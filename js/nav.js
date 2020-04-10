/***********************************************/
/* This file app.js was written by Shaun Gedye */
/***********************************************/

/* JavaScript function to control the navigation */
const body = document.getElementById("body")
const logo = document.getElementById("optica-logo")
const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("nav-links")
const navItems = document.querySelectorAll("#nav-links li")
const links = document.getElementsByClassName("link")

function navClicked() {
  body.classList.toggle("no-scroll")
  navLinks.classList.toggle("open")
  navItems.forEach(item => item.classList.toggle("fade"))
  hamburger.classList.toggle("menu-open")
  for (const slice of hamburger.children) {
    slice.classList.toggle("menu-open")
  }
}

logo.addEventListener("click", () => {
  if (navLinks.classList.contains("open")) {
    navClicked()
  }
  body.classList.remove("no-scroll")
})

hamburger.addEventListener("click", () => navClicked())

for (const link of links) {
  link.addEventListener("click", () => {
    navClicked()
    body.classList.remove("no-scroll")
  })
}