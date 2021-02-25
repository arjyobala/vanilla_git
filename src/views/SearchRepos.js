import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";

const SearchRepos = () => {
  const [query, setQuery] = useState("");
  const [org, setOrg] = useState({});
  const [repos, setRepos] = useState();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);

  const handleClick = () => {
    axios.get(`https://api.github.com/orgs/${query}`).then((res) => {
      setOrg(res.data);
    });
  };

  useEffect(() => {
    if (org !== null) {
      axios
        .get(`https://api.github.com/orgs/${query}/repos`, {
          type: "public",
          per_page: "10",
        })
        .then((res) => {
          setRepos(res.data);
        });
    }
  }, [org]);

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
      <Results org={org} list={repos} />
    </div>
  );
};

export default SearchRepos;
