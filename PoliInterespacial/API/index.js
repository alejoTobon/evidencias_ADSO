const express = require("express");

const cors  = require("cors");

const test = require ("./modules/bdata")

const app = express();

app.use(cors());
app.use(express.json())

const port = 3000;


//rutas de la app

//microservicio people

app.use("/",require("./modules/people"));




app.listen(port,()=>{


console.log("App on in port: " + port);

});



