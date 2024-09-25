const db = require('../dataBase/dataBase');


const vendas = {
    getVendasModel: async (vendas) => {
        try {
            const resultadoVendas  = await db.query('select * from vendas '+vendas);
           
            
            if (resultadoVendas.rowCount == 0) {
                throw "Nenhuma venda realizada!"
            }
            return resultadoVendas.rowCount;
        } catch (error) {
            throw error;
        }
    },
    /*postVendasModel: async (vendas,nome) => {
        try {
            const vendasUsuario = Object.values(vendas)
            
            const resultadoVendas  = await db.query('INSERT into vendas (moeda,valor_em_real,quantidade) VALUES($1,$2,$3)returning ID  ',vendasUsuario);  
            
            if (resultadoVendas.rowCount == 0) {
                throw "Falha na venda"
            }
            return resultadoVendas.rows;
        } catch (error) {
            throw error;
        }
    }*/
    
}

module.exports = vendas