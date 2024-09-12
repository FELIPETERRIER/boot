const getRelacao =   async (req, res) => {
    const relacaoFuncao = {...req.body}
    try {
        const result = await pesMR.savePessoaModel(pessoa);

        res.status(201).json(
            {
                dados: result
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });    }
}