import Topbar from "./components/topbar/Topbar";
import Intro from  "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Worktwo from "./components/worktwo/Worktwo";
import Workthree from "./components/workthree/Workthree";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import "./app.scss"
import './index.css';
import { useState } from "react";


function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        <Intro/>
        <Portfolio/>
        <Works/>
        <Worktwo/>
        <Workthree/>
        <Skills/>
        <Testimonials/>
        <About/>
        <Contact/>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
