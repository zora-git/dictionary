import logo from "./name-in-arc.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <h1>Dictionary</h1> <Dictionary />{" "}
      </main>
      <footer className="App-footer">
        <small>Coded by HJ Park</small>
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
