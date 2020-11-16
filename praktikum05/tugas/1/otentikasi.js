function validate() {
    let name = document.querySelector('#name').value
    let password = document.querySelector('#password').value

    if (name == "rafi" && password == 'ramadhana123') {
        window.location = "sukses.html";
        alert("Login anda berhasil")
        return false

    } else {
        alert('Yang anda masukkan salah')
        return false
    }
}