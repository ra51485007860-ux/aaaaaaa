import React from 'react';
import ReactDOM from 'react-dom/client';
import Contato from './pages/contato/index.jsx';
import App from './pages/app/App';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
    <Route path = '/' element= {<Contato/>}/> 
     <Route path='/app' element={<App/>}/>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);