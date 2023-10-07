
const form = document.querySelector('.needs-validation');
const submitBtn = document.querySelector('.btn-send');
const alert = document.querySelector('.alert');
const inputAlert = document.querySelector('input')

submitBtn.addEventListener('click', e => {

  e.preventDefault();

  // Validamos que los campos
  if(form.checkValidity() === false) {

    // Añade clases para mostrar alertas
    form.classList.add('was-validated');
    alert.classList.remove('d-none');
    
    // Remueve las clases pasado 4 segundos
    setTimeout(() => {
      alert.classList.add('d-none');
    }, 4000);
    return;
  }

  // Enviar el formulario
  enviarForm();

});

function enviarForm() {
    form.reset();

    window.alert("Enviando formulario!")
}