import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})
// VAR Tipo de erros no validatyState
    const tiposDeErro = [
        "valueMissing",
        "typeMismatch",
        "patternMismatch",
        "tooShort",
        "customError"
    ]

    // menssagens customizadas 
    const mensagens = {
        nome: {
            valueMissing: "O campo nome não pode estar vazio.",
            patternMismatch: " favor, preencha com um nome válido.",
            tooShort: " favor, preencha um nome válido."
        },
        email: {
            valueMissing: "O campo  e-mail não pode estar vazio.",
            typeMismatch: "Por favor, preencha um email válido.",
            tooShort: "Por favor, preencha um e-mail válido."
        },
        rg: {
            valueMissing: "O campo  RG não pode estar vazio.",
            patternMismatch: "Por favor, preencha um RG válido.",
            tooShort: "O campo de RG não tem caractéres suficientes."
        },
        cpf: {
            valueMissing: 'O campo  CPF não pode estar vazio.',
            patternMismatch: "Por favor, preencha um CPF válido.",
            customError: "O CPF digitado não existe.",
            tooShort: "O campo de CPF não tem caractéres suficientes."
        },
        aniversario: {
            valueMissing: 'O campo  data de nascimento não pode estar vazio.',
            customError: 'Você deve ser maior que 18 anos para se cadastrar.'
        },
        termos: {
            valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
        }
    }


// verifica o comprimento do cpf
function verificaCampo(campo) {
    let mensagem = "";
    if(campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    // valida se é maior de idade
    if(campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
        tiposDeErro.forEach(erro => {
            if(campo.validity[erro]) {
                mensagem = mensagens[campo.name][erro];
                console.log(mensagem);
            }
        })
    }
    //console.log(campo.validity);  Verirficando os possivéis campos no validityState





