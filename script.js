// Fonctionnalité 1

const footer = document.querySelector("footer");
let x = 1
footer.addEventListener("click", (event) => {
  console.log(`clic n° ${x}`)
  x++
});



// Fonctionnalité 2

const hamburgerMenu = document.querySelector(".navbar-toggler");
const navbarHeader = document.getElementById("navbarHeader");
hamburgerMenu.addEventListener("click", (event) => {
  navbarHeader.classList.toggle("collapse");
});
