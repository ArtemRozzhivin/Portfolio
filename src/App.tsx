import React from 'react';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const a = 'Hello';
  console.log(a.toLowerCase());

  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>

      <div className="flex-main max-w-container mx-auto">
        <Greeting />
        <Skills />
        <Projects />
        <Contacts />
      </div>

      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
