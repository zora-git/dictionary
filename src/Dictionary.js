import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();

  function search(event) {
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
          <div>
            <input type="submit" value="Search" className="Button" />
          </div>
        </div>
      </form>
    </div>
  );
}
