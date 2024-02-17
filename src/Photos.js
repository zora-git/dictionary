import React from "react";
import "./Photos.css";
import Social from "./Social";
import { ReactComponent as Horizontal } from "./social/left-right-solid.svg";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div>
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
          <div className="scroll">
            <div>
              scroll
              <Horizontal fill="#749ac3" />{" "}
            </div>{" "}
          </div>
        </div>
        <Social />
      </div>
    );
  } else {
    return;
  }
}
