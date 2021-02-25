import React, { useState } from "react";

const SearchBar = () => {
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  console.log(textInput);
  return (
    <div>
      <input onChange={handleChange} type="text" />
      <button type="submit">Get User Repos</button>
    </div>
  );
};

export default SearchBar;
