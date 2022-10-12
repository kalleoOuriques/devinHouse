
var primos = 0


for (let i = 0; i <= 1000; i++){
    let achou = false
    for(let j = 2; j < i; j ++){
        
        var x = i / j
        if (x % 1 === 0){
            achou = true
        }
        
    }

    if (!achou){
        console.log(i)
        primos += 1
    }
}

console.log(primos)