import Header from './homework/Header';
import Footer from './homework/Footer';
import Notice from './homework/Notice';
import Subject from './homework/Subject';
import NoticeList from './homework/NoticeList';
import SubjectList from './homework/SubjectList'; 
// import 이용해서 컴포넌트 내용을 가져온다

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <section>
          <Notice></Notice>
          <NoticeList></NoticeList>
          <Subject></Subject>
          <SubjectList></SubjectList>
      </section>
      <footer>
        <Footer></Footer> 
      </footer>
    </div>
  );
}
//각 컴포넌트 적용
export default App;
