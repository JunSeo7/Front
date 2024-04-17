// const x = new Object();
const x = {
  atk : 100,
  def : 50,
  isDead : false,
  skill : function(){},
  foods : ["사과", "딸기", "망고"]
};

// 키 값을 변수로 처리 할 때  const str = "name" || x[str] = "???"
x["max-level"] = 250; 
x.name = "홀길동";
x.age = 20;
x.isProgrammer = true;
x.hobby = ["코딩", "프로그래밍", "개발"]
// 객체 안에 들어가 있는 함수는 메소드 / 아닌경우 함수
x.hello = function(){
  console.log("hello  ~ ~ ~ !");
};

console.log(x);

x.hello();

for(k in x){
  console.log(x[k]);
}