import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Button from "./Button";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let key = "6403o1d018cabaa3376f1c4c467ec4ft";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "uKADNFC1XWjnU3OtSfyLp5wpkiDro6FODoXuZ7JBeZes16PAkmfDrNx3";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=30`;
    let headers = { Authorization: ` ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            placeholder="Type a word..."
            required="true"
          />

          <Button />
        </div>
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
