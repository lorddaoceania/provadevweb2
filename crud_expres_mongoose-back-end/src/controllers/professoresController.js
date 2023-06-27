import Professor from "../models/Professor.js";

class ProfessorController {

    static listarProfessores = async (req, res) => {
        try {
            const professores = await Professor.find();
            res.status(200).json(professores);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Cannot fetch Professores" });

        }
    }
    

    static registrarProfessor = async (req,res) =>{
        const professor = await Professor.create(req.body);
        res.status(201).json(professor);
    }
    static atualizarProfessor = async (req,res)=>{
        const id = req.params.id;
        try{
            const professor = await Professor.findByIdAndUpdate(id,req.body,{new: true});
            if(!professor) return res.status(404).json({error:"Professor não encontrado"})
            res.status(200).json(professor);
                
        } catch(error){
            console.error(error);
            res.status(500).json({error:"Falha em atualizar Professor"})
        }

    }
    static deletarProfessor = async (req,res)=>{
        const id = req.params.id;
        try{
            const professor = await Professor.findByIdAndDelete(id,{new:true});
            if(!professor) return res.status(404).json({error:"Professor não encontrado"})
            res.status(201).json({message:"Professor deletado com sucesso"})
        }catch(error){
            console.error(error);
            res.status(500).json({error:"Falha em deletar Professor"})
        }
    }
    static buscarProfessor = async (req,res)=>{
        const id = req.params.id;
        try{
            const professor = await Professor.findById(id);

            if(!professor) return res.status(404).json({error:"Professor não encontrado"})

            res.status(200).json(professor);
            
        }catch(error){
            console.error(error);
            res.status(500).json({error:"Falha em buscar Professor"})
        }  
    }
  
   

}
export default ProfessorController;