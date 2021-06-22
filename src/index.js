import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';
import Spinner from './Spinner';
import 'normalize.css';
import './styles/main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <FontAwesomeIcon icon={faMusic} />&nbsp;&nbsp;&nbsp;Metronome
        </div>
        <div>
          <button onClick={this.props.toggleTheme}>
            {
              this.props.theme === "dark" ? 
              <><FontAwesomeIcon icon={faSun} />&nbsp;&nbsp;Too dark?</>
              :
              <><FontAwesomeIcon icon={faMoon} />&nbsp;&nbsp;Too bright?</>
            }
            
          </button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      maxBeats: 12,
      minBeats: 1,
      maxClicks: 12,
      minClicks: 1,
      lightTheme: {
        background: "#f0f0f0",
        light: "#ccc",
      },
      darkTheme: {
        background: "#424242",
        light: "#595959"
      },
      theme: "light"
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((state) => ({ theme: state.theme === "dark" ? "light" : "dark"}));
  }

  fadeAnimation(id) {
    document.getElementById(id).classList.remove("animation-fade");
    void document.getElementById(id).offsetWidth;
    document.getElementById(id).classList.add("animation-fade");
  }

  render() {
    return(
      <div className={this.state.theme === "dark" ? "theme-dark" : "theme-light"}>
        <div className="app-wrapper">
          <div className="app">
            <Navbar onClick={null} toggleTheme={this.toggleTheme} theme={this.state.theme} />
            <Metronome 
              theme={this.state.theme === "dark" ? this.state.darkTheme : this.state.lightTheme} 
            />
          </div>  
          <footer>
            <a href="https://github.com/aviolin/metronome/" target="_blank"><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;View the source on Github</a>
            <p>&copy; 2021, Arlo Adams</p>
          </footer>
        </div>
      </div>
    ); 
  }
}

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);