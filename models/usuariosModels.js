const db = require('../dataBase/dataBase');


const usuarios = {
    getUsuarioModel: async () => {
        try {
            const resultadoUsuario  = await db.query('select * from usuarios');  
            
            if (resultadoUsuario.rowCount == 0) {
                throw "Nenhum usuario encontrado"
            }
            return resultadoUsuario.rowCount;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = usuarios