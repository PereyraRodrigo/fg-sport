//Pushbar config

//Variables
const buttonContainer = document.querySelector("#btn-pushbar");
const pushbar = document.querySelector('#pushbar-menu')
const iaContent = document.querySelector('#ia-content');
const btnClose = document.querySelector('#btn-close')

//Función que cambia el texto del boton
const changeButton = (className, text) => {
  buttonContainer.innerHTML = `
    <button class="btn green fs-4 fw-bolder ${className}">${text}</button>
    `;
};

//Listeners
//Si dice "ver mas", lo abre, y si dice "ver menos", lo cierra, luego cambia el texto
buttonContainer.addEventListener("click", ({target}) => {
  if (target.classList.contains("buttonOne")) {
    pushbar.classList.add('pushbar-open');
    iaContent.classList.add('ia-content');
    changeButton("buttonTwo", "Ver menos");
  } else if (target.classList.contains("buttonTwo")) {
    pushbar.classList.remove('pushbar-open')
    changeButton("buttonOne", "Ver mas");
  }
});

btnClose.addEventListener('click', () => {
  pushbar.classList.remove('pushbar-open')
  iaContent.classList.remove('ia-content');
  changeButton("buttonOne", "Ver mas");
})
