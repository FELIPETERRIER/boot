let senha = 'f3liPe';


const validaSenha = () =>{
    if(senha.length >= 6 && senha.match(/[A-Z]/g) && senha.match(/\W|_/) ){
    
    console.log(senha)
    }else{
        console.log('senha invalida')
    }


}
validaSenha()


