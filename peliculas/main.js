

fetch("http://localhost:3000/peliculas")
.then((response)=>{
    return response.json()
})
.then((response)=>{
response.map((value)=>{
let tabla = document.getElementById('table')
let fila = `<tr> <td>${value.id} </td> <td>${value.nombre} </td><td>${value.descripcion} </td>
<td> ${value.calificacion}</td> <td><img width="200px" src="${value.img}" alt="" srcset="${value.img}"></td>  </tr>`
tabla.innerHTML += fila

})
})


fetch("http://localhost:3000/categorias")
.then((response)=>{
    return response.json()
})
.then((response)=>{
response.map((value)=>{
    let tabla = document.getElementById('tabla2')
let fila = `<tr> <td>${value.nombre} </tr>`
tabla.innerHTML += fila
})



})