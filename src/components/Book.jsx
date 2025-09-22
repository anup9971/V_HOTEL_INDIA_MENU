import React, { useState, useEffect, useRef } from 'react'
import HTMLFlipBook from "react-pageflip";
import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";

function Book() {

  const pokemonData = [
    
    {
      img:"/new-imges/2.jpg",
      id: "025",
      name: "Pikachu",
      types: ["Electric"],
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      id: "125",
      img:"/new-imges/3.jpg",

      name: "Electabuzz",
      types: ["Electric"],
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    {
      id: "185",
      img:"/new-imges/4.jpg",

      name: "Sudowoodo",
      types: ["Rock"],
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains."
    },
    {
      id: "448",
      img:"/new-imges/5.jpg",

      name: "Lucario",
      types: ["Fighting", "Steel"],
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario."
    },
    {
      id: "658",
      img:"/new-imges/6.jpg",

      name: "Greninja",
      types: ["Water", "Dark"],
      description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed."
    },
    {
      id: "491",
      name: "Darkrai",
      img:"/new-imges/7.jpg",

      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    },
     {
      id: "491",
      name: "Darkrai",
      img:"/new-imges/8.jpg",

      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    },
     {
      id: "491",
      name: "Darkrai",
      img:"/new-imges/9.jpg",

      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    },
     {
      id: "491",
      name: "Darkrai",
      img:"/new-imges/10.jpg",

      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    },
     {
      id: "491",
      name: "Darkrai",
      img:"/new-imges/11.jpg",

      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    },
     {
      id: "491",
      name: "Darkrai",
      img:"/new-imges/12.jpg",

      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    },
    


  ];
const audioRef = useRef(null);
const bookRef = useRef(null);

  const handleFlip = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // reset sound if already playing
      audioRef.current.play();
    }
  };
  const goNext = () => bookRef.current?.pageFlip().flipNext();
const goPrev = () => bookRef.current?.pageFlip().flipPrev();
  return (
    <>
    
       <audio ref={audioRef} src="/turn.mp3" preload="auto" />

      <HTMLFlipBook
      ref={bookRef}  
        width={370}
        height={500}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        onFlip={handleFlip}   // 👈 Flip hone pr sound play karega
      >
        {/* Cover Page */}
        <div
          className="page"
          style={{ backgroundPosition: "center", backgroundSize: "cover" }}
        >
          <img src="/1.jpg" alt="" className="page-content-img" />
        </div>

        {/* Pokemon Pages */}
        {pokemonData.map((pokemon) => (
          <div className="page" key={pokemon.id}>
            <div className="page-content">
              <div className="pokemon-container">
                <img src={pokemon.img} alt={pokemon.name} />
                {/* {
                  pokemonData.length ==11 ? <p>helr klwejrkwerjkwekraj</p>:""
                } */}
              </div>
            </div>
          </div>
        ))}

      </HTMLFlipBook  >
      <span>
      <  PiGreaterThanLight className='next-btn'  onClick={goNext}  />
      </span>
      <span> 
      <PiLessThanLight className='prev-btn' onClick={goPrev} />
      </span>
       
      
    </>
  );
}

export default Book