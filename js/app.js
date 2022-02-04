//Variables
const btnInicio = document.querySelector('#inicio');
const btnIntro = document.querySelector('#intro');
const firstPage = document.querySelector('#first-page');
const secondPage = document.querySelector('#second-page');

//Funciones

//Al clickear en "Iniciar" se oculta la primera página y aparece la segunda
const goNextPage = e => {
  if(e.target.classList.contains('btn-iniciar')) {
    firstPage.classList.add('d-none');
    secondPage.classList.remove('d-none');
    btnIntro.classList.remove('d-none');
    setTimeout(() => {
      btnInicio.classList.add('d-none')
    }, [1200]);
  };
};

//Al clickear en la flechita de "Introducción" se oculta la segunda página y aparece la primera
const goPreviousPage = e => {
  if(e.target.classList.contains('flecha')) {
    secondPage.classList.add('d-none');
    btnInicio.classList.remove('d-none');
    setTimeout(() => {
      btnIntro.classList.add('d-none');
      firstPage.classList.remove('d-none');
    }, [1200]);
  };
};

//Listeners
btnInicio.addEventListener('click', goNextPage);
btnIntro.addEventListener('click', goPreviousPage);

