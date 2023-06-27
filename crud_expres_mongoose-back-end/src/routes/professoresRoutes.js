import express from "express";
import ProfessorController from "../controllers/professoresController.js";



const router = express.Router();

router
    .get("/professores/list",ProfessorController.listarProfessores)
    .get("/professores/list/:id",ProfessorController.buscarProfessor)
    .post("/professores/register",ProfessorController.registrarProfessor)
    .put("/professores/update/:id",ProfessorController.atualizarProfessor)
    .delete("/professores/delete/:id",ProfessorController.deletarProfessor)



export default router;    