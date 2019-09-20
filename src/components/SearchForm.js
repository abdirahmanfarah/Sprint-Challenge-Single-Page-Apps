import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList'

export default function SearchForm(props) {

  const[find, setFind] = useState({})
 
  const handleChange = event => {
    setFind({...find, [event.target.name] :event.target.value})
  };

  const handleInputChange = event => {
    event.preventDefault();
    console.log(find);
    
    if(!find.name){
      alert('No Name Exists');
    }else {
      props.setFind.filter(character => (
        <span>{character.name}</span>
        )
      )
    }
  };



  return (
    <section className="search-form">

      <form onSubmit ={handleInputChange}>
        <input 
        type ="text"
        //  ref={input => props.search= input}
         onChange ={handleChange} 
         placeholder="Search Name" />
        </form>
    </section>
  );
}
