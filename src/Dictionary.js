import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Button from "./Button";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let key = "6403o1d018cabaa3376f1c4c467ec4ft";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;

    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div>
          <input
            type="search"
            onChange={handleKeywordChange}
            className="Box"
            required="true"
          />

          <Button />
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
