import User from './user.js';




localStorage.getItem('bd') ? localStorage.getItem('bd') : localStorage.setItem('bd', '{}')

let nome = '';
let cell = '';
let cpf = '';
let senha = '';
let conf_senha = ''; 

let cad_nome = document.getElementById("nome")
cad_nome.addEventListener('blur',
    (e) => {
        nome = e.target.value
    }
    )

let cad_cell = document.getElementById("cell")
cad_cell.addEventListener('blur',
    (e) => {
        cell = e.target.value
    }
    )

let cad_cpf= document.getElementById("cpf")
cad_cpf.addEventListener('blur',
    (e) => {
        cpf = e.target.value
    }
    )

let cad_senha= document.getElementById("senha")
cad_senha.addEventListener('blur',
    (e) => {
        senha = e.target.value
    }
    )

let cad_conf_senha = document.getElementById("conf_senha")
cad_conf_senha.addEventListener('blur',
    (e) => {
        conf_senha = e.target.value
    }
    )

let cad_enviar = document.getElementById("enviar")
cad_enviar.addEventListener('click',
    () => {
        console.log('senha', senha)
        if (conf_senha != '' && nome != '' && senha != '' && cpf != '' && cell != ''){
           if (senha === conf_senha){
                console.log(typeof(localStorage.getItem('bd')))
                let bd = localStorage.getItem('bd');
                if(!Object.keys(bd).includes(cpf)){
                    console.log(bd)
                    console.log(
                        'senha', senha,
                        'celular', cell,
                        '\nnome', nome,
                        '\ncpf', cpf
                    )
                    /* error */
                    bd[cpf] = new User(nome, cell, cpf, senha);
                    localStorage.setItem('bd', JSON.stringify(bd))
                } else {
                    console.log('Este cpf já foi cadastrado!')
                }
           } else {
            console.log('Os dois campos de senha devem ser iguais!')
           }
        } else {
            console.log('Nenhum campo pode ficar vazio!')
        }
       
        })

let cad_limpar = document.getElementById("limpar")
cad_limpar.addEventListener('click',
    () => {
        document.getElementById("nome").value = '';
        
        document.getElementById("cell").value = '';
       
        document.getElementById("cpf").value = '';
        
        document.getElementById("senha").value = '';
        
        document.getElementById("conf_senha").value = '';

        nome = '';
        cell = '';
        cpf = '';
        senha = '';
        conf_senha = ''; 
        
        })
        
    
    


