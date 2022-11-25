import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Userlist from "./component/Userlist";
import PageNotFound from "./component/PageNotFound";
import UserDetail from "./component/UserDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/list" element={<Userlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
// *이 제일 마지막
export default App;
