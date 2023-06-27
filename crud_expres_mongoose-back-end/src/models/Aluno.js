//importamos o mongoose para termos acesso ao mongoDB pela aplicação
import mongoose from "mongoose";

//cria-se um modelo de alunos para ser usado pelo sistema
const alunoSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome: {type: String, required: true},
        curso:{type: String, required: true},
        ano:{type: Number, required: true},
        ira:{type: Number, required: true}

    },
    {
        versionKey: false
    }
)

const alunos = mongoose.model('alunos',alunoSchema);
//exportamos então o modelo criado 
export default alunos;
