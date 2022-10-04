import { useState } from "react";
import "./App.css";
import characters from "./data/characters.json";

const App = () => {
  const [loggedCharacter, setLoggedCharacter] = useState(0);

  return (
    <div className='App'>
      <nav>
        <div class='avatar'>
          <img src={characters[loggedCharacter].image} />
          <p>David Rajcher</p>
        </div>
        <button class='logout'>Logout</button>
      </nav>
      {!loggedCharacter ? (
        <div></div>
      ) : (
        <div id='main'>
          <section id='chosen-container'></section>
          <section id='character-container'>
            {characters.map((character) => (
              <div class='card'>
                <img src={character.image} alt='character' />
                <div className='card-container'>
                  <h2>{character.name}</h2>
                  <p>
                    <span>Sex:</span> {character.gender}
                  </p>
                  <p>
                    <span>Status:</span> {character.status}
                  </p>
                  <p>
                    <span>Species:</span> {character.species}
                  </p>
                </div>
                <div class='button-container'>
                  <button class='choose-button'>Choose</button>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
      <aside>
        <form>
          <input name='search' id='search' placeholder='search' />
          <label for='gender'>
            Gender
            <select name='gender' id='gender'></select>
          </label>
          <label for='status'>
            Status
            <select name='status' id='status'></select>
          </label>
          <label for='species'>
            Species
            <select name='species' id='species'></select>
          </label>
        </form>
      </aside>

      <footer>
        <img src='../assets/avatar.png' />
        <p>Created by David L. Rajcher</p>
      </footer>
    </div>
  );
};

export default App;
