import React, { useState } from "react";
import "./Dictionary.css";
import Button from "./Button";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div>
          <input type="search" onChange={handleKeywordChange} className="Box" />

          <Button />
        </div>
      </form>
    </div>
  );
}
