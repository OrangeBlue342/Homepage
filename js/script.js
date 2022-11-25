function welcome() {
    console.log("Cześć!")
}

welcome;

let przycisk = document.querySelector(".przycisk")
let naglowek = document.querySelector(".naglowek")
let body = document.querySelector(".background")
let header = document.querySelector (".header")

przycisk.addEventListener("click", () => {
    header.remove();
})

let button = document.querySelector(".button")

button.addEventListener("click", () => {
    if(button.innerText === "Włącz tryb ciemny") {
        button.innerText = "Wyłącz tryb ciemny";
   body.classList.toggle("darkbackground"); }
});



