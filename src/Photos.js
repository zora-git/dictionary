import React from "react";
import "./Photos.css";
import Social from "./Social";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div>
        <div className="Photos">
          <h5>scroll right</h5>
          <section className="Gallery">
            {props.photos.map(function (photo, index) {
              return (
                <div className="images">
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img src={photo.src.medium} alt={photo.alt} key={index} />
                  </a>
                </div>
              );
            })}
          </section>
        </div>
        <Social />
      </div>
    );
  } else {
    return;
  }
}
