const inicio = document.querySelector('#inicio');
const intro = document.querySelector('#intro');
const firstPage = document.querySelector('#first-page');
const secondPage = document.querySelector('#second-page');

const goNextPage = e => {
  if(e.target.classList.contains('btn-iniciar')) {
    firstPage.classList.add('d-none');
    secondPage.classList.remove('d-none');
    intro.classList.remove('d-none');
    setTimeout(() => {
      inicio.classList.add('d-none')
    }, [1200]);
  };
};

const goPreviousPage = e => {
  if(e.target.classList.contains('flecha')) {
    secondPage.classList.add('d-none');
    inicio.classList.remove('d-none');
    setTimeout(() => {
      intro.classList.add('d-none');
      firstPage.classList.remove('d-none');
    }, [1200]);
  };
};

inicio.addEventListener('click', goNextPage);
intro.addEventListener('click', goPreviousPage);

