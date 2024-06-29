// Variáveis
const randomNumber = Math.round(Math.random()*10);
const video1 = document.querySelector(".video1");
const video2 = document.querySelector(".video2");
const tryButton = document.querySelector("#btnTry");
const tryAgainButton = document.querySelector("#btnTryAgain");
let xAgains = 1;

// Eventos

const scriptNumberTry = (event) => {
  event.preventDefault(); //Não submeter o formulário.
  const numberInput = document.querySelector("#inputNumber");

  if (Number(numberInput.value) == randomNumber) {
    video1.classList.add('hide');
    video2.classList.remove('hide');

    document.querySelector(".video2 h2")
    .innerHTML = `Acertou! E suas tentativas foram ${xAgains}`
  }
  xAgains++
  numberInput.value = "";
}

tryButton.addEventListener('click', scriptNumberTry); 
tryAgainButton.addEventListener('click', scriptNumberAction);

// Funções

function scriptNumberAction () {
  video1.classList.remove('hide');
  video2.classList.add('hide');
  xAgains = 1;
}