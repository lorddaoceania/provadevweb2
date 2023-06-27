import express from "express";
import alunos from "./alunosRoutes.js";
import professores from "./professoresRoutes.js"


const routes =(app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({message:"backend crudv1"})
    })


    app.use(
        express.json(),
        alunos,
        professores
        
    )
}

export default routes