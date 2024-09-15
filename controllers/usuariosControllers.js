const usuarios = require('../models/usuariosModels');

const getUsuarios = async (req, res) => {
    try {

        const todosUsuarios = await usuarios.getUsuarioModel();
        res.status(200).json(todosUsuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}

module.exports = [getUsuarios]