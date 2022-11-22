
const url = 'https://api.coincap.io/v2/assets/bitcoin'

async function bitCoin(){

    try {

        let response = await fetch(url)
        let data = await response.json()
        console.log(`O preço do Bitcoin - ${data.data.symbol} em dólares hoje é $ ${Math.round(parseFloat(data.data.priceUsd))}`)

    } catch (error){

        console.log(error)
    }

}

bitCoin()