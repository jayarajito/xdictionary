import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
//This is Jayaraj Branch
function App() {
  const [dict, setDict] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const handleSearch = () => {
    const word = dict.find(
      (entry) => entry.word.toLowerCase() === search.toLowerCase()
    );
    if (word) {
      setResult(word.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word
"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <strong>Definition:</strong>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
