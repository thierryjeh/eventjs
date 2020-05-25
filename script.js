// Fonctionnalité 1

const footer = document.querySelector("footer");
let x = 1
footer.addEventListener("click", (event) => {
  console.log(`clic n° ${x}`)
  x++
});
