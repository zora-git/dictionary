import React from "react";
import "./Gallery.css";

const appStyle = {
  width: "500px",
  height: "150px",
  whiteSpace: "nowrap", // used only to display text as not wrapped lines
  overflow: "scroll",
};

const Gallery = () => {
  const positionRef = React.useRef(0);
  const handleScroll = (e) => {
    const x = e.currentTarget.scrollLeft;
    if (x !== positionRef.current) {
      positionRef.current = x;
      console.log("Horizontal scroll event occurred ...");
    }
  };
  return (
    <div style={appStyle} onScroll={handleScroll} className="Photos">
      <ul>
        <li>Some very long text test here ...</li>
        <li>Some very long text test here ...</li>
        <li>Some very long text test here ...</li>
        <li>Some very long text test here ...</li>
        <li>Some very long text test here ...</li>
        <li>Some very long text test here ...</li>
        <li>Some very long text test here ...</li>
        <li>Some very long text test here ...</li>
        <li>Some very long text test here ...</li>
      </ul>
    </div>
  );
};

export default Gallery;
