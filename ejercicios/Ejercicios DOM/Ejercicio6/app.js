
let ul = document.getElementById("list")



for(let i =0 ; i<=8;i++){

    let list = document.createElement("li")
    list.id= "list"+ i;
    list.style.fontSize ="24px"
ul.appendChild(list)
    list.addEventListener("mouseover", ()=>{



        list.hidden = true;
        
        })
}




