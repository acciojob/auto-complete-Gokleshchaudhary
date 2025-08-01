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
        setLoading(false);
        return;
      }

      setLoading(true);

      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(input.toLowerCase())
      );

      setSuggestions(filtered);
      setLoading(false);
    }, 300); // simulate async delay

    return () => clearTimeout(timeoutId); // cleanup for debounce
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

      <ul
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "5px",
          width: "200px",
          listStyleType: "none"
        }}
      >
        {suggestions.length === 0 ? (
          <li>No suggestions</li>
        ) : (
          suggestions.map((item, index) => (
            <li key={index} style={{ padding: "5px 0" }}>
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AutoComplete;
