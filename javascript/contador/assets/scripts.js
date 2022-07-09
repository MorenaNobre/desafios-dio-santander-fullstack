var currentNumber = 0;
var currentNumberWrapper = document.getElementById("currentNumber");

//duas funções increment e decrement
function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
