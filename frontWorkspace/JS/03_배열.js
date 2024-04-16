let x = [];
x[0] ='사과';
x[1] = 3.14;
x[1] = 10;
x[2] = true;


let arr = ["aaa","bbb","ccc","ddd"];
let result = arr.indexOf('bbb');
console.log(result);
console.log(arr.slice(0,2));   // 특정 범위 설정하여 복사 후 배열 생성

let two = arr.splice(2);       // n번째 인덱스 부터 잘라서 새로운 배열 생성

console.log(two);
console.log(arr);

let arr2 = arr.concat(two);
console.log(arr2);            // 두 배열 합치기