import React from 'react';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>

      <div className="flex-main max-w-container mx-auto">
        <Greeting />
        <Skills />
      </div>

      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
