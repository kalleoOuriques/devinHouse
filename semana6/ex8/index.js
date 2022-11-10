
const users = document.getElementById('users')

function createUserHTML(object){

    const div_main = document.createElement('div')
    div_main.classList.add('user')

    const img = document.createElement('img')
    img.src = object.picture.large

    const div_inf = document.createElement('div')
    div_inf.classList.add('inf')

    const div_nome = document.createElement('div')
    div_nome.innerText = `${object.name.title} ${object.name.first} ${object.name.last}`

    const div_email = document.createElement('div')
    div_email.innerText = object.email

    const div_loc = document.createElement('div')
    div_loc.innerText = `${object.location.street.name} -  ${object.location.city} -  ${object.location.state} -  ${object.location.country}`

    div_inf.appendChild(div_nome)
    div_inf.appendChild(div_email)
    div_inf.appendChild(div_loc)

    div_main.appendChild(img)
    div_main.appendChild(div_inf)

    users.appendChild(div_main)
   
}

async function generateUsers (usersNumber){

    const url = `https://randomuser.me/api/?results=${usersNumber}`

    await fetch(url)
    .then((e)=>{
        return e.json()
    })
    .then((e)=>{ 
        for (let i = 0 ; i < e.results.length; i++){
            createUserHTML(e.results[`${i}`])
        }
        })
    .catch((e)=>{
        console.log(e)
    })
    

    
}

const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    users.innerHTML = ''
    if (e.target.numero.value) {
        generateUsers(e.target.numero.value)
    }
    

})