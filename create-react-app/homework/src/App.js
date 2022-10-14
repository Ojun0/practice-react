import Header from './homework/Header';
import Footer from './homework/Footer';
import Notice from './homework/Notice';
import Subject from './homework/Subject';
import NoticeList from './homework/NoticeList';
import SubjectList from './homework/SubjectList';

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

export default App;
