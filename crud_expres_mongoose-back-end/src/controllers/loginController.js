import Login from "../models/Login";


class LoginController{
    static logar = async (req,res) =>{
        const { username, password } = req.body;

  // Encontra no banco de dados o usuario
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  // Compara a senha com a do banco de dados
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
  // Retorna verdadeiro caso de certo
  res.json(true);

    }
    static listarLogin = async (req, res) => {
        try {
            const login = await Login.find();
            res.status(200).json(login);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Cannot fetch Login" });

        }
    }


}

export default LoginController;