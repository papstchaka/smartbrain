import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Navigation from "../components/Navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    name: "",
    email: "",
    id: "",
    entries: 0,
    joined: ""
  },
  message: "",
  statusInvalid: false
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [{}],
      route: 'signin',
      isSignedIn: false,
      user: {
        name: "",
        email: "",
        id: "",
        entries: 0,
        joined: ""
      },
      message: "",
      statusInvalid: false
    }

  }

  loadUser = (data) => {
    this.setState({user: {
      name: data.name,
      email: data.email,
      id: data.id,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    if (Object.keys(data.outputs[0].data).length === 0) {
      this.setState({boxes: [{}], message: "no faces found", statusInvalid: false});
      return [];
    }
    const faces = data.outputs[0].data.regions;    
    return (faces.map((elements) => {
      const face = elements.region_info.bounding_box;
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      }
    }));
  }

  displayFaceBox = (boxes) => {
    var ending;
    if (boxes.length === 1)
    {
      ending = " face"
    }
    else
    {
      ending = " faces"
    }
    this.setState({boxes: boxes, message: "found " + boxes.length + ending});
  }

  onInputChange = (event) => {
    this.setState({'input': event.target.value})
  }

  onPictureSubmit = () => {
    this.setState({'imageUrl': this.state.input, "message": "", statusInvalid: false});
    fetch('https://strawberry-pie-56167.herokuapp.com/imageurl', {
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          input: this.state.input,
      })
    })
      .then(response => {
        if (response.status == 503) {
          this.setState({boxes: [{}], message: "no valid image url", statusInvalid: true});
        }
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          var detected;
          if (Object.keys(response.outputs[0].data).length === 0) {
            detected = 0;
          }
          else {
            detected = response.outputs[0].data.regions.length;
          }
          fetch('https://strawberry-pie-56167.herokuapp.com/image', {
            method: "put",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id,
                detected: detected
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}));
            })
          .catch(err => {            
            console.log(err);
          })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => {
        if (this.state.statusInvalid) {
          console.log(err);
        }
        else {
          this.setState({boxes: [{}], message: "backend not responding", statusInvalid: true});
        }
      });
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState)
    } else if (route === "home") {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  deleteProfile = () => {
    fetch('https://strawberry-pie-56167.herokuapp.com/deleteprofile', {
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          email: this.state.user.email,
      })
    })
    this.onRouteChange("signin")
  }

  render() {
    const { imageUrl, boxes, route, isSignedIn, message, statusInvalid } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} deleteProfile={this.deleteProfile}/>
        { route === 'home' ?
          <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm 
              onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}
            />
            <h2 className="white" style={{height: "15px"}}>{message}</h2>
            { statusInvalid ?
              <></>
            :
              <FaceRecognition boxes={boxes} imageUrl={imageUrl}/>
            }
          </div>
          : 
          (
            route === "signin" ?
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
        <a href="https://github.com/papstchaka" target="_blank" style={{position: "fixed", color: "black", bottom: "5px", right: "5px"}}>[2020] Alexander Christoph</a>
      </div>
    );
  };
}

export default App;