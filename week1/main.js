document.getElementById("btn1").addEventListener('click', changetext);
document,getElementById("btn2").addEventListener('click', changecolor);

function changetext(){
    //var text1 = document.getElementById("text1");
    //Dom 객체 이름 = document
    var s = document.getElementById("text1").value;
    //value 값에 접근
    var hello = document.getElementById('hello');
    hello.innerText = s;


}
function changecolor(){
    var color = document.getElementById("color1").value;
    document.getElementById('hello').style.color = color;
    //style을 바꿀려면 style 접근
}