const clr = document.querySelector(".clr")
let color = "blue"
const valueElement = document.querySelector(".value")
valueElement.textContent = color
clr.addEventListener("mouseover", () => {
    
    valueElement.textContent = "green"
})