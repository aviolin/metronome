/**
 * Includes initial ReactDOM.render(), in addition
 * to theming functionality.
 * 
 * Acts as a wrapper to the rest of the components.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './styles/main.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Metronome from './Metronome';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lightTheme: {
        background: "#f0f0f0",
        light: "#ccc",
      },
      darkTheme: {
        background: "#424242",
        light: "#595959"
      },
      theme: "dark"
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((state) => ({ theme: state.theme === "dark" ? "light" : "dark"}));
  }

  render() {
    return(
      <div className={this.state.theme === "dark" ? "theme-dark" : "theme-light"}>
        <div className="app-wrapper">
          <div className="app">
            <Navbar 
              onClick={null} 
              toggleTheme={this.toggleTheme} 
              theme={this.state.theme} 
            />
            <Metronome 
              theme={this.state.theme === "dark" ? this.state.darkTheme : this.state.lightTheme} 
            />
          </div>  
          <footer>
            <a href="https://github.com/aviolin/metronome/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;View the source on Github
            </a>
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