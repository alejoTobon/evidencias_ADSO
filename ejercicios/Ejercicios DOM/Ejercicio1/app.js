const boton = document.getElementById("boton");

boton.style.width="200px"
boton.style.height="200px"
boton.style.marginLeft="45%"


boton.addEventListener('click', ()=>{


texto = boton.innerText;

boton.textContent = texto === "ON"? boton.style.backgroundColor="Red" : boton.style.backgroundColor="Green"

return boton.textContent = texto === "ON" ? "OFF" : "ON";
});