import mongoose from "mongoose";
const loginSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
  });

const login = mongoose.model('login',loginSchema);

export default login;