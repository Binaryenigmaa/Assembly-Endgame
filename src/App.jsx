import React, { useState } from "react";
import "./App.css";
import Languages from "./components/Languages/Languages.jsx";
import GuessBox from "./components/GuessBoxes/GuessBoxes.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";

const App = () => {
  const MAX_ATTEMPTS = 8;

  // contains information all the languages that are present or gone
  const languageInfo = [
    { name: "HTML", isDead: false, bgColor: "#E2680F", textColor: "white" },
    { name: "CSS", isDead: false, bgColor: "#328AF1", textColor: "white" },
    {
      name: "javascript",
      isDead: false,
      bgColor: "#F4EB13",
      textColor: "black",
    },
    { name: "react", isDead: false, bgColor: "#2ED3E9", textColor: "black" },
    {
      name: "Typescript",
      isDead: false,
      bgColor: "#298EC6",
      textColor: "white",
    },
    { name: "Node.js", isDead: false, bgColor: "#599137", textColor: "white" },
    { name: "Python", isDead: false, bgColor: "#FFD742", textColor: "black" },
    { name: "Ruby", isDead: false, bgColor: "#D02B2B", textColor: "white" },
    { name: "Assembly", isDead: false, bgColor: "#2D519F", textColor: "white" },
  ];

  // STATES
  const [languages, setLanguage] = useState(languageInfo);

  return (
    <div className="app-container">
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under {MAX_ATTEMPTS} attempts to keep the
          programming world safe from Assembly!
        </p>
      </header>
      <div className="hidden-brick">
        {/* This will contain information about whether someone has won, lost or if a programming language is gone */}
      </div>
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
        <GuessBox />
        <Keyboard />
      </main>
    </div>
  );
};

export default App;
