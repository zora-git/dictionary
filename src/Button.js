import { useState, useEffect } from "react";
import "./Button.css";

export default function Button() {
  const [color, setColor] = useState("#282C34");
  const click = (color) => {
    setColor(color);
  };

  let newcolor = "#e0e0e0";

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <button onClick={() => click(newcolor)} className="Button">
        {" "}
        SEARCH{" "}
      </button>
    </div>
  );
}
