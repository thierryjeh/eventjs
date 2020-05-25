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
});


// Fonctionnalité 5

const navbar = document.querySelector("header");

navbar.addEventListener("dblclick", (event) => {
  if (document.querySelector("link").disabled === false) {
    document.querySelector("link").disabled = true ;
  }
  else {
    document.querySelector("link").disabled = false ;
  }
});

// Fonctionnalité 6

const view = document.querySelectorAll(".btn-success");
const img = document.querySelectorAll(".card-img-top");
const text = document.querySelectorAll(".card-text");

for (let i = 0; i < view.length; i++) {
  view[i].addEventListener("mouseover", (event) => {
    if (text[i].style.display !== "none") {
      img[i].style.width = "20%"
      text[i].style.display = "none"
    } else {
      img[i].style.width = "100%"
      text[i].style.display = ""
    }
  })
};


// Fonctionnalité 7

const card = document.querySelector(".album > .container > .row");
const btnGrey = document.querySelector(".btn.btn-secondary.my-2");

btnGrey.addEventListener("click", (event) => {
  card.insertBefore(card.lastElementChild, card.firstElementChild);
})


