


const validaSenha = (senha) =>{
    if(senha.length >= 6 && senha.match(/[A-Z]/g) && senha.match(/\W|_/) ){
        return true
    
    }else{
        return false
    }


}
module.exports = {validaSenha}


