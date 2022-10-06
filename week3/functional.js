//Array.join(): 배열 -> 문자열 생성
const users = ['Hong', 'Kim', 'Oh', 'Park'];
const s = users.join(','); //원소와 원소사이 구분은 ,
console.log(s);

//Array.filter(): 배열 -> 새 배열을 생성(조건에 맞는 원소) 원문을 건들이지 않고 불변성을 유지 시킴
const userList = [
        {name : 'hong', point : 100},
        {name : 'kim', point : 30},
        {name : 'Oh', point : 500},
        {name : 'park', point : 80}
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
const userList3 = userList.map(user => `<li>${user.name}, ${user.point}</li>`);
console.log(userList, userList3);

userList.filter(user => user.point>=100).map(user => `<li>${user.name}, ${user.point} </li>`);

//Array.reduce(변환함수, 초기값); 배열 -> 문자열, 객체, 배열 any 아무거나 다 변환 가능하다 .
// 이전의 결과 값과 뭐 하나더 다음 아이템에 적용 될 결과 값을 리턴
const userList5 = userList.reduce((max_point_user, user) => user.point >= max_point_user.point? user:max_point_user); //
console.log(userList, userList5);

const userList6 = userList.reduce(
    (obj, user) => {obj[user.name] = user.point; return obj},{}// 새로운 객체를 생성하기 위해 입력 입력안하면 객체가 계속 바뀜
);//최종 결과는 객체
//입력 값도 배열 출력 값도 배열
console.log(userList, userList6);