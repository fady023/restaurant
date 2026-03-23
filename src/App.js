import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import {Routes,Route} from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
    <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    

    </>
  );
}

export default App;
