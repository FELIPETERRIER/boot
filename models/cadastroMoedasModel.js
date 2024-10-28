const db = require('../dataBase/dataBase');



const moedas = {
    getMoedasModel: async () => {
        try {
            

            const moedasCadastradas  = await db.query('select * from moedas');
           
            
            if (moedasCadastradas.rowCount == 0) {
                throw "Nenhuma moeda cadastrada!"
            }
            return moedasCadastradas.rows;
        } catch (error) {
            throw error;
        }
    },
    postMoedasModel: async (moeda_cadastrada) => {
        try {
                                 
            let valores = Object.values(moeda_cadastrada);     
                   
            
            const cadastroMoedas  = await db.query("INSERT INTO moedas(moeda,abreviacao)"+
                "VALUES ($1,$2)",valores); 
            
            if (cadastroMoedas.rowCount == 0) {
                throw "Falha no cadastro da moeda!"
            }
            return cadastroMoedas;
        } catch (error) {
            throw error;
        }
    },
    putMoedasModel: async (id) => {
        try {
                                 
            let valores = Object.values(id);     
                   
            
            const atualizaMoedas  = await db.query("UPDATE moedas set(moeda,abreviacao,id_moeda)=($1,$2,$3) where id_moeda = $3",valores); 
            console.log(valores)
            if (atualizaMoedas.rowCount == 0) {
                throw "Falha no cadastro da moeda!"
            }
            return atualizaMoedas;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = moedas