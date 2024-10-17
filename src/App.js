import "./App.css";
import navLogo from "./assets/nav-logo.svg";

import githubIcon from "./assets/github-icon.svg";

import xTwitterIcon from "./assets/x-icon.svg";
import discordIcon from "./assets/discord-icon.svg";

function App() {
  return (
    <div className="App d-flex flex-column">
      <div className="App-header">
        <button className="btn btn-primary d-flex align-items-center nav-button w-100 bg-transparent">
          <img src={navLogo} alt="Nav Logo" className="img-fluid" />
        </button>
      </div>

      <div className="body-wrapper d-flex flex-fill">
        <div className="d-flex flex-column text-center">
          <div className="flex-fill align-content-center mb-4">
            <p className="landing-text mt-auto">
              Trade assets and earn by providing liquidity on the most secure
              decentralized financial system.
            </p>
            <button className=" btn btn-primary d-flex align-items-center launch-button mt-4">
              Launch App
            </button>
            <div className="d-flex mt-3">
              <a className="links mx-2">Learn</a>
              <a className="links mx-2">Github</a>
              <a className="links mx-2">Audit</a>
            </div>
          </div>
          <footer className="text-white d-flex mt-auto mb-4">
            <a className="links mx-2">
              <img src={githubIcon} alt="GitHub" className="img-fluid" />
            </a>
            <a className="links mx-2">
              <img src={xTwitterIcon} alt="Twitter" className="img-fluid" />
            </a>
            <a className="links mx-2">
              <img src={discordIcon} alt="Discord" className="img-fluid" />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
