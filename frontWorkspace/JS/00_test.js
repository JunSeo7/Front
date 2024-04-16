/*

< JS사용목적 >
JS: 요소를 동적으로 다루기 위함

1. 요소 가져오기 == HTML 요소를 JS객체로 만들어서 가져옴
  document.querySelector("선택자");      // 리턴값이 요소 1개
  document.querySelectorAll("선택자");   // 리턴값이 배열

2. 요소 다루기
  요소객체.???
  요소객체.style.속성명 = 값;



*/

function sayHello() {
  alert("안녕 ~ !");
}

function changeColor() {
  const x = document.querySelector("#target");
  x.style.backgroundColor = "red";
  x.innerText = "JavaScript";
}

function setBox() {
  const boxArr = document.querySelectorAll(".box");

  for (let i = 0; i < boxArr.length; i++) {
    boxArr[i].style.width = "100px";
    boxArr[i].style.height = "100px";
    boxArr[i].style.backgroundColor = "green";
  }
}

function checkDup() {
  // 입력된 아이디 가져오기
  const userIdTag = document.querySelector("#userId");
  console.log(userIdTag);
  console.log(userIdTag.id);
  console.log(userIdTag.placeholder);
  console.log(userIdTag.type);
  console.log(userIdTag.value);

  userIdTag.placeholder = "값 바꾸기";
  userIdTag.value = "JS로 넣어주는 value";
  userIdTag.type = "checkbox";

  // 중복인지 확인하기
}