function abrir(){
    document.getElementById('wrap-open').style.display = 'none'
    document.getElementById('menu-mobile').style.display = 'flex'
}

function fechar(){
    document.getElementById('wrap-open').style.display = 'flex'
    document.getElementById('menu-mobile').style.display = 'none'
}

function enviar(){
    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto').value
    //console.log(nome, assunto)

    const msg = `Gostaria de entrar em contato!\n\nNome: ${nome}\nAssunto: ${assunto}`
    // console.log(msg)

    const msg_T = encodeURIComponent(msg)
    window.open(`https:wa.me/5541987654321?text=${msg_T}`)
}