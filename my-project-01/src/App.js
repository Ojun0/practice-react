import Welcome from "./components/Welcome";
import Welcome2 from "./components/Welcome2";
import Counter2 from "./components/Counter2";
import Counter from "./components/Counter";

function App() { //함수로 만든 최상위 컴포넌트

  return ( //여기서 부터 JSX, 리턴되는 최상위 엘리먼트는 하나만 가능하다 여러개 할 경우 묶어줘야 함, 자식은 여러개 가능하다
    <div className="App">
      <h1>Hello, React!</h1>
      
      
      {/*함수 컴포넌트 사용. 대부분 함수를 사용한다*/}
      
      <Welcome name='Hong' point={25} /* 프로퍼티로 props로 넘어감, 문자열만 쓸수있기 때문에 나머지는 {}로 묶어주면 된다 */></Welcome>
      <Welcome name='Kim' point={25}></Welcome>
      <Welcome name='Oh' point={25}></Welcome>
      <Welcome name='Park' point={25}></Welcome>
            

      {/*클래스 컴포넌트 사용 */}
      <Welcome2 name='Class' point={1}></Welcome2>
      {/*Count2 컴포넌트 사용 */}
      <Counter2></Counter2>
      <Counter></Counter>
    </div>
  );
}

export default App;
