function formatarData(num) {
    if (num < 10) {
        num = '0' + String(num);
        return num;
    }
    else {
        return num;
    }
}

function mudarFuso(num) {
    document.getElementById('info').textContent = num;
    atualizarRelogio();
}

function atualizarRelogio() {
    const agora = new Date();
    let info = document.getElementById('info').innerHTML
    
    let hora = agora.getUTCHours();
    let minuto = agora.getUTCMinutes();
    let segundo = agora.getUTCSeconds();

    hora += parseInt(info);

    if (hora >= 24) {
        hora -= 24
    }
    
    let horaFormatada = formatarData(hora)
    let minutoFormatado = formatarData(minuto)
    let segundoFormatado = formatarData(segundo)

    let tempoAgora = String(horaFormatada) + ':' + String(minutoFormatado) + ':' + String(segundoFormatado);
    document.getElementById('relogio').innerHTML = tempoAgora;
}


atualizarRelogio();
setInterval(atualizarRelogio, 1000);