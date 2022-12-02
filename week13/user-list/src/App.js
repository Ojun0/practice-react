import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<UserList />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<UserDetail />} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
