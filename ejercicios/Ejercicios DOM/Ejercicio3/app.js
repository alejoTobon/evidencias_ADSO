const boton = document.getElementById("boton");

boton.style.width="200px"
boton.style.height="200px"
boton.style.marginLeft="45%"
boton.style.borderRadius="75%"


let cambiarColor = (Event) =>{


    texto = boton.innerText;

    boton.textContent = Event.type === "mouseover"? boton.style.backgroundColor="Orange" : boton.style.backgroundColor="Black",boton.style.color="white"

    return boton.textContent = texto === "Hover me" ? "Gracias" : "Hover me";


}



boton.addEventListener('mouseover', cambiarColor
);


boton.addEventListener('mouseout',cambiarColor);