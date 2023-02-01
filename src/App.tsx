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

      <div className="flex flex-col gap-16 my-10 max-w-container mx-auto xs:px-4 xl:px-0">
        <Greeting />
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
