

function showTime(){
    let dateNow = Date.now()
    let data = new Date(dateNow)
    let printTime = data.toTimeString()
    console.log('Horário atual:', printTime.slice(0, 8))
}

const stop = setInterval(showTime, 2000)

setTimeout(clearInterval, 11000, stop)