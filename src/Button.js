import { useState, useEffect } from "react";
import "./Button.css";

export default function Button() {
  const [color, setColor] = useState("#282C34");
  const [isActive, setIsActive] = useState(false);

  function buttonColorChange() {
    setIsActive(true);
  }

  const click = (color) => {
    setColor(color);
  };

  let newcolor = "#e0e0e0";

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <button
        style={{
          backgroundColor: isActive ? "#e0e0e0" : ``,
          color: isActive ? `#749ac3` : ``,
        }}
        onClick={() => {
          click(newcolor);
          buttonColorChange();
        }}
        className="Button"
      >
        {" "}
        Enlighten Me{" "}
      </button>
    </div>
  );
}
