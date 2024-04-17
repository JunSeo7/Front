const  s = document.querySelector("#result");
console.log(s);

s.classList.add("box");

function addRed() {
  const s = document.querySelector("#result");
  s.classList.add("red")
}

function addBlue() {
  const s = document.querySelector("#result");
  s.classList.add("blue")
}

function addGreen() {
  const s = document.querySelector("#result");
  s.classList.add("green")
}

function removeRed() {
  const s = document.querySelector("#result");
  s.classList.remove("red")
}

function removeBlue() {
  const s = document.querySelector("#result");
  s.classList.remove("blue")
}

function removeGreen() {
  const s = document.querySelector("#result");
  s.classList.remove("green")
}
