import Aluno from "../models/Aluno.js";

class AlunoController {

    static listarAlunos = async (req, res) => {
        try {
            const alunos = await Aluno.find();
            res.status(200).json(alunos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Cannot fetch alunos" });

        }
    }
    

    static registrarAluno = async (req,res) =>{
        const aluno = await Aluno.create(req.body);
        res.status(201).json(aluno);
    }
    static atualizarAluno = async (req,res)=>{
        const id = req.params.id;
        try{
            const aluno = await Aluno.findByIdAndUpdate(id,req.body,{new: true});
            if(!aluno) return res.status(404).json({error:"Aluno não encontrado"})
            res.status(200).json(aluno);
                
        } catch(error){
            console.error(error);
            res.status(500).json({error:"Falha em atualizar aluno"})
        }

    }
    static deletarAluno = async (req,res)=>{
        const id = req.params.id;
        try{
            const aluno = await Aluno.findByIdAndDelete(id,{new:true});
            if(!aluno) return res.status(404).json({error:"Aluno não encontrado"})
            res.status(201).json({message:"Aluno deletado com sucesso"})
        }catch(error){
            console.error(error);
            res.status(500).json({error:"Falha em deletar aluno"})
        }
    }
    static buscarAluno = async (req,res)=>{
        const id = req.params.id;
        try{
            const aluno = await Aluno.findById(id);

            if(!aluno) return res.status(404).json({error:"Aluno não encontrado"})

            res.status(200).json(aluno);
            
        }catch(error){
            console.error(error);
            res.status(500).json({error:"Falha em buscar Aluno"})
        }  
    }
  
   

}
export default AlunoController;