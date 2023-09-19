const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = 
        }
    }
}

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
    .catch( data => console.log(data))
})
.catch(e => console.log('Deu Erro: '+ e, message))
})