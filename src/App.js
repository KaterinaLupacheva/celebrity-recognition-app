import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Celebs from './components/Celebs/celebs';
import './App.css';

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: process.env.REACT_APP_CLARIFAI_API_KEY
});

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
       speed: 4
    },
    shape: {
      type: "circle"
    }
  },
  interactivity: {
    detect_on: "window",
    events: { 
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      celebs: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    
    const width = Number(image.width);
    const height = Number(image.height);
    console.log('Image ' + width + ' ' + height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.CELEBRITY_MODEL,
        this.state.input)
      .then(response => {
        const celebs = response.outputs[0].data.regions[0].data.concepts;
        const firstFive = celebs.slice(0,5);
        const newArray = firstFive.map(celeb => ({
          name: celeb.name,
          probability: celeb.value
        }));
        this.setState({celebs: newArray});
        console.log(JSON.stringify(newArray, null, 2));
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  render() {
    const { imageUrl, box, celebs } = this.state;
    
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <div>
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <div className='image-result'>
              <FaceRecognition box={box} imageUrl={imageUrl} />
              {celebs.length > 0 ? <Celebs celebs={celebs} /> : '' }
            </div>
        </div>
      </div>
    );
  }
}

export default App;
