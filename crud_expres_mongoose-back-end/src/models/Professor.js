import mongoose from "mongoose";

const professorSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome:{type: String, required: true},
        curso:{type: String, required: true},
        titulacao:{type:String, required: true},
        ai:{
            es:{
                type:Boolean,
                required:true
            },
            al:{
                type:Boolean,
                required:true
            },
            ds:{
                type:Boolean,
                required:true
            },
            mc:{
                type:Boolean,
                required:true
            }
            
        },
       
    },
    {
        versionKey: false
    }
)
const professores = mongoose.model('professores',professorSchema);

export default professores;