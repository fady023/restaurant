import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import {Routes,Route} from "react-router-dom";
import Header from "./components/header/Header";
import Booktable from "./components/pages/Booktable";
import Contact from './components/pages/Contact';
import Blog from './components/pages/blog';

function App() {
  return (
    <>
    <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book" element={<Booktable />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    

    </>
  );
}

export default App;
