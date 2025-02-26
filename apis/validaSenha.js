


const validaSenha = (password) =>{
    if(password.length >= 6 && password.match(/[A-Z]/g) && password.match(/\W|_/) ){
        return true
    
    }else{
        return false
    }


}
module.exports = {validaSenha}


