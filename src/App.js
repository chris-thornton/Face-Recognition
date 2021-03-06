import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
                particles: {
                  number: {
                    value: 100,
                    density: {
                      enable: true,
                      value_area: 800,
                    }
                  }
                }
              };

const flex = {
  display: 'flex',
  flexWrap: 'wrap'
};

const initialState = {
      input: '',
      imageUrl: '',
      boxes: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  calcFaceLocation = (data) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }

  displayFaceBox = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://morning-reaches-66450.herokuapp.com/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: this.state.input
            })
          })
    .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://morning-reaches-66450.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
          .catch(console.log)
        }
        this.displayFaceBox(this.calcFaceLocation(response))
          })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, boxes } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
              params={particlesOptions}
            />
        { route === 'home'
        ? <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        <Logo isSignedIn={isSignedIn}/>
        <Rank name={this.state.user.name} 
        entries={this.state.user.entries}/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        isSignedIn={isSignedIn}
        />
        <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
        </div>
        : (
          route === 'signin'
          ? <div>
        <div style={flex}>
        <Logo isSignedIn={isSignedIn}/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        isSignedIn={isSignedIn}
        />
        <SignIn loadUser={this.loadUser} 
        onRouteChange={this.onRouteChange}/>
        </div>
        <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
        </div>
        : <Register loadUser={this.loadUser}
        onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
