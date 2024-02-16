import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="container">
        <section className="search-word">
          <h2>{props.results.word}</h2>/ {props.results.phonetic} /
        </section>
        <section className="list">
          {" "}
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index} className="results">
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
