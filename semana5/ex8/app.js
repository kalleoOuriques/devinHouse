class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    autenticar(emailInformado, senhaInformada) {
        return (this.email === emailInformado && this.senha === senhaInformada);
    }
}

const user = new Usuario('Kalleo', 'kalleo@gmail.com', 'kalleo123')

const form = document.getElementById('formulario')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(user.autenticar(e.target.email.value, e.target.senha.value)){

        alert('Sucesso!')

    } else {
        
        alert('Credenciais inválidas!')
    }
})
