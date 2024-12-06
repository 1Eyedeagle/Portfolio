import React from 'react';
import Header from './Header.jsx';
import Home from './home.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import About from './About.jsx';
import Projects from './Project.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
