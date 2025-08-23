import React from 'react';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <div className="container">
         <div className='hotelName'>
          <h2>
             <img src="/vIndia.png" alt=""  />
             <br /> MENU  
             </h2>
             
         </div>
        <Book />
    </div>
  );
}

export default App;
