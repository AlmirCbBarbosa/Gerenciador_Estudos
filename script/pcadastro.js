import * as validacao from "./validacaoCadastro.js";

const iptCampos = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-cadastroFormulario]');
let formularioValidado = false;
const camposValidados = {
    "cadastroNome" : false,
    "cadastroSobrenome" : false,
    "cadastroUsuario" : false,
    "cadastroSenha" : false,
    "confirmaSenha" : false
}


iptCampos.forEach((campo)=>{    
    
    campo.addEventListener('blur', ()=>{
        camposValidados[campo.name] = validacao.validarCampo(campo);   //quando perder o foco vai passar por uma função que validará a entrada
        for(const campos in camposValidados){
            if(!camposValidados[campos]){
                formularioValidado = false;
                break;//para para a iteração nos elementos do objeto
            }
            
            formularioValidado = true;
        } 
        console.log(`O formulario esta validado? ${formularioValidado}`); //apagar
        
        if(formularioValidado){
            enviar();
        }
    });
    
    campo.addEventListener('invalid', (evento)=>{
        evento.preventDefault(); //quando for apertado o submit e os valor do campo for invalido será acionado o cancelamento do comportamento padrão       
    });
});


function enviar(){
    formulario.addEventListener("submit", (evento)=>{
        evento.preventDefault();//inibir o comportamento padrão

            //capturar os valores de todas as inputs do formulário
        const entradasFormulario ={ 
            "nome": evento.target.elements['cadastroNome'].value,
            "sobrenome": evento.target.elements['cadastroSobrenome'].value,
            "usuario" : evento.target.elements['cadastroUsuario'].value,
            "senha" : evento.target.elements['cadastroSenha'].value,//futuramente tirar dados delicados
            "confirmar senha" : evento.target.elements['confirmaSenha'].value //futuramente tirar dados delicados
        }
        localStorage.setItem("cadastro", JSON.stringify(entradasFormulario));// cria um arquivo JSON e o armazena no localStorage do navegador. 

        console.log('dados abaixo');
        console.log(entradasFormulario);//pode apagar
        console.log(JSON.stringify(entradasFormulario));//pode apagar
    });
}   
    
        
