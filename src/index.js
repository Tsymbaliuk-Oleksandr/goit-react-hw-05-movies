import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

//Використовуючи React контекст передає інформацію про поточний стан історії навігації всім нащадкам.
// Все, що необхідно зробити, це обернути компонентом <BrowserRouter> всі програми.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
