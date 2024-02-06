let tabla = document.getElementById("tabla");


fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{

return res.json();

})
.then((res)=>{
  

res.forEach(user => {
   
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td>
    <td>${user.address.street}</td><td>${user.address.suite}</td><td>${user.address.city}</td>
    <td>${user.address.zipcode}</td><td>${user.address.geo.lat}</td><td>${user.address.geo.lng}</td><td>${user.phone}</td><td>${user.website}
    <td>${user.company.name}</td><td>${user.company.catchPhrase}</td><td>${user.company.bs}</td>`;

    tabla.appendChild(fila);
    
});

})