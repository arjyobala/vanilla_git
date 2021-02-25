import React from "react";

const SearchBar = ({ query, handleChange }) => {
  return (
    <div>
      <input value={query} onChange={handleChange} type="text" />
    </div>
  );
};

export default SearchBar;
