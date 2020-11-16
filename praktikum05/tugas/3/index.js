function kirim() {
    let kotak = document.querySelector('#chatBox')
    let pesan = document.querySelector('#text')

    if (!pesan == ' ') {
        kotak.innerHTML += `<p>${pesan.value}</p>`
    }

    return false;
}