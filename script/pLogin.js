import  * as validacao from './validacao.js'; //importação atual (ESM)



//elementos HTML
const usuario = document.getElementById('iptUsuario');
const erroUsuario = document.getElementById('erroUsuario');

const senha = document.getElementById('iptSenha');
const erroSenha = document.getElementById('erroSenha');

const logar = document.getElementById('logar');

//valores de validação
const caracteresMinimo = 5;
const caracteresMaximo = 24;

//campos estão validados
let usuarioValidado = false;
let senhaValidado = false;


logar.addEventListener('click', (event)=>{ // após clicar verifica se os campos estão validados

   
    if(!validacao.naoVazio(usuario)){ //verifica validação do formulário
        erroUsuario.innerText = "Preencha o campo de usuário!"
        erroUsuario.style.color = 'red';
        usuarioValidado = false;       
    }
    else if(!validacao.minimoCaractere(usuario, caracteresMinimo)){
        erroUsuario.innerText = `O valor mínimo de caractere é ${caracteresMinimo}`
        erroUsuario.style.color = 'red';
        usuarioValidado = false;
    }
    else if(!validacao.maximoCaractere(usuario, caracteresMaximo)){
        erroUsuario.innerText = `O valor máximo de caractere é ${caracteresMaximo}`
        erroUsuario.style.color = 'red';
        usuarioValidado = false;
    }
    else if(validacao.temEspaco(usuario)){
        erroUsuario.innerText = `Há espaço em branco no campo de usuário`
        erroUsuario.style.color = 'red';
        usuarioValidado = false;
    }
    else{
        erroUsuario.innerText = "I ";        
        erroUsuario.style.color = 'white';
        usuarioValidado = true;
    }


    if(!validacao.naoVazio(senha)){ // validação de senha
        erroSenha.innerText = "Preencha o campo de senha!"
        erroSenha.style.color = 'red';
        senhaValidado = false;       
    }
    else if(!validacao.minimoCaractere(senha, caracteresMinimo)){
        erroSenha.innerText = `O valor mínimo de caractere é ${caracteresMinimo}`
        erroSenha.style.color = 'red';
        senhaValidado = false;
    }
    else if(!validacao.maximoCaractere(senha, caracteresMaximo)){
        erroSenha.innerText = `O valor máximo de caractere é ${caracteresMaximo}`
        erroSenha.style.color = 'red';
        senhaValidado = false;
    }
    else if(validacao.temEspaco(senha)){
        erroSenha.innerText = `Há espaço em branco no campo de senha!`
        erroSenha.style.color = 'red';
        usuarioValidado = false;
    }
    else{
        erroSenha.innerText = "I ";
        erroSenha.style.color = 'white';
        senhaValidado = true;
    }  
    
    if(usuarioValidado === false || senhaValidado === false )
    {
        event.preventDefault();//neutralizar as mensagem de erro padrão
    } 


});

usuario.addEventListener('click', ()=>{ //caso apareça a mesagem de erro ao clicar no campo para conserta-la a mensagem de erro é apagada
    erroUsuario.style.color = 'transparent';
    erroUsuario.innerText = 'I';
});

senha.addEventListener('click', ()=>{//caso apareça a mesagem de erro ao clicar no campo para conserta-la a mensagem de erro é apagada
    erroSenha.style.color = 'transparent';
    erroSenha.innerText = 'I';
});




