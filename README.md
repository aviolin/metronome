# Metronome
![Metronome app screenshot](https://i.ibb.co/sHJMGpW/metronome-screenshot-desktop.png)

A metronome made using React and the AudioContext API. 

View the app live at: https://aviolin.github.io/metronome

# Features
* Metronome using JavaScript workers and AudioContext.
* Customizable tempo, meter and clicks per beat.
* Animation visualizing the current beat using HTML canvas and requestAnimationFrame.
* Dark mode/light mode toggle.

# Installation
To install the app locally, make sure you have Node installed, and then:
1. Download this repository.
2. Navigate to the project folder in your console, and enter: `npm install`
3. To run the project, enter: `npm start`
4. The project will be running at http://localhost:3000/metronome.

# Motivation
This project was created to better understand React and how to implement an accurate JavaScript timer system, as well as to have a trusted online metronome to use in a pinch. The core functionality was inspired by this project: https://github.com/cwilso/metronome

# Browser Support
This app requires OS 14+ on iPhone Safari, and there is a lag between the audio and the visuals in Android Chrome.



