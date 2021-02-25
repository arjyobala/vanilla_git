import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";

const SearchRepos = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);

  const handleClick = () => {
    axios.get(`https://api.github.com/users`).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          margin: "auto",
          display: "inline-flex",
        }}
      >
        <SearchBar query={query} handleChange={handleChange} />
        <button onClick={handleClick}>Get Repos</button>
      </div>
      <Results list={list} />
    </div>
  );
};

export default SearchRepos;
