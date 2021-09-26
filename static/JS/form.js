var form = document.getElementById("submitEmailForm");

async function handleSubmit(event) {
    event.preventDefault();
    var statusSuccess = document.getElementById("my-form-status-success");
    var statusError = document.getElementById("my-form-status-error");
    var dangerAlert = document.getElementById('danger');
    var successAlert = document.getElementById('success');
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        statusSuccess.innerHTML = "Seu email foi enviado, tentarei entrar em contato o mais rápido possível!";
        successAlert.classList.remove('d-none')
        form.reset()
    }).catch(error => {
        statusError.innerHTML = "Ops, algo deu errado na hora de enviar o formulário, por favor tente novamente em instantes!"
        dangerAlert.classList.remove('d-none')
    });
}
form.addEventListener("submit", handleSubmit)