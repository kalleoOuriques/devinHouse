import User from "./user.js";

if (!localStorage.getItem("bd")) {
  localStorage.setItem("bd", JSON.stringify({}));
}

/* ============ Consultar ========== */

let con_part_1 = document.getElementById('con_part_1');
let con_part_2 = document.getElementById('con_part_2');

con_part_1.style.display = 'flex';
con_part_2.style.display = 'none';

let con_cpf = document.getElementById("con_cpf");
let con_senha = document.getElementById("con_senha");
let con_enviar = document.getElementById("con_enviar");
let con_status = document.getElementById('con_status');

let nome_con2 = document.getElementById('nome_con2');
let cpf_con2 = document.getElementById('cpf_con2');
let cell_con2 = document.getElementById('cell_con2');
let saldo_con2 = document.getElementById('saldo_con2');

let con_r_enviar = document.getElementById("con_r_enviar");

let cpf_con = "";
let senha_con = "";

con_cpf.addEventListener("blur", (e) => {
    cpf_con = e.target.value;
});

con_senha.addEventListener("blur", (e) => {
    senha_con = e.target.value;
});

con_r_enviar.addEventListener("click", () =>{
    con_part_1.style.display = 'flex';
    con_part_2.style.display = 'none';
    con_status.innerText = '';
})

con_enviar.addEventListener("click", () => {
    let status;
    if(cpf_con != '' && senha_con != ''){

        let db = JSON.parse(localStorage.getItem('bd'));
        if (Object.keys(db).includes(cpf_con)) {

            if(db[cpf_con].senha == senha_con){

                con_part_1.style.display = 'none';
                con_part_2.style.display = 'flex';
                
                const nome = db[cpf_con].nome;
                const cpf = cpf_con;
                const cell = db[cpf_con].celular;
                const saldo = Math.round(db[cpf_con].saldo);

                nome_con2.innerText = `Nome: ${nome}`;
                cpf_con2.innerText = `CPF: ${cpf}`;
                cell_con2.innerText = `Celular: ${cell}`;
                saldo_con2.innerText = `Saldo: ${saldo}`;


            } else {

                status = 'Senha incorreta!'
            }
        } else {

            status = 'Este CPF ainda não foi cadastrado!'
        }


    } else {

        status = 'Nenhum campo pode ficar vazio!'

    }
    cpf_con = '';
    senha_con = '';
    con_cpf.value = '';
    con_senha.value = '';
    con_status.innerText = status;
    con_status.style.color = '#B22222';



});

/* ============ Cadastro ========== */

let nome = "";
let cell = "";
let cpf = "";
let senha = "";
let conf_senha = "";

let cad_nome = document.getElementById("cad_nome");
cad_nome.addEventListener("blur", (e) => {
  nome = e.target.value;
});

let cad_cell = document.getElementById("cad_cell");
cad_cell.addEventListener("blur", (e) => {
  cell = e.target.value;
});

let cad_cpf = document.getElementById("cad_cpf");
cad_cpf.addEventListener("blur", (e) => {
  cpf = e.target.value;
});

let cad_senha = document.getElementById("cad_senha");
cad_senha.addEventListener("blur", (e) => {
  senha = e.target.value;
});

let cad_conf_senha = document.getElementById("cad_conf_senha");
cad_conf_senha.addEventListener("blur", (e) => {
  conf_senha = e.target.value;
});

let status_res = document.getElementById("cad_status");
let cad_enviar = document.getElementById("cad_enviar");
cad_enviar.addEventListener("click", () => {
  let status;
  let color = "#B22222";
  if (
    conf_senha != "" &&
    nome != "" &&
    senha != "" &&
    cpf != "" &&
    cell != ""
  ) {
    if (senha === conf_senha) {
      let bd = JSON.parse(localStorage.getItem("bd"));
      if (!Object.keys(bd).includes(cpf)) {
        bd[cpf] = new User(nome, cell, cpf, senha);
        localStorage.setItem("bd", JSON.stringify(bd));
        status = "Conta criada com sucesso!";
        color = "#00FF00";
        limpar_cad();
      } else {
        status = "Este cpf já foi cadastrado!";
      }
    } else {
      status = "Os dois campos de senha devem ser iguais!";
    }
  } else {
    status = "Nenhum campo pode ficar vazio!";
  }
  
  status_res.innerText = status;
  status_res.style.color = color;
});

function limpar_cad() {
  document.getElementById("cad_nome").value = "";

  document.getElementById("cad_cell").value = "";

  document.getElementById("cad_cpf").value = "";

  document.getElementById("cad_senha").value = "";

  document.getElementById("cad_conf_senha").value = "";

  nome = "";
  cell = "";
  cpf = "";
  senha = "";
  conf_senha = "";
}

let cad_limpar = document.getElementById("cad_limpar");
cad_limpar.addEventListener("click", () => {
  limpar_cad();
});


/* ============ Deposito ========== */

let dep_cpf = document.getElementById('dep_cpf');
let dep_valor = document.getElementById('dep_valor');
let dep_enviar = document.getElementById('dep_enviar');


let dep_cpf_in = '';
let dep_valor_in = '';

dep_cpf.addEventListener('blur', (e) => {

    dep_cpf_in = e.target.value;
    
})


dep_valor.addEventListener('blur', (e) => {

    dep_valor_in = e.target.value;

})

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

dep_enviar.addEventListener('click', () =>{

    let status;
    let color = '#B22222';
    if(dep_cpf_in != '' && dep_valor_in != ''){ 

        let db = JSON.parse(localStorage.getItem('bd'));
        if (Object.keys(db).includes(dep_cpf_in)) {

                if (isNumber(dep_valor_in)) {
                    
                    db[dep_cpf_in].saldo += parseFloat(dep_valor_in);
                    localStorage.setItem('bd', JSON.stringify(db));

                    status = 'Deposito feito com sucesso!'
                    color = "#00FF00";

                } else {

                    status = 'O valor digitado é irregular!'
                }
            
            } else {
                
                status = 'Este CPF ainda não foi cadastrado!'
            }
        } else {
            status = 'Nenhum campo pode ficar vazio!'
            
        }


    dep_cpf_in = '';
    dep_valor_in = '';
    dep_cpf.value = '';
    dep_valor.value = '';
    dep_status.innerText = status;
    dep_status.style.color = color;

    })

/* ============ Saque ========== */


let saq_cpf = document.getElementById('saq_cpf');
let saq_senha = document.getElementById('saq_senha');
let saq_valor = document.getElementById('saq_valor');
let saq_enviar = document.getElementById('saq_enviar');
let saq_status = document.getElementById('saq_status');

let saq_cpf_in = '';
let saq_senha_in = '';
let saq_valor_in = '';

saq_cpf.addEventListener('blur', (e)=>{

    saq_cpf_in = e.target.value;
})

saq_senha.addEventListener('blur', (e)=>{

    saq_senha_in = e.target.value;
})

saq_valor.addEventListener('blur', (e)=>{

    saq_valor_in = e.target.value;
})

saq_enviar.addEventListener('click', ()=>{

    let status;
    let color = '#B22222';
    if(saq_cpf_in != '' && saq_senha_in != '' && saq_valor_in != ''){
        if (isNumber(saq_valor_in) && saq_valor_in[0] != '-'){
        let db = JSON.parse(localStorage.getItem('bd'));
            if (Object.keys(db).includes(saq_cpf_in)) {

                if(db[saq_cpf_in].senha == saq_senha_in){

                    db[saq_cpf_in].saldo -= parseFloat(saq_valor_in);
                    localStorage.setItem('bd', JSON.stringify(db));

                    status = 'Saque feito com sucesso!'
                    color = "#00FF00";

                } else {

                    status = 'Senha incorreta!'
                }
            } else {

                status = 'Este CPF ainda não foi cadastrado!'

            }
        } else {

            status = 'O valor digitado é irregular!'
        }


    } else {

        status = 'Nenhum campo pode ficar vazio!'

    }
    saq_cpf_in = '';
    saq_senha_in = '';
    saq_valor_in = '';
    saq_cpf.value = '';
    saq_senha.value = '';
    saq_valor.value = '';
    saq_status.innerText = status;
    saq_status.style.color = color;

    
})

/* ============ Navegador ========== */

let nav_cad = document.getElementById("nav_cad");
let nav_con = document.getElementById("nav_con");
let nav_dep = document.getElementById("nav_dep");
let nav_saq = document.getElementById("nav_saq");

let home = document.getElementById("home");
let cadastro = document.getElementById("cadastro");
let consulta = document.getElementById("consulta");
let saque = document.getElementById("saque");
let deposito = document.getElementById("deposito");

cadastro.style.display = "none";
consulta.style.display = "none";
saque.style.display = "none";
deposito.style.display = "none";

nav_cad.addEventListener("click", () => {
  home.style.display = "none";
  cadastro.style.display = "flex";
  status_res.innerText = '';
  consulta.style.display = "none";
  saque.style.display = "none";
  deposito.style.display = "none";
});

nav_con.addEventListener("click", () => {
  home.style.display = "none";
  cadastro.style.display = "none";
  consulta.style.display = "flex";
  con_status.innerText = '';
  saque.style.display = "none";
  deposito.style.display = "none";
});

nav_saq.addEventListener("click", () => {
  home.style.display = "none";
  cadastro.style.display = "none";
  consulta.style.display = "none";
  saque.style.display = "flex";
  saq_status.innerText = '';
  deposito.style.display = "none";
});

nav_dep.addEventListener("click", () => {
  home.style.display = "none";
  cadastro.style.display = "none";
  consulta.style.display = "none";
  saque.style.display = "none";
  deposito.style.display = "flex";
  dep_status.innerText = '';
});