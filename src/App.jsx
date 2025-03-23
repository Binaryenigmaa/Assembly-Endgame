import React, { useState } from "react";
import { languageInfo } from "./languageData.js";
import { allKeys } from "./keysData.js";
import "./App.css";
import Languages from "./components/Languages/Languages.jsx";
import GuessBoxes from "./components/GuessBoxes/GuessBoxes.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";
import eightLetterWords from "./wordsList.js";

const App = () => {
  console.log("App rerendered");

  // STATES
  const [languages, setLanguage] = useState(languageInfo);
  const [keyboardKeys, setKeyboardKeys] = useState(allKeys);
  const [currentWord, setCurrentWord] = useState(() => selectRandomWord());
  const [guessedChar, setGuessedChar] = useState([]);
  console.log(currentWord);

  const wrongGuessArray = guessedChar.filter(
    (letter) => !currentWord.includes(letter)
  );
  console.log(wrongGuessArray);

  const isGameWon = currentWord.every((letter) => guessedChar.includes(letter));
  console.log(isGameWon);
  const isGameLost = wrongGuessArray.length >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  // FUNCTIONS

  function selectRandomWord() {
    // This function returns an array of the word like-> ["W","O", "R", "D"]
    console.log("selectRandomWord has Run");
    const randomNum = Math.floor(Math.random() * eightLetterWords.length);
    return eightLetterWords[randomNum].toUpperCase().split("");
  }

  function addGuessedChar(keyboardKey) {
    // Adds the Key that was clicked to gussedChar array.
    console.log("compareChars Ran!");
    setGuessedChar((prevLetter) =>
      guessedChar.includes(prevLetter)
        ? prevLetter
        : [...prevLetter, keyboardKey]
    );
  }

  return (
    <div className="app-container">
      <header>
        <section className="header-main">
          <h1>Assembly: Endgame</h1>
          <p>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </section>
        <section
          className={
            isGameWon ? "hidden-brick gameWon" : "hidden-brick gameLost"
          }
        >
          {isGameOver ? (
            isGameWon ? (
              <>
                <h2>You Win!</h2>
                <span>Well Done!🎉</span>
              </>
            ) : (
              <>
                <h2>Game Over</h2>
                <span>You lost! Better Start learning Assembly!</span>
              </>
            )
          ) : null}
        </section>
      </header>
      <main>
        <section className="languages-container">
          {languages.map((language, index) => {
            const languageLost = index < wrongGuessArray.length;
            return (
              <Languages
                key={index}
                name={language.name}
                bgColor={language.bgColor}
                textColor={language.textColor}
                isDead={languageLost}
              />
            );
          })}
        </section>
        <section className="guessbox-container">
          {currentWord.map((char, index) => {
            return (
              <GuessBoxes key={index} char={char} guessedChar={guessedChar} />
            );
          })}
        </section>
        <section className="keyboard-container">
          {keyboardKeys.map((key, index) => {
            const isGuessed = guessedChar.includes(key);
            const isCorrect = isGuessed && currentWord.includes(key);
            const isWrong = isGuessed && !currentWord.includes(key);
            let keyStyle;
            if (isCorrect) {
              keyStyle = { backgroundColor: "#10A95B" };
            } else if (isWrong) {
              keyStyle = { backgroundColor: "#EC5D49" };
            }

            return (
              <Keyboard
                key={index}
                keyboardKeys={key}
                keyStyle={keyStyle}
                handleClick={addGuessedChar}
              />
            );
          })}
        </section>

        {isGameOver && <button className="new-game-btn">New Game</button>}
      </main>
    </div>
  );
};

export default App;
