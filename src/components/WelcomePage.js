import React from "react";
import { Route, Link} from 'react-router-dom';
import CharacterList from './CharacterList'
import styled from "styled-components";


const HomePage = styled.div `
  display:flex;
  justify-content:center;
  margin:auto;
`;

export default function WelcomePage() {
  return (
    <HomePage>

    <section className="welcome-page">
      <header>
      
        {/* <Link to="/">Home</Link> */}
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
    </HomePage>
  );
}
