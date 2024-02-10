const boton = document.getElementById("boton");

boton.style.width="200px"
boton.style.height="200px"
boton.style.marginLeft="45%"
boton.style.borderRadius="75%"

boton.addEventListener('mouseover', ()=>{


texto = boton.innerText;

boton.textContent = texto === "Hover me"? boton.style.backgroundColor="Red" : boton.style.backgroundColor="Gray"

return boton.textContent = texto === "Hover me" ? "Gracias" : "Hover me";
});