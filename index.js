// Cambia esto por tu URL de Apps Script (la que termina en /exec)
const URL_SCRIPT = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdNpcxTFyeuSqf9WEem3Vh5REae5JqHhlyNSew__J5hnVTVe1Xi8uxi_MAiN3l-YneFjgnFTOzCNB5/pubhtml";

const formulario = document.getElementById('form-encuesta');
const boton = document.getElementById('btn-enviar');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    boton.disabled = true;
    boton.innerText = "Enviando...";

    fetch(URL_SCRIPT, { method: 'POST', body: new FormData(formulario)})
    .then(res => {
        alert("¡Gracias! Tu encuesta ha sido enviada correctamente.");
        formulario.reset();
        boton.disabled = false;
        boton.innerText = "Enviar Encuesta";
    })
    .catch(err => {
        console.error(err);
        alert("Hubo un error. Intenta de nuevo.");
        boton.disabled = false;
    });
});
