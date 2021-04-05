import React, {Component} from 'react';
import Particles from "react-tsparticles";
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from "./components/Rank/Rank"
import './App.css';


const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
        detectsOn: "parent",
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
                opacity: 0.6,
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

const initialState = {

    input: '',
    imageUrl: '',
    box: {},
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
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined
            }
        })
    }

    calculateFaceBox = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage')
        const width = Number(image.width)
        const height = Number(image.height)
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
        this.setState({input: event.target.value})
    }

    onImageSubmit = () => {
        this.setState({imageUrl: this.state.input});
        fetch('http://localhost:3000/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                input: this.state.input
            })
        })
            .then(response=>response.json())
            .then(response => {
                if (response) {
                    fetch('http://localhost:3000/image', {
                        method: 'put',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            id: this.state.user.id
                        })
                    })
                        .then(response => response.json())
                        .then(count => {
                            this.setState(Object.assign(
                                this.state.user,
                                {entries: count}))
                        })
                        .catch(console.log)
                }
                this.displayFaceBox(this.calculateFaceBox(response))
            })
            .catch(err => console.log(err))
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState)
        } else if (route === 'home') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: route})
    }


    render() {
        const {isSignedIn, imageUrl, route, box} = this.state;
        return (
            <div className="App">
                <Particles className="particles"
                           params={particlesOptions}
                />
                <Navigation isSignedIn={isSignedIn}
                            onRouteChange={this.onRouteChange}
                />
                {
                    route === 'home'
                        ? <div>
                            <Logo/>
                            <Rank name={this.state.user.name}
                                  entries={this.state.user.entries}
                            />
                            <ImageLinkForm
                                onInputText={this.onInputChange}
                                onButtonSubmit={this.onImageSubmit}
                            />
                            <FaceRecognition box={box} imageUrl={imageUrl}/>
                        </div>
                        : (
                            route === 'signin'
                                ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                                : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                        )
                }
            </div>
        );
    }
}

export default App;
