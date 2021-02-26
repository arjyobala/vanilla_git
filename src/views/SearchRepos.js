import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";

const SearchRepos = () => {
  const [query, setQuery] = useState("");
  const [org, setOrg] = useState({});
  const [response, setResponse] = useState(null);
  const [repoList, setRepoList] = useState();
  const [descList, setDescList] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //Handle fetching on click of Search button
  const handleClick = () => {
    axios.get(`https://api.github.com/orgs/${query}`).then((res) => {
      setOrg(res.data);
    });
    if (org) {
      getRepoList(query);
      setChecked(false);
    }
  };

  //Handle fetching on Enter key press

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      axios.get(`https://api.github.com/orgs/${query}`).then((res) => {
        setOrg(res.data);
      });
      if (org) {
        getRepoList(query);
        setChecked(false);
      }
    }
  };

  //Get list of repos for selected organization

  const getRepoList = (query) => {
    axios
      .get(`https://api.github.com/orgs/${query}/repos`, {
        type: "public",
        page: 1,
        direction: "desc",
      })
      .then((res) => {
        setRepoList(res.data);
        setResponse(null);
      })
      .catch((error) => {
        setResponse(error.message);
      });

    console.log(response);
    console.log(repoList);
  };

  //Default sorting by stargazers counts
  useEffect(() => {
    setDescList(_.orderBy(repoList, ["stargazers_count"], ["desc"]));
  }, [repoList]);

  //Handle Alphabetical sorting descending
  const handleRadioClick = () => {
    const myOrderedAlphabeticalArray = _.orderBy(repoList, ["name"], ["desc"]);
    setDescList(myOrderedAlphabeticalArray);
    setChecked(!checked);
  };

  //Handle stargazers count sorting : descending
  const handleRadioStargazerClick = () => {
    const myOrderedArray = _.orderBy(repoList, ["stargazers_count"], ["desc"]);
    setDescList(myOrderedArray);
    setChecked(!checked);
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          display: "inline-flex",
          paddingBottom: "10px",
        }}
      >
        <SearchBar
          query={query}
          handleChange={handleChange}
          onKeyUp={handleKeyPress}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <div>
          Sort desc stargazer:{" "}
          <input
            type="radio"
            value="stargazers"
            id="stargazer"
            name="stargazers_count"
            checked={!checked}
            onClick={handleRadioStargazerClick}
          ></input>
        </div>
        <div>
          Sort alphabetically(Descending):{" "}
          <input
            name="alphabetical"
            type="radio"
            id="desc"
            checked={checked}
            onClick={handleRadioClick}
          ></input>
        </div>
      </div>
      <Results org={org} list={descList} response={response} />
    </div>
  );
};

export default SearchRepos;
