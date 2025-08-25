import React from 'react';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <>
    <div className="container" s>
         <div className='hotelName'>
          <h2>
             <img src="/vIndia.png" alt=""  />
             <br /> MENU  
             </h2>
             
         </div>
        <Book />
        {/* <p className='developed'>Developed & Design By 
          <span  style={{paddingLeft:"10px", }}><a href="https://www.perfectconsultancy.co/" target="_blank" rel="noopener noreferrer" >P.G.C</a></span>
        </p> */}
    </div>
    </>
  );
}

export default App;
