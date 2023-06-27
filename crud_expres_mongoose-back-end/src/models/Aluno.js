import mongoose from "mongoose";

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

export default alunos;
