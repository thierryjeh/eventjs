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




// Fonctionnalité 3 :

let btnFirstCard = document.querySelector('.card .btn-outline-secondary');
let textFirstCard = document.querySelector('.card-text');

btnFirstCard.addEventListener('click', function() {
  textFirstCard.style.color = 'red';
});

// Fonctionnalité 4 :

let btnSecondCard = document.querySelectorAll('.card')[1].querySelector('.btn-outline-secondary');
let textSecondCard = document.querySelectorAll('.card')[1].querySelector('.card-text');

btnSecondCard.addEventListener('click', function() {
  if (textSecondCard.style.color === 'green') {
    textSecondCard.style.color = 'black';
  } else {
    textSecondCard.style.color = 'green';
  }
})