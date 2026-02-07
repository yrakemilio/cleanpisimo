// URL de tu Apps Script de Google
const scriptURL = 'https://script.google.com/macros/s/AKfycbyqTZY3jKziN-ZvLP-pdFBUKKwU0fA-Mrr6oXXV0pcG9EKw67mavvIY0SyIZbHpBixV/exec';

const form = document.getElementById('form-encuesta');
const btnEnviar = document.getElementById('btn-enviar');

form.addEventListener('submit', e => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Desactivamos el botón para evitar múltiples envíos
    btnEnviar.disabled = true;
    btnEnviar.innerText = "Enviando encuesta...";

    // Enviamos los datos a tu Google Sheet
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        alert("¡Muchas gracias! Tu opinión ha sido registrada en la base de datos de CLEANPISIMO.");
        form.reset(); // Limpia los campos
        btnEnviar.disabled = false;
        btnEnviar.innerText = "Enviar Encuesta";
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert("Hubo un problema al enviar la encuesta. Por favor, intenta de nuevo.");
        btnEnviar.disabled = false;
        btnEnviar.innerText = "Reintentar";
    });
});
