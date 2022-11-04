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

//Component
function Subject(props){//컴포넌트는 대문자로 시작하는게 관례
    return React.createElement(
        'li',
        {class: 'subject'},
        props.subject
    );//element를 리턴
}//list의 content를 바꾸는 component

const element3 = React.createElement(
    'ul',
    {id: 'subject'},
    Subject({subject: 'HTML5 Programing'}),
    Subject({subject: 'ESL'}),
    React.createElement(
        Subject,
        {subject: ' Es6'},
        null
    )
);
//React v17-
//const root = document.querySelector('#root');//getElementId 대신 사용 id 클래스 등등 다 사용가능
//ReactDOM.render(element. root);

//React v18=
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
