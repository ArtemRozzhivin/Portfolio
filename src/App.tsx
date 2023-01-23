import React from 'react';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
  return (
    <div className="max-w-container mx-auto">
      <Header />

      <div className="xs:mx-4 my-8">
        <Greeting />
        <Skills />
      </div>
    </div>
  );
}

export default App;
