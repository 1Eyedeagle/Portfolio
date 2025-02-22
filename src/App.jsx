import React from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
