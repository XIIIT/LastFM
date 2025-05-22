import { useState, useRef, KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      console.log("Enter ничего не делает пока-что =(");
    }
  };

  return (
    <div className={`search-container ${isFocused ? "focused" : ""}`}>
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Search for music..."
          className="search-input"
        />
        {query && (
          <button
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
        <Link
          to={`/search?query=${encodeURIComponent(query)}`}
          className={`search-button ${!query ? "disabled" : ""}`}
          onClick={(e) => {
            if (!query.trim()) {
              e.preventDefault();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
