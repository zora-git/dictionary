import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Button from "./Button";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
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
    </div>
  );
}
