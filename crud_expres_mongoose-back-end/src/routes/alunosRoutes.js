import express from "express";
import AlunoController from "../controllers/alunosController.js";



const router = express.Router();
//criamos uma rota para acessar as funções que serão usadas pelo aplicação 
router
    .get("/alunos/list",AlunoController.listarAlunos)
    .get("/alunos/list/:id",AlunoController.buscarAluno)
    .post("/alunos/register",AlunoController.registrarAluno)
    .put("/alunos/update/:id",AlunoController.atualizarAluno)
    .delete("/alunos/delete/:id",AlunoController.deletarAluno)



export default router;    