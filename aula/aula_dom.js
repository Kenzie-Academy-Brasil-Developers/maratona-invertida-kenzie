//DOCUMENT OBJECT MODEL

let p = document.getElementById("demo")
// console.log(p)
let churros = document.getElementsByClassName("churros")[0]
// console.log(churros)

let choco = document.querySelector("#cachorrinho")
// console.log(choco)

let body = document.querySelector("body")

const button = document.createElement("button")
button.classList.add("button_aula")
button.innerText = "Botão"
body.appendChild(button)

button.style.backgroundColor = "pink"

button.addEventListener("click", function() {
    button.innerText = "Clicado"
})

button.addEventListener("mouseenter", function() {
    button.innerText = "Mouse Entrou"
})

button.addEventListener("mouseout", function() {
    button.innerText = "Mouse saiu"
})