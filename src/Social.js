import React from "react";
import "./Social.css";
import { ReactComponent as Github } from "./social/github.svg";
import { ReactComponent as Linkedin } from "./social/linkedin.svg";
import { ReactComponent as Globe } from "./social/globe-solid.svg";
import logo from "./name-in-arc.svg";

export default function Social() {
  return (
    <div>
      <div className="social-links d-flex justify-content-center">
        <div className="outer-circle">
          <a
            href="https://github.com/zora-git/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            <div className="circle">
              <Github fill="#749ac3" />
            </div>
          </a>
        </div>
        <div className="outer-circle">
          <a
            href="https://www.linkedin.com/in/hyun-jung-park-149962275/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <div className="circle">
              <Linkedin fill="#749ac3" />
            </div>
          </a>
        </div>
        <div className="outer-circle">
          <a
            href="https://hjp-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <div className="circle">
              <Globe fill="#749ac3" />
            </div>
          </a>
        </div>
      </div>
      <footer className="App-footer">
        <small>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/hyun-jung-park-149962275/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>HJ Park</strong>
          </a>
        </small>
        <div className="Logo-section">
          <a
            href="https://hjp-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}
