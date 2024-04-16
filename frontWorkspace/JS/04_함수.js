// 선언적 함수
function f01(x) {
  return x + 1;
}

// 익명 함수
const f02 = function (x) {
  return x + 1;
}

// 화살표 함수
f03 = (x) => x + 1;


// ===========================================

function printNum(x) {
  console.log(x);
  console.log(arguments);
}

// printNum(100, 200, 300);
// ===========================================


function getTen() {
  return printNum;
}

const result = getTen();
// console.log(result);

// result(777);


// ===========================================


// function hello(x) {
//   console.log("안녕 ~ ~ ~ / " + x);
// }

// const hi = hello;

// hi('하이');


// const x = undefined;
// console.log(typeof x);

// const calcResult = 3/2; // 일반적인 숫자 == Finite == 인피니티 아님
// const calcResult = 3/0; Infinity

// isFinite(calcResult);
// console.log(isFinite(calcResult));

// const calcResult = 1 / "hello";
// console.log(isNaN(calcResult));

console.log( 0 == "0" );
console.log( 0 == [] );
console.log( "0" == [] );


