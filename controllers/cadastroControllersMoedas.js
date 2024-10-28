const moedas = require('../models/cadastroMoedasModel');


const getCadastroMoedas = async (req, res) => {
    try {

        const todasMoedas = await moedas.getMoedasModel();
        res.status(200).json(todasMoedas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem:error
        });

    }
}
const postCadastroMoedas = async (req, res) => {
    const moeda_cadastrada ={...req.body}
        
    try {

        const postMoedas = await moedas.postMoedasModel(moeda_cadastrada);
        res.status(200).json(postMoedas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const putCadastroMoedas = async (req, res) => {
        const update_moedas ={...req.body}
            
        try {
    
            const putMoedas = await moedas.putMoedasModel(update_moedas);
            res.status(200).json(putMoedas);
    
        } catch (error) {
            console.log(error);
            res.status(500).json({
                codigoErro: 500,
                mensagem: error
            });
    
        }
}


module.exports = {getCadastroMoedas,postCadastroMoedas,putCadastroMoedas}