//Array.join(): 배열 -> 문자열 생성
const users = ['Hong', 'Kim', 'Oh', 'Park'];
const s = users.join(','); //원소와 원소사이 구분은 ,
console.log(s);

//Array.filter(): 배열 -> 새 배열을 생성(조건에 맞는 원소) 원문을 건들이지 않고 불변성을 유지 시킴
const userList = [
        {name : 'hong', point : 100},
        {name : 'kim', point : 30},
        {name : 'Oh', point : 50},
        {name : 'park', point : 80} // 객페
]

let newUsers = [];
for ( user of userList){
    if(user.point>=100){
        newUsers.push(user);
    }
} //원래는 이것

const userList2 = userList.filter(user => user.point>=50); //filter은 함수를 인자로 받음 배열의 원소 하나 하나마다 다 돌아간다 true 값만 새로운 배열에 넣어줌
console.log(userList, userList2)


//Array.map(변환함수): 배열 -> 새 배열(변환된 원소) 원소의 개수만큼 반복
const userList3 = userList.map(user => `<li>${user.name}, ${user.point}</li>`);// 배열을 받아서 HTML의 령태로 바꾼디 배열의 형태로 출력
console.log(userList, userList3);

const userList4 = userList.filter(user => user.point>=100/* 뱐환함수(원소) => 참 거짓 판단 */).map(user => `<li>${user.name}, ${user.point} </li>`); // 특정한 데이터만 추출할 때 filter 사용
console.log(userList, userList4);

//Array.reduce(변환함수, 초기값); 배열 -> 문자열, 객체, 배열 any 아무거나 다 변환 가능하다 .
// 이전의 결과 값과 뭐 하나더 다음 아이템에 적용 될 결과 값을 리턴
const userList5 = userList.reduce((max_point_user, user) => user.point >= max_point_user.point? user:max_point_user); //
console.log(userList, userList5);

const userList6 = userList.reduce(
    (obj, user/** 초기값, 첫번쨰 원소 */) => {obj[user.name] = user.point; return obj},{}// 빈객체에 프로퍼티를 계속 넣음 새로운 객체를 생성하기 위해 입력 입력안하면 객체가 계속 바뀜
    //이전 함수가 다음 함수에 영향을 끼치는 경우 사용, 객체를 하나더 만들 때
);//최종 결과는 객체
//입력 값도 배열 출력 값도 배열
console.log(userList, userList6);