postLoginUsuarioModel: async (usuario) => {
    try {
       
        const loginUsuario = Object.values(usuario);
      
        const loginOkUsuario  = await db.query('INSERT into usuarios (nome,password) VALUES($1,$2)',loginUsuario);
       
       
        if (loginOkUsuario.rowCount == 0) {
            throw "Falha no cadastro do usuario"
        }
        return loginOkUsuario.rows;
    } catch (error) {
        throw error;
    }
}
module.exports = postLoginUsuarioModel

