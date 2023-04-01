import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Suspense fallback={<div>Loding...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Suspense>,
);
