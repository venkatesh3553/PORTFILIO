import { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { MdMenu } from 'react-icons/md';
import { MdCancel } from "react-icons/md";

import './App.css'
import { faL } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state={isTrue:false}
  
  scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  onShowMenu=()=>{
    this.setState(prevState=>({isTrue : !prevState.isTrue}))
  }
  render() {
    const{isTrue}=this.state
    return (
      <>

        <div className="header-container">
          
          <h1 className="header-head glowtext sideanimation">Portfolio</h1>
          <div className="menu-header-name-container">
            <button className="menu-button" onClick={this.onShowMenu}> 
              {!isTrue &&  <MdMenu className="menu-icon"/> }
               {isTrue &&  <MdCancel className="menu-icon"/> }
              </button>
            {isTrue && 
              <div className="okk">
              <button className="header-naemes sideanimationheaders" onClick={() => this.scrollToSection("home")}>Home</button>
              <button className="header-naemes sideanimationheaders" onClick={() => this.scrollToSection("about")}>About</button>
              <button className="header-naemes sideanimationheaders" onClick={() => this.scrollToSection("skills")}>Skills</button>
              <button className="header-naemes sideanimationheaders" onClick={() => this.scrollToSection("projects")}>Projects</button>
              <button  className="header-naemes sideanimationheaders"onClick={() => this.scrollToSection("contact")}>Contact</button>
            </div>
            }
          </div>
          <div className="header-names-container">
            
            <button className="header-naeme sideanimationheaders" onClick={() => this.scrollToSection("home")}>Home</button>
            <button className="header-naeme sideanimationheaders" onClick={() => this.scrollToSection("about")}>About</button>
            <button className="header-naeme sideanimationheaders" onClick={() => this.scrollToSection("skills")}>Skills</button>
            <button className="header-naeme sideanimationheaders" onClick={() => this.scrollToSection("projects")}>Projects</button>
            <button  className="header-naeme sideanimationheaders"onClick={() => this.scrollToSection("contact")}>Contact</button>
            </div>
        </div>
        

        <div className="bg-container">
         
          
          <section id="home" className="home-page">
            <Home />
          </section>
          <section id="about" className="about-page">
            <About />
          </section>
          <section id="skills" className="skills-page">
            <Skills />
          </section>
          <section id="projects" className="projects-page">
            <Projects />
          </section>
          <section id="contact" className="contact-page">
            <Contact />
          </section>
          <hr className="hr animation-container"/>
          <Footer/>
        </div>
      </>
    );
  }
}

export default App;
