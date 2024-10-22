
const dataAtual = () => {
  const opcoes = {
    timeZone: 'America/Sao_Paulo'    
    
  };
   let dataCompra = new Date().toLocaleString("en-US",opcoes);

   return dataCompra
 
   
   
}
const horAtual = () =>{
    const dataHora = new Date();
    const opcoes = {
      timeZone: 'America/Sao_Paulo',      
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const dataHoraBrasil = dataHora.toLocaleString('pt-BR', opcoes);
    return dataHoraBrasil
}


module.exports = {dataAtual,horAtual}

