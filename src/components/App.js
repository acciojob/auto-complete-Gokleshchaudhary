import React, { useState, useEffect } from "react";

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

      // Simulate async fetch with a delay
      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(input.toLowerCase())
      );

      setSuggestions(filtered);
      setLoading(false);
    }, 300); // debounce delay

    return () => clearTimeout(timeoutId); // cleanup
  }, [input]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Fruit AutoComplete</h2>
      <input
        type="text"
        placeholder="Search fruit..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />
      {loading && <div>Loading...</div>}

      {suggestions.length > 0 && (
        <ul
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "5px",
            width: "200px",
            listStyleType: "none"
          }}
        >
          {suggestions.map((item, index) => (
            <li key={index} style={{ padding: "5px 0" }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
