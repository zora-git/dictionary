import React, { useState } from "react";
import axios from "axios";
import "./Audio.css";
import { ReactComponent as Headphones } from "./social/headphones-solid.svg";

export default function Audio(props) {
  let [audio, setAudio] = useState();
  let [isPlaying, setIsPlaying] = useState(false);

  function playAudio() {
    let audioElement = document.getElementById("AudioElementId");
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(true);
    }
  }

  function handleAudio(response) {
    console.log(response.data[0].phonetics[0].audio);
    setAudio(response.data[0].phonetics[0].audio);
  }

  let word = props.audio;
  let googleApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  axios.get(googleApiUrl).then(handleAudio);

  return (
    <div className="Audio">
      <div className="circle">
        <Headphones fill="#749ac3" onClick={playAudio} />
        <audio src={audio} type="audio/mp3" id="AudioElementId"></audio>
      </div>
    </div>
  );
}
