function buscar() {
    let cid = document.getElementById('cidade').value
    console.log(cid)
    tempo(cid + ', BR') 
}

const tempo = (cid) => {
    let apikey = '9ea624ff53951bd35b460d57ee3dbf0e'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cid}&appid=${apikey}&units=metric&lang=pt_br`

    fetch(url)
        .then((response) => response.json())
        .then(json => {
            console.log(json.main);
            console.log(json.weather[0])
            document.getElementById('tempo').innerHTML = parseInt(json.main.temp);
            document.getElementById('nomeCidade').innerHTML = json.name
            document.getElementById('descrisao').innerHTML = json.weather[0].description
            document.getElementById('icone').src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
        });
}

tempo('sao paulo')


