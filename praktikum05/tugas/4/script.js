function hewan() {
    let kotak = document.querySelector('#gambar');
    let animal = document.querySelector('#animal');

    if (!animal.value == ' ') {
        kotak.innerHTML = `<img src="${animal.value}.png"></img>`
        alert(`ini hewan ${animal.value}`)
    }


    return false;
}