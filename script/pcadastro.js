import * as validacao from "./validacao.js";

const iptCampos = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-cadastroFormulario]');


formulario.addEventListener("submit", (evento)=>{ // se não preencher os campos e passar pela validação o evento não funciona    
    evento.preventDefault();//inibir o comportamento padrão

    //capturar os valores de todas as inputs do formulário
    const entradasFormulario = { 
        "nome": evento.target.elements['cadastroNome'].value,
        "sobrenome": evento.target.elements['cadastroSobrenome'].value,
        "usuario" : evento.target.elements['cadastroUsuario'].value,
        "senha" : evento.target.elements['cadastroSenha'].value,//futuramente tirar dados delicados
        "confirmar senha" : evento.target.elements['confirmaSenha'].value //futuramente tirar dados delicados
    }   
    
    localStorage.setItem("cadastro", JSON.stringify(entradasFormulario));// cria um arquivo JSON e o armazena no localStorage do navegador. 

    console.log(entradasFormulario);//pode apagar
    console.log(JSON.stringify(entradasFormulario));//pode apagar
});



iptCampos.forEach((campo)=>{
    
    campo.addEventListener('blur', ()=>{
        validarCampo(campo);   //quando perder o foco vai passar por uma função que validará a entrada  
    });
    campo.addEventListener('invalid', (evento)=>{
        evento.preventDefault(); //quando for apertado o submit e os valor do campo for invalido será acionado o cancelamento do comportamento padrão       
    });
});


const tiposErros =[
    "tooLong",//não possui qtd caracteres minima
    "tooShort",// possui qtd de caracteres permitida
    "valueMissing",//campo vazio    
]

//mensagens personalizadas de erros
const mensagensErro ={//a chave principal são as ids
    "cadastroNome":{
        "tooShort":"Coloque 5 ou mais caracteres no campo nome.",
        "tooLong":"Coloque 25 ou menos caracteres no campo nome.",
        "valueMissing":"Preencha o campo nome."
    },
    "cadastroSobrenome":{
        "tooShort":"Coloque 5 ou mais caracteres no campo sobrenome.",
        "tooLong":"Colque 25 ou menos caracteres no campo sobrenome.",
        "valueMissing":"Preencha o campo sobrenome."
    },
    "cadastroUsuario":{
        "tooShort":"Coloque 5 ou mais caracteres no campo usuário.",
        "tooLonge":"Coloque 25 ou menos caracteres no campo usuário.",
        "valueMissing":"Preencha o campos de usuário."
    },
    "cadastroSenha":{
        "tooShort":"Coloque 5 ou mais caracteres no campo senha.",
        "tooLong":"Coloque 25 ou menos caracteres no campo senha.",
        "valueMissing":"Preencha o campos de senha."
    },
    "confirmaSenha":{
        "tooShort":"Coloque 5 ou mais caracteres no campo confirmar senha.",
        "tooLong":"Coloque 25 ou menos caracteres no campo confirmar senha.",
        "valueMissing":"Preencha o campo de confirmar senha."
    },

    
}




function validarCampo(campo){
    let mensagem = "";
    campo.setCustomValidity('');

    tiposErros.forEach( (erro)=>{
        if(campo.validity[erro]){
            mensagem = mensagensErro[campo.name][erro];            
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.msgErro');
    const inputValidado = campo.checkValidity();

    if(!inputValidado){
        mensagemErro.style.color = 'red';
        mensagemErro.innerText = mensagem;
    }
    else{
        mensagemErro.style.color = 'transparent';
        mensagemErro.innerText = "*";
    }

}