import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const[character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getInfo = (props) => {

      axios 
        .get("https://rickandmortyapi.com/api/character/")
          .then(response => {
            setCharacter(response.data.results);
            console.log(response.data)
          })
          .catch(error => {
            console.error("Server Error", error)
          })
        } 
        getInfo();
    },[]);


  return (
    <section className="character-list">
      {
        character && character.map(index => {
          // console.log(index);
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
