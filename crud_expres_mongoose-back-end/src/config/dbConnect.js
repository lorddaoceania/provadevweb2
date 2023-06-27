import mongoose from "mongoose";

mongoose.connect("mongodb+srv://airton:248625@crud.kto0w7l.mongodb.net/crud-express")

let db = mongoose.connection;

export default db;