import React from 'react';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="sticky top-0 left-0 z-20">
        <Header />
      </div>

      {/* https://stackoverflow.com/questions/48223566/using-anchor-tags-in-react-router-4  - anchor links*/}

      <div className="flex flex-col gap-16 my-10 max-w-container mx-auto xs:px-4 xl:px-0">
        <Greeting />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
