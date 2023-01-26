import  * as validacao from './validacao.js'; //importação atual (ESM)

//elementos HTML
const usuario = document.getElementById('iptUsuario');
const erroUsuario = document.getElementById('erroUsuario');

const senha = document.getElementById('iptSenha');

//valores de validação
const caracteresMinimo = 5;
const caracteresMaximo = 24;

//campos estão validados
let usuarioValidado = false;
let senhaValidado = false;

usuario.addEventListener('blur',()=>{ //validação do campo usuário
    if(!validacao.naoVazio(usuario)){
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
    else{
        erroUsuario.innerHtml = " "
        erroUsuario.style.color = 'white';
        usuarioValidado = true;
    }
    console.log(usuarioValidado); //apagar
});

