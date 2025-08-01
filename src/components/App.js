import React, { useState, useEffect } from "react";
import "./App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function AutoComplete() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim() === "") {
        setSuggestions([]);
      } else {
        const filtered = fruits.filter((fruit) =>
          fruit.toLowerCase().startsWith(input.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, 300); // debounce for better UX

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <h2>AutoComplete</h2>
      <input
        type="text"
        className="search"
        placeholder="Search fruits"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Only render <ul> if suggestions exist */}
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
