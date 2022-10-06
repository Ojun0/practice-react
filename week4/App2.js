const element = (<ul>
    <li> HTML5 Programing</li>
    <li> Es6</li>
    <li> React</li>
</ul>);//한줄일 경우는 알아서 인식하지만 여러줄은 새로운 것으로 인식해서 묶어줘야 하나가 됨

const container = document.querySelector('#root');
const root = ReactDOM.creatRoot(container); 
root.render(element);