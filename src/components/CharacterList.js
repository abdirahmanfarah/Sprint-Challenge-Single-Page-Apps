import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[character, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios 
      .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setCharacter(response.data.results);
          console.log(response.data)
        })
        .catch(error => {
          console.error("Server Error", error)
        })
  }, []);

  return (
    <section className="character-list">
      {
        character && character.map(index => {
          console.log(index);
          return <CharacterCard 
            key ={index.name}
            name = {index.name}
            gender = {index.gender}
            species = {index.species}
            status = {index.status}

            />
        })
      }
    </section>
  );
}
