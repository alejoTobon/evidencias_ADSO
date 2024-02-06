
let ul = document.getElementById("list")



for(let i =0 ; i<=8;i++){

    let list = document.createElement("li")
    list.id= "list"+ i;
    list.innerText =".";
    list.style.display = "inline-block";
list.className ="li"
list.style.fontSize= "250px"
ul.appendChild(list)
    list.addEventListener("mouseover", ()=>{


      list.innerHTML = "";
       
        
        })
}




