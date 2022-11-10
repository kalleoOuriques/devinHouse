
async function MediaIdades(nome, pais){

  try{
        let url = `https://api.agify.io/?country_id=${pais}&name=${nome}`
        
        let response = await fetch(url)
        let data = await response.json()
        console.log('Nome:',data.name)
        console.log('Age:', data.age)
        
    }catch(error){

        console.log(error)
    } 

  
}

MediaIdades('João', 'BR')


