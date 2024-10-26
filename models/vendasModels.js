const db = require('../dataBase/dataBase');
const data = require('../apis/date')


const vendas = {
    getVendasModel: async () => {
        try {
          
            const resultadoVendas  = await db.query('select * from vendas');
           
            
            if (resultadoVendas.rowCount == 0) {
                throw "Nenhuma venda realizada!"
            }
            return resultadoVendas.rowCount;
        } catch (error) {
            throw error;
        }
    },
    postVendasModel: async (venda_realizada) => {
        try {
            const data_venda = data.dataAtual()                           
            let valores = Object.values(venda_realizada);  
            valores.push(data_venda);     
                   
            
            const resultadoVendas  = await db.query("INSERT INTO vendas(moeda,valor_em_real,quantidade,data_venda)"+
                "VALUES ($1,$2,$3,$4)",valores); 
            
            if (resultadoVendas.rowCount == 0) {
                throw "Falha no cadastro do usuario"
            }
            return resultadoVendas;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = vendas