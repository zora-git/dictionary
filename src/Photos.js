import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
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
    );
  } else {
    return null;
  }
}
