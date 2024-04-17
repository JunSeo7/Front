const x = new Object();
x.name = "홍길동";

const resultA = x.hasOwnProperty("age");
const result = x.hasOwnProperty("name");
console.log(resultA);
console.log(result);


console.log(x instanceof Object); 

const date = new Date();
console.log(date.toDateString);

function showCurrentTime() {
  const time = document.querySelector("#div-time");
  time.innerText = new Date();

  
}