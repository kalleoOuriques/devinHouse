function obterClienteNoBancoDeDados(idCliente) {
    return new Promise( (resolve, reject) => {
            const cliente = { nome: 'bruce wayne', id: idCliente };
            resolve(cliente);
    });
}

async function processar () {

    try{
        let resultado = await obterClienteNoBancoDeDados(7)
        console.log('Resolvida', resultado)
    }catch(error){
        console.log('Rejeitada', error)
    }
        
}

processar();