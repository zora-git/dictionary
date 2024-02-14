import logo from "./name-in-arc.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main> Hello </main>
      <footer className="App-footer">
        <small>Coded by HJ Park</small>
        <div className="Logo-section">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </footer>
    </div>
  );
}
