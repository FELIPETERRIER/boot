const usuarios = require('../models/usuariosModels');
//const cpf1 = require('../models/usuariosModels');
const cpfOK = require('../apis/cpfValidado')



const getUsuarios = async (req, res) => {
    try {
        const usuario= {...req.body};       
        
        const todosUsuarios = await usuarios.getUsuarioModel(usuario);
        res.status(200).json(todosUsuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const postUsuarios = async (req, res) => {
    const usuario= {...req.body}    
    try {
       
      const cpf1 =usuario.cpf      
      const tata =cpfOK.validaCpf(cpf1);
      console.log(tata)
       
            
            
        
        const postUsuarios = await usuarios.postUsuarioModel(usuario);      
        res.status(200).json(postUsuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}

module.exports = {getUsuarios,postUsuarios}