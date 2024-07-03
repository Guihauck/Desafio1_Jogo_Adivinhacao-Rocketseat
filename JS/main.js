// Variáveis
let randomNumber = Math.round(Math.random() * 10);
const video1 = document.querySelector(".video1");
const video2 = document.querySelector(".video2");
const tryButton = document.querySelector("#btnTry");
const tryAgainButton = document.querySelector("#btnTryAgain");
let xAgains = 1;

// Funções ou métodos (callback)
const scriptNumberTry = (event) => {
  event.preventDefault(); //Não submeter o formulário.
  const numberInput = document.querySelector("#inputNumber");

  if (Number(numberInput.value) == randomNumber) {
    toggleScreen()
    video2.querySelector(".video2 h2").innerHTML = `Acertou! E suas tentativas foram ${xAgains}`
  }
  numberInput.value = "";
  xAgains++
}

function scriptNumberActionReset() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10);
  xAgains = 1;
}

function toggleScreen() {
  video1.classList.toggle('hide');
  video2.classList.toggle('hide');
}

function enterAtivation () {
  if (eventEnter.key == 'Enter' && video1.contains('hide')) {
    scriptNumberActionReset();
  }
}

// Eventos
tryButton.addEventListener('click', scriptNumberTry);
tryAgainButton.addEventListener('click', scriptNumberActionReset);
document.addEventListener('keydown', enterAtivation)



