//Pushbar config

//Variables
const buttonContainer = document.querySelector("#btn-pushbar");
const pushbar = document.querySelector('#pushbar-menu')

//Función que cambia el texto del boton
const changeButton = (className, text) => {
  buttonContainer.innerHTML = `
    <button class="btn green fs-4 fw-bolder ${className}">${text}</button>
    `;
};

//Listener
//Si dice "ver mas", lo abre, y si dice "ver menos", lo cierra, luego cambia el texto
buttonContainer.addEventListener("click", ({target}) => {
  if (target.classList.contains("buttonOne")) {
    pushbar.classList.add('pushbar-open');
    changeButton("buttonTwo", "Ver menos");
  } else if (target.classList.contains("buttonTwo")) {
    pushbar.classList.remove('pushbar-open')
    changeButton("buttonOne", "Ver mas");
  }
});

