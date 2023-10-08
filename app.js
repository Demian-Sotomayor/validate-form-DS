// ________ Variables ________

const form = document.querySelector('.needs-validation');
const submitBtn = document.querySelector('.btn-send');
const alert = document.querySelector('.alert');
const inputs = form.querySelectorAll('input, select, textarea');

submitBtn.addEventListener('click', e => {

  e.preventDefault();

  // ---- Validar formulario ----
  if(!form.checkValidity()) {

    // ---- Recorrer inputs ----
    inputs.forEach(input => {

      if(!input.checkValidity()) {

        input.classList.add('alert-danger');
        
        // Quitar alerta después de 4 segundos
        setTimeout(() => {
          input.classList.remove('alert-danger');
        }, 4000);

      }   
    });
    
    // Mostrar alerta
    alert.classList.remove('d-none');
    
    // Ocultar alerta tras 4 segundos
    setTimeout(() => {
      alert.classList.add('d-none');
    }, 4000);

    form.classList.add('was-validated');

  } else {

    // Si está validado, ir hacia la función enviarForm
    enviarForm();

  }

});

// Función para enviar
function enviarForm() {
  // Limpia los campos
  form.reset();

  // Añade un mensaje en la alerta
  alert.innerText = 'Enviando formulario...';
  alert.classList.remove('d-none');

  // Oculta la alerta
  setTimeout(() => {
    alert.classList.add('d-none');
  }, 4000);
}