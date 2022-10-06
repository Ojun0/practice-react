//element 를 만들고 div에 넣어주는 방식
const element = React.createElement(
    'h1',// 태그명 문자열로
    {id: 'hello'},//객체 속성값 문자열로
    'Hello, React!'//content
);

const element2 = React.createElement(
    'ul',
    {id: 'subjects'},
    React.createElement(
        'li',
        {className: 'subject'}, //html에 들어가면 className은 class로 인식
        'HTML5 Programing'
    ),
    React.createElement(
        'li',
        {className: 'subject'}, //html에 들어가면 className은 class로 인식
        'ESL Programing'
    ),
    React.createElement(
            'li',
            {className: 'subject'}, //html에 들어가면 className은 class로 인식
            'HTML5 Programing'
    )
)



//React v17-
//const root = document.querySelector('#root');//getElementId 대신 사용 id 클래스 등등 다 사용가능
//ReactDOM.render(element. root);

//React v18=
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);