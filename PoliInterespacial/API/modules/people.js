/*Microservicio para crear el CRUD de las personas de la galaxia */

const express = require("express");
const cnx = require("./bdata");

const people = express.Router();

/* Desarrollo de CRUD */


//Consultar

people.get("/people/Listin",(req,res)=>{

cnx.query("SELECT * FROM people ORDER BY lastname",(error,datos)=>{


try{


res.status(200).send(datos);
}catch(error){

console.log(error);
// res.status(400).send({
// id: error.id,
// mensaje: error.mensaje
// })
}


 
});
})



people.get("/people/Listin/:id",(req,res)=>{

    let id = req.params.id;

    cnx.query("SELECT * FROM people WHERE id = "+id, (error,datos)=>{
    
        // cnx.query("SELECT * FROM people WHERE id = ?",id, (error,datos)=>{

    try{
    
        if(datos == ""){
            res.status(200).send("Don't exist");
        }else{
            res.status(200).send(datos);
        }
    
  
    }catch(error){
    
    console.log(error);
    // res.status(400).send({
    // id: error.id,
    // mensaje: error.mensaje
    // })
    }
    
     
    });
    })
    

    people.delete("/people/deleteid/:id",(req,res)=>{

        let id = req.params.id;
    
        cnx.query("DELETE FROM people WHERE id = "+id, (error,datos)=>{
        
            // cnx.query("SELECT * FROM people WHERE id = ?",id, (error,datos)=>{
    
        try{
        
        
        res.status(200).send("Success delete");
        }catch(error){
        
        console.log(error);
        // res.status(400).send({
        // id: error.id,
        // mensaje: error.mensaje
        // })
        }
        
         
        });
        })
        
    

        people.post("/people/insert",(req,res)=>{

    let frmData = req.body;

        
            cnx.query("INSERT INTO people SET ?",frmData, (error,datos)=>{
            
                // cnx.query("SELECT * FROM people WHERE id = ?",id, (error,datos)=>{
        
            try{
            
            
            res.status(200).send("Success insert");
            }catch(error){
            
            console.log(error);
            // res.status(400).send({
            // id: error.id,
            // mensaje: error.mensaje
            // })
            }
            
             
            });
            })


            people.put("/people/update/:id",(req,res)=>{

                let id = req.params.id;
                let frmData = {
                
                  
                    name: req.body.name,
                    lastname: req.body.lastname,
                    nickname: req.body.nickname,
                    email: req.body.email,
                    type: req.body.type
                
                
                
                }
                
                        
                            cnx.query("UPDATE people SET ? WHERE id= ?",[frmData,id], (error,datos)=>{
                            
                                // cnx.query("SELECT * FROM people WHERE id = ?",id, (error,datos)=>{
                        
                            try{
                            
                            
                            res.status(200).send("Success update");
                            }catch(error){
                            
                            console.log(error);
                            // res.status(400).send({
                            // id: error.id,
                            // mensaje: error.mensaje
                            // })
                            }
                            
                             
                            });
                            })
                            
            



module.exports = people;
