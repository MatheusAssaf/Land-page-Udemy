const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const message = document.getElementById('message')



function sub() {
    if (firstName.value == "" || lastName.value == "" || email.value == "" || message.value == "") {
        alert("Faltando informações, vefirique!")
    }
    else {
        alert('Recebemos sua mensagem!')
        firstName.value = ""
        lastName.value = ""
        email.value = ""
        message.value = ""
    }
}