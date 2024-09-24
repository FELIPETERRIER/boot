const db = require('../dataBase/dataBase');


const vendas = {
    getVendasModel: async () => {
        try {
            const resultadoVendas  = await db.query('select * from vendas');
           
            
            if (resultadoVendas.rowCount == 0) {
                throw "Nenhuma compra realizada!"
            }
            return resultadoVendas.rowCount;
        } catch (error) {
            throw error;
        }
    },
    postVendasModel: async (vendas,nome) => {
        try {
            const vendasUsuario = Object.values(vendas)
            
            const resultadoVendas  = await db.query('INSERT into usuarios (nome) VALUES($1)returning ID  ',vendasUsuario);  
            
            if (resultadoVendas.rowCount == 0) {
                throw "Falha no cadastro do usuario"
            }
            return resultadoVendas.rows;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = vendas