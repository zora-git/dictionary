import "./App.css";
import Dictionary from "./Dictionary";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <div>
      <div className="d-none d-md-block">
        <AnimatedCursor
          innerSize={30}
          outerSize={70}
          color="116, 154, 195"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          trailingSpeed={4}
          clickables={[
            "a",
            'input[type="search"]',
            'input[type="submit"]',
            'input[type="image"]',
            "select",
            "textarea",
            "button",
            ".link",
            ".circle",
          ]}
        />
      </div>
      <div className="App">
        <header className="App-header"></header>

        <main>
          <h1>
            <a href="/">Dictionary</a>
          </h1>{" "}
          <Dictionary />{" "}
        </main>
      </div>
    </div>
  );
}
