const express = require("express");
const app = express();

const port = 3000


const cors = require("cors")
app.use(cors())



app.get("/peliculas",(req,res)=>{

let pelis = [

{

id: 1,
nombre : "Deadpool",
descripcion : "Normalmente enfadado",
calificacion : "bueno",
img: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"

},
{

    id: 2,
    nombre : "Spiderman",
    descripcion : "Chico araña",
    calificacion : "bueno",
    img: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    
    },
    {

        id: 3,
        nombre : "Shazam",
        descripcion : "Rarito",
        calificacion : "bueno",
        img: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
        
        },
        {

            id: 4,
            nombre : "Flash",
            descripcion : "Rapidito",
            calificacion : "bueno",
            img: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
            
            },
            {

                id: 5,
                nombre : "Conjuro",
                descripcion : "Que miedo",
                calificacion : "bueno",
                img: "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4"
                
                }



]


res.status(200).send(pelis)

});



app.get("/categorias",(req,res)=>{

    let categorias = [
    {
    nombre:"Comedia"
    
    
    },

    {
    
    nombre :"accion"
    
    },

    {
    
    nombre:"Ciencia ficcion"
    
    },
    {
    
    nombre :"Terror"
    
    },
    {
    
    nombre :"Suspenso"
    
    }
    
    
    
    ]
    
    
    res.status(200).send(categorias)
    
    });


    app.listen(port,()=>{
    
    
    console.log("Aplicacion escuchando en el puerto "+ port)
    
    })