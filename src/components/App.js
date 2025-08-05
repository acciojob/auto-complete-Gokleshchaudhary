// App.js

import React, { useState } from 'react';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function App() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions
    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = fruits.filter(fruit =>
        fruit.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  return (
    <div className="weather">
      <input
        type="text"
        className="search"
        value={query}
        onChange={handleChange}
        placeholder="Search fruits..."
      />
      
      <ul>
        {suggestions.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ Export always at the end
export default App;
