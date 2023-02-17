import * as validacao from "./validacaoCadastro.js";

const formularioCampos = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-loginFormulario]");
const camposValidados ={
    "iptUsuario" : false,
    "iptSenha" : false
}
let formularioValidado = false;

formularioCampos.forEach((campo)=>{
    
    campo.addEventListener('blur',()=>{
        camposValidados[campo.name] = validacao.validarCampo(campo);
    });
    
    for(const campos in camposValidados){
        if(!camposValidados[campos]){
            formularioValidado = false;
            break;
        }
        else{
            formularioValidado = true;
        }
    }
});