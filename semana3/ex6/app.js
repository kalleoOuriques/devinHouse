

let verificaPalindromo = (palavra)=>{

    let string;
    
    for(let i = palavra.length - 1; i >= 0; i--) {
   
        if (i == palavra.length - 1) {
            string = palavra[i]
        } else {
            string += palavra[i]
        }
    }

    if (palavra == string) {
        return console.log(true)
    } else {
        return console.log(false)
    }
    
}

const teste1 = verificaPalindromo("ana");
// true

const teste2 = verificaPalindromo("julia");
// false