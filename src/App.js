import React,  { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route, Link} from 'react-router-dom';
import styled from "styled-components";
import SearchForm from './components/SearchForm'


const StyledLinks = styled.div `
  margin:auto;
  display:flex;
  justify-content:flex-end;
  padding:20px;
`;
const HomeLink = styled.div `
  padding:20px;
  text-underline:none;
`;
export default function App() {
  const [characters] = useState([]);

  return (
    <main>
        <StyledLinks>
          <HomeLink><Link to="/">Home</Link></HomeLink>
          <HomeLink><Link to="/character-list">Characters</Link></HomeLink>

        </StyledLinks>
      <Route exact path="/character-list" component={Header} />
      <Route exact path="/character-list" component={SearchForm} />
      <Route exact path="/" component={WelcomePage} /> 

    <Route path="/character-list"
      render={props => (
        <CharacterList {...props} characters={characters} />
      )}
      />
    </main>
  );
}
