//input & output

//Variables
var v = 'string';
//console.log(typeof s);
//s=30;
//console.log(typeof s);
//js는 변수 타입이 다이나믹하게 알아서 바뀜

const pi = 3.14
//pi= 30; //이 경우 오류가 뜸
// 변수의 값을 변하지 않게 하기위해 const 사용

var topic ='Javascript';
if(topic){
    var topic ='react';
    console.log(topic);
}
console.log(topic);
//이 경우 javascript가 나오지 않고 react가 나옴 var은 호이스팅으로 {}안에 선언된 react를 끌어왔기 떄문

var topic ='Javascript';
if(topic){
    let topic ='react';
    console.log(topic);
}
console.log(topic);
//이 경우 정상작동 그래서 var은 안쓰고 let,const를 사용

//Data types
let s = 'string';
console.log(typeof s);

const n=30;
console.log(typeof n);

let b = true; //false
console.log(typeof b);

let u;
console.log(typeof u);


let nl = null;
console.log(typeof nl);

let obj = {
    //obj는 중괄호 사이에 선언
    name : 'hong',
    age: 13
}
console.log(typeof obj);
console.log(obj);

function fnt(){
    //do someting.............................
    return 'fnt'
}

//함수 표현식
const fnt2 = function(){
    //do someting
    return 'fnt2';  
}
fnt2();

console.log(typeof fnt2);

console.log('5'==5); //ture
console.log('5' === 5 ); //false

let c = 3;
let a = (c>0)? '양수':'음수';
console.log(a); //a는 양수 c가 -1일 경우 a는 음수

//flow control
const person = {
    firstName: "Gildong",
    lastName : "Hong",
    age : 23
};
for(key in person){
    console.log(key+ ':', person[key]);
    console.log(`${key} :  
          ${person[key]}`); // 문자열이 많은 경우 이 방법을 사용함    공백, 줄바꿈도 인식 

} 

const arr = [1, 2, 3, 4 ,5];
for(item of  arr){
    console.log(item);

}

//**********************함수선언*************************
greeting(); //function hoisting으로 인해 호출이 됨
function greeting(name, greetings='hello'){//매개변수 parameta
    console.log(`${greetings},${name}`);
    return {name:name, greetings: greetings};
}

let value1 = greeting('hong', 'goodmorning'/*실변수 argument*/ ); //호출을 해야 실행이 됨
greeting('hong');

//2.함수 표현식
const greeting2 = function(name, greetings='hello'){
        console.log(`${greetings}, ${name}`);
        return {name:name, greetings:greetings};
}
let value2 = greeting2('kim', 'good afternoon'); // hoisting이 안돼서 함수 선언 이후에 선언해야함
greeting2('kim');


//3.화살표 함수
const greeting3 = (name, greetings= 'hello') => {
    console.log(`${greetings}, ${name}`);
    return {name:name, greetings:greetings};
}//함수는 변경되는게 아니기 때문에 let이 아닌 consts
greeting3('oh'); 


const greeting4 = (name, greetings='hello') => // 2줄 이상일 경우 {}호가 필요하다, return이 필요없다
    ({name:name, greeting:greetings}); //()를 넣는 이유는 {}가 함수꺼인지 객체꺼인지 인식을 못하기 떄문
    greeting4('lee');
    console.log(greeting4);

//Desturcting (obj)
const user1 ={
    firstName: 'oh',
    lastName: 'junyoung',
    age: 23,
    membership: 'A'
};

const user2 = {
    city: 'busan'
}

console.log(`Hello, 
                ${user1.lastName}, ${user1.firstName}`);

//const firstName = user1.firstName;
//const lastName = user1.lastName;
const {firstName, lastName} = user1; //윗 코드를 줄인 코드
console.log(`hello ${lastName}, ${firstName}`);


//spread operator
const user3 = {...user1, ...user2, gender: 'male'}; //2개의 객체를 user3에 묶어줌, 구조분해로 인해 추가적인 프로퍼티도 넣을 수 있음, 기존 값을 변환도 가능
const user4 = {...user1, firstName: 'Gil'}; //user4에 user1 데이터를 다 가져온 다음 fisrtname만 gil로 바꿔줌
console.log(user3);
console.log(user4);

const {age, ...user5} = user1; //user1 데이터 중 age만 뺴고 user5에 저장
console.log(user5);



//Desturcting (arr)
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [2, 4, 6, 8, 10];

console.log(`${numbers[3]}, ${numbers[4]}`);

const [,,, item3, item4] = numbers;//객체는 속성 값으로 구분 배열은 ,로 구분
console.log(`${item3}, ${item4}`);


//spead operator
const numbers3 = [...numbers, ...numbers2]; // 위 numbers1, 2 배열을 새로운 배열 numbers3에 넣는 식
const [fist, ...numbers4] = numbers; //첫번쨰 값만 저장되고? 나머지 값들은 numbers4에 저장됨
console.log(numbers4);
console.log(numbers3);


function firstnumber(first, ...rest) { //첫번쨰 값만 받고 나머지는 rest 변수에 배열 형태로 들어감
    console.log(rest);

};
firstnumber(1, 2, 3, 4, 5);


//object literal enhancement
const name =  'kim gildong';
const tel = '01076598182';
const myInfo = {
   // name: name,   키:변수값 
   // tel: tel

    name,
    tel //키 : 변수값을 그냥 하나로 적으면 알아서 인식
};

console.log(myInfo);

//class
class Person{
    constructor(name, age){ //constructor 안에 필드 정의
        this.name = name;
        this.age = age; // this.name이 필드 name이 받아온 값(파라미터에서 받아온 변수)
    }
    print(){
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

const person1 = new Person('hong', 21);
console.log(person1);

class Member extends Person{ //상속
    constructor(id, name, age){
        super(name, age); // 위 person에서 받아옴
        this.id = id;
    }
    print(){ //오버라이딩 
        console.log(`id: ${this.id}, name: ${this.name}, age: ${this.age} `)
    }
}

const myMemver = new Member('0001', 'kim', 21);
console.log(myMemver);

//pure function 순수함수
/* 동일한 입력 값에 대하여 항상 동일한 출력을 반환하는 함수
외부의 상태를 변경하거나 영향을 받지 않는 함수*/

//high order function 고차 함수
/*  함수를 안자로 받거나 함수를 출력으로 반환하는 함수 map, filter, reduce */ 

//immmutable 불변성
/* 생성 후 그 상태를 바꿀 수 없는 객체 
let은 재 할당이 가능하다 하지만 const는 재선언 및 재할달이 불가능하다*/