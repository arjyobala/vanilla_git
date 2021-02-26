import React from "react";

const SearchBar = ({ query, handleChange }) => {
  return (
    <div>
      <input
        style={{ marginRight: "5px", padding: "10px" }}
        value={query}
        onChange={handleChange}
        type="text"
        placeholder="Enter Organization Name"
      />
    </div>
  );
};

export default SearchBar;
