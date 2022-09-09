function clicar() {
    let peso = document.querySelector('#itxtpeso').value
    let altura = document.querySelector('#itxtaltura').value
    let res = document.querySelector('#resposta')
    let msg = document.querySelector('#mais')
    let complemento = document.querySelector('#complemento')
    let imc = Number(peso) / (Number(altura)**2)
    let agua = Number(peso)*0.035
    
    res.innerHTML += `<strong>${imc.toFixed(1)}</strong>`
    if (imc < 18.5) {
        msg.innerHTML = 'Segundo a OMS(Organização mundial da saúde) seu IMC indica: <strong>Magreza</strong>'
    } else if (imc < 25) {
        msg.innerHTML = 'Segundo a OMS(Organização mundial da saúde) seu IMC esta: <strong>Normal</strong>'
    } else if (imc < 30) {
        msg.innerHTML = 'Segundo a OMS(Organização mundial da saúde) seu IMC indica: <strong>Sobrepeso</strong> nivel de OBESIDADE I'
    } else if (imc < 40) {
        msg.innerHTML = 'Segundo a OMS(Organização mundial da saúde) seu IMC indica: <strong>OBESIDADE II</strong>'
    } else {
        msg.innerHTML = 'Segundo a OMS(Organização mundial da saúde) seu IMC indica: <strong>OBESIDADE GRAVE III</strong>'
    }
    complemento.innerHTML = `Sugerimos a você tomar ${agua.toFixed(1)} litros de agua por dia`
}

