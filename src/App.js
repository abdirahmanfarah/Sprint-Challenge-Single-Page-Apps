import React,  { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route, Link} from 'react-router-dom';


export default function App() {
  const [characters] = useState([]);

  return (
    <main>
        <Link to="/character-list">Characters</Link>
        <Link to="/">Home</Link>
      <Route exact path="/" component={WelcomePage} /> 
      <Header />

    <Route path="/character-list"
      render={props => (
        <CharacterList {...props} characters={characters} />
      )}
      />
    </main>
  );
}
