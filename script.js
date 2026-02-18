function carregar(){
    msg = document.getElementById('msg')
    img = document.getElementById('foto')
    titulo = document.getElementById('titulo')
    data = new Date
    hora = data.getHours()
    dia = data.getDay()
    calenda = data.getDate()
    

    if (hora < 12){
        periodo = ('Manhã')
        img.src = 'manhãred.jpg'
        document.body.style.background = '#1EF1FC'
    } else if (hora < 19){
        periodo = ('Tarde')
        img.src = 'tardered.jpg'
        document.body.style.background = '#776bff'
    } else{
        periodo = ('Noite')
        img.src = 'noitered.jpg' 
        document.body.style.background = '#44006b'
    }

    switch (dia){
        case(0):
        dia = 'Domingo'
        break
        case(1):
        dia = 'Segunda'
        break
        case(2):
        dia = 'Terça'
                break
        case(3):
        dia = 'Quarta'
                break
        case(4):
        dia = 'Quinta'
                break
        case(5):
        dia = 'Sexta'
                break
        case(6):
        dia = 'Sabado'
    }
    msg.innerHTML = ('Agora são ' + hora + ' horas da ' + periodo + '!')
    titulo.innerHTML = ('Hoje é dia ' + calenda + ' e é uma ' + dia)

}
