function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    var saudacao = '';

    if(hora >= 0 && hora < 12) {
        saudacao = 'Bom dia! ☀️';
        img.src = 'imagem/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18) {
        saudacao = 'Boa tarde! 🌅';
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#fd4825'
    } else {
        saudacao = 'Boa noite! 🌙';
        img.src = 'imagem/noite.png'
        document.body.style.background = '#071c1f'
    }

    //msg.innerHTML = ``
    msg.innerHTML = `${saudacao}<br>Agora são ${hora} horas.`
}