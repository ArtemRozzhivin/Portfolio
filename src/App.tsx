import React from 'react';
import Greeting from './components/Greeting';
import Header from './components/Header';

function App() {
  return (
    <div className="max-w-container mx-auto">
      <Header />

      <div className="xs:mx-4 ">
        <Greeting />
      </div>
    </div>
  );
}

export default App;
