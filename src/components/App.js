import React, { useState, useEffect } from "react";
import "./App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function AutoComplete() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (input.trim() === "") {
        setSuggestions([]);
        return;
      }

      setLoading(true);

      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(input.toLowerCase())
      );

      setSuggestions(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [input]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Fruit AutoComplete</h2>

      <input
        type="text"
        className="search"
        placeholder="Search fruit..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      {loading && <div>Loading...</div>}

      <ul className="suggestions">
        {input.trim() !== "" && suggestions.length === 0 ? (
          <li className="no-results">No suggestions</li>
        ) : (
          suggestions.map((item, index) => (
            <li key={index} className="suggestion-item">
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AutoComplete;
