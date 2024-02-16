import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="indent">
        <div className="definition"> {props.meaning.definition}</div>
        <div className="example">
          <em>{props.meaning.example}</em>
        </div>

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
