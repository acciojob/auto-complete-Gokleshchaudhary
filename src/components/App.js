import React, { useState, useEffect } from "react";
import "./App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function App() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Simulate async fetch
    const delayDebounce = setTimeout(() => {
      if (input.trim() === "") {
        setSuggestions([]);
      } else {
        const filtered = fruits.filter((fruit) =>
          fruit.toLowerCase().startsWith(input.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, 300); // delay to avoid UI freeze

    return () => clearTimeout(delayDebounce);
  }, [input]);

  const handleSelect = (fruit) => {
    setInput(fruit);
    setSuggestions([]);
  };

  return (
    <div className="autocomplete-container">
      <h2>Fruit Search</h2>
      <input
        type="text"
        className="search"
        placeholder="Type a fruit..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((fruit, index) => (
            <li key={index} onClick={() => handleSelect(fruit)}>
              {fruit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
