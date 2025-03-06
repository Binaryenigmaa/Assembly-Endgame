import React, { useState } from "react";
import { languageInfo } from "./languageData.js";
import { allKeys } from "./keysData.js";
import "./App.css";
import Languages from "./components/Languages/Languages.jsx";
import GuessBox from "./components/GuessBoxes/GuessBoxes.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";
import eightLetterWords from "./wordsList.js";

const App = () => {
  const MAX_ATTEMPTS = 8;
  const GAME_WON = false;

  // STATES
  const [languages, setLanguage] = useState(languageInfo);
  const [keyboardKeys, setKeyboardKeys] = useState(allKeys);
  const [currentWord, setCurrentWord] = useState(() => selectRandomWord());
  console.log(currentWord);

  // FUNCTIONS

  function selectRandomWord() {
    // This function returns a random word from the array.
    const randomNum = Math.floor(Math.random() * eightLetterWords.length);
    return eightLetterWords[randomNum];
  }

  return (
    <div className="app-container">
      <header>
        <section className="header-main">
          <h1>Assembly: Endgame</h1>
          <p>
            Guess the word in under {MAX_ATTEMPTS} attempts to keep the
            programming world safe from Assembly!
          </p>
        </section>
        <section className="hidden-brick">
          <h2>You Win!</h2>
          <span>Well Done!🎉</span>
        </section>
      </header>
      <main>
        <section className="languages-container">
          {languages.map((language, index) => (
            <Languages
              key={index}
              name={language.name}
              bgColor={language.bgColor}
              textColor={language.textColor}
            />
          ))}
        </section>
        <section className="guessbox-container">
          {currentWord
            .toUpperCase()
            .split("")
            .map((char, index) => (
              <GuessBox key={index} character={char} />
            ))}
        </section>
        <section className="keyboard-container">
          {keyboardKeys.map((key, index) => (
            <Keyboard key={index} keyboardKeys={key} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
