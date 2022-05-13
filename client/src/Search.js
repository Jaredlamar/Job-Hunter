import React from 'react'
import './Search.css';

function Search({jobSearch,onSearchChange }) {
  return (
    <div className="searchbar">
    
    <input
      type="text"
      id="search"
      placeholder="                                                              Search Job Title..."
      value = {jobSearch}
      onChange={(e) =>onSearchChange(e.target.value)}
    />
  </div>
);
}

export default Search;