import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="container">
        <section>
          <h2>{props.results.word}</h2>/ {props.results.phonetic} /
        </section>
        <section className="list">
          {" "}
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
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
