import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';
import Spinner from './Spinner';
import 'normalize.css';
import './styles/main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMusic, faCog } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
/* function SettingsButton(props) {
  let classes = "btn-settings hamburger";
  if (props.isMenuOpen) {
    classes = "btn-settings hamburger open";
  }

  return (
      <button className={classes} name="menu-toggle" onClick={props.onClick}>
        <span></span>
        <span></span>
        <span></span>
        <FontAwesomeIcon icon={faCog} />
      </button>
  );
} */

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
          <a href="https://github.com/aviolin/metronome/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
          {/* <SettingsButton onClick={this.props.onClick} isMenuOpen={this.props.isMenuOpen} /> */}
      </div>
    );
  }
}

/* class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = "mobile-menu";
    if (this.props.isMenuOpen) {
      classes += " mobile-menu-open";
    }

    return(
      <div className={classes}>
        <div className="spinner-inputs">
          <Spinner label="Beats per bar" id="beats" onClick={this.props.onClick} value={this.props.beatsPerBar} />
          <Spinner label="Clicks per beat" id="clicks" onClick={this.props.onClick} value={this.props.clicksPerBeat} />
        </div>
        <div className="menu-row">
          <button className="color color-purple" id="col1" value="#d7d|#f7f" onClick={this.props.onClick}>
            {this.props.color === "#d7d" ? <FontAwesomeIcon icon={faCheck} size="xs"/> : null}
          </button>
          <button className="color color-blue" id="col2" value="#77d|#77f" onClick={this.props.onClick}>
            {this.props.color === "#77d" ? <FontAwesomeIcon icon={faCheck} size="xs"/> : null}
          </button>
          <button className="color color-green" id="col3" value="#7d7|#7f7" onClick={this.props.onClick}>
            {this.props.color === "#7d7" ? <FontAwesomeIcon icon={faCheck} size="xs"/> : null}
          </button>
          <button className="color color-grey" id="col4" value="#777|#999" onClick={this.props.onClick}>
            {this.props.color === "#777" ? <FontAwesomeIcon icon={faCheck} size="xs"/> : null}
          </button>
        </div>
        <div className="menu-row">
          <p>Use FireFox for the best experience.<br/>
           <a href="https://github.com/aviolin/metronome" target="_blank">View the source on Github.</a>
          </p>
          
        </div>
      </div>
    );
  }
} */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#d7d",
      colorHighlight: "#f7f",
      isMenuOpen: false,
      beatsPerBar: 1,
      maxBeats: 12,
      minBeats: 1,
      clicksPerBeat: 1,
      maxClicks: 12,
      minClicks: 1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  fadeAnimation(id) {
    document.getElementById(id).classList.remove("animation-fade");
    void document.getElementById(id).offsetWidth;
    document.getElementById(id).classList.add("animation-fade");
  }

  handleClick(e) {
    /* let nextBeats, nextClicks = 0;
      switch (e.target.name) {
        case "menu-toggle":
          this.setState(state => ({isMenuOpen: !state.isMenuOpen }));
          return;
        case "increment-beats":
          this.fadeAnimation("beats");
          nextBeats = parseInt(this.state.beatsPerBar)+1;
          this.setState(state => ({beatsPerBar: nextBeats > state.maxBeats ? state.beatsPerBar : nextBeats}));
          return;
        case "decrement-beats":
          this.fadeAnimation("beats");
          nextBeats = parseInt(this.state.beatsPerBar)-1;
          this.setState(state => ({beatsPerBar: nextBeats < state.minBeats ? state.beatsPerBar : nextBeats}));
          return;
        case "increment-clicks":
          this.fadeAnimation("clicks");
          nextClicks = parseInt(this.state.clicksPerBeat)+1;
          this.setState(state => ({clicksPerBeat: nextClicks > state.maxClicks ? state.clicksPerBeat : nextClicks}));
          return;
        case "decrement-clicks":
          this.fadeAnimation("clicks");
          nextClicks = parseInt(this.state.clicksPerBeat)-1;
          this.setState(state => ({clicksPerBeat: nextClicks < state.minClicks ? state.clicksPerBeat : nextClicks}));
          return;
        default:
          break;
      }

    
    this.updateColors(e.target.value);
    this.fadeAnimation(e.target.id); */

  }

  updateColors(colorString) {
/*     let colors = colorString.split("|");
    let root = document.documentElement;
    root.style.setProperty('--accentcolor', colors[0]);
    root.style.setProperty('--accentcolorhighlight', colors[1]);

    this.setState(state => ({
      color: colors[0],
      colorHighlight: colors[1],
    })); */
  }

  render() {
    return(
      <div className="app">
        <Navbar onClick={this.handleClick} isMenuOpen={this.state.isMenuOpen}/>
        {/* <MobileMenu isMenuOpen={this.state.isMenuOpen} onClick={this.handleClick} color={this.state.color} beatsPerBar={this.state.beatsPerBar} clicksPerBeat={this.state.clicksPerBeat} /> */}
        <Metronome color={this.state.color} colorHighlight={this.state.colorHighlight} beatsPerBar={this.state.beatsPerBar} clicksPerBeat={this.state.clicksPerBeat} />
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