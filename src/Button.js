import "./Button.css";

export default function Button() {
  function changeStyle() {
    document.body.classList.add("light");
  }

  return (
    <div>
      <button onClick={changeStyle}> Enlighten Me </button>
    </div>
  );
}
