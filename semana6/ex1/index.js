
function sleep(valor) {

    return new Promise ((res, rej)=>{
        setTimeout(res, 3000, valor)
    }).then(
        (e)=>{
            console.log(e)
        }
    )
}

sleep('3 segundos depois')