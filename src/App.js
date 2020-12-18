import React, {Component} from 'react';
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from "./components/Rank/Rank"

import './App.css';

const particlesOptions = {
  fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#6f091c",
            },
            links: {
              color: "#e2294b",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },

            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "polygon",
            },
            size: {
              random: true,
              value: 2,
            },
          },
          detectRetina: true,
}

function App() {
  return (
    <div className="App">
       <Particles className="particles"
        options={particlesOptions}
      />
      <Navigation/>
      <Logo/>
      <Rank />
      <ImageLinkForm/>
      {/* {
      
      <FaceRecognition/>} */}

    </div>
  );
}

export default App;
