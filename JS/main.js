const randomNumber = Math.round(Math.random()*10);
const video1 = document.querySelector(".video1");
const video2 = document.querySelector(".video2");
let xAgains = 1;

const scriptNumberTry = (event) => {
  event.preventDefault(); //Não submeter o formulário.
  const numberInput = document.querySelector("#inputNumber");

  if (Number(numberInput.value) == randomNumber) {
    video1.classList.add('hide'); //Abrir o video1.
    video2.classList.remove('hide');

    document.querySelector(".video2 h2")
    .innerHTML = `Acertou! E suas tentativas foram ${xAgains}`
  }
  xAgains++
  numberInput.value = "";
}

const tryButton = document.querySelector("#btnTry"); //Chama o ID para objeto.
const tryAgainButton = document.querySelector("#btnTryAgain");

tryButton.addEventListener('click', scriptNumberTry); //nome evento/função.
tryAgainButton.addEventListener('click', function () {
  video1.classList.remove('hide');
  video2.classList.add('hide');
  xAgains = 1;
})