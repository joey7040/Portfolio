import React, {Component} from 'react';
import './Mission.css'
import {Link} from 'react-router-dom';
import pic from '../../assets/img/joeyteachjon.jpg'
import AnimatedHeader from '../AnimatedTyper/AnimatedTyper';
import Particles from 'react-particles-js';
// import ParticleMouse from '../Particles/Particles'












export default class Mission extends Component {
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    
                <div className="container">    
                <AnimatedHeader />
                </div>
                
                <Particles className="positionParticles"
                            params={{
                                "particles": {
                                    "number": {
                                    "value": 100,
                                    "density": {
                                        "enable": true,
                                        "value_area": 650
                                    }
                                    },
                                    "color": {
                                    "value": "#6495ED"
                                    },
                                    "shape": {
                                    "type": "circle",
                                    },
                                    "opacity": {
                                    "value": 0,
                                    "random": false
                                    },
                                    "size": {
                                    "value": 9,
                                    "random": false,
                                    "anim": {
                                        "enable": false
                                    }
                                    },
                                    "line_linked": {
                                    "enable": true,
                                    "opacity": 0.2
                                    },
                                    "move": {
                                    "enable": true,
                                    "speed": 1,
                                    "direction": "none",
                                    "random": true,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                    }
                                },
                                "interactivity": {
                                    "detect_on": "canvas",
                                    "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "bubble"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode":"grab"
                                    },
                                    "resize": true
                                    },
                                    "modes": {
                                    "bubble": {
                                        "distance": 200,
                                        "size": 10,
                                        "duration": 2,
                                        "opacity": 1,
                                        "speed": 5
                                    }
                                    }
                                },
                                "retina_detect": true
                            }} />
                            
                    </div>
                <div className="container">
                           
                            <img src={pic} className="pic rounded float-left" alt="..." />
                    <div className="info">
                    <div className="container ">
                        
                        </div>
                            <h2>About Joey</h2>
                            <p>
                            Hello world & welcome to my crazy mind. Thank you for stopping by to check out the digs. 
                            To tell you a little about my self, I'm a 
                            self taught software engineer in Tampa Fl. 
                            Born and raised in Orlando, I found a passion for all things computers
                            since the age of 11. I've been coding Html, Css and Javascript, since the myspace days in 2005.
                            My favorite programming languages
                            are Python, Typscript, and Javascript. Right now I work in the data analytics space. 
                            Creating Dynamic tools that allow analyst to find insights using
                            visulizations. I have experience working in both AWS and Azure environments for deployment. 
                            Knowledgable on  various services of the cloud providers as well inversed in docker & kubernetes.
                            On my free time I focus on learning frameworks and libraries that are cutting edge in todays technolgies. 
                            As a mid-level engineer I not only have instructed interns on the markets best coding practices.
                            I have built and orchestrated automated deployment processes using techlonogies such as jenkens code-deploy, terraform and cloudformation.
                            Having also organized git projects for enterprise SDLC life cycles. I have a whole hearted passion for development and strive to be legendary.
                        
                            </p>




                            <h2>Mission Statement</h2>
                            <p>
                            As a self taught software engineer I hope to inspire others to follow in my footsteps.
                            Make amazing things with nothing but your pure creativity and solving complex problems with 
                            logical solutions. As I continue my journey I hope to start a vlog soon to take you with me on
                            this wonderful journey. This can help others by providing a guide to success in whatever path they 
                            choose. Weather that by Cyber Security, Developing, or even Drone Piloting!

                            </p>


                            <Link to='/projects'>
                                <button className="btn btn-outline-primary mb-5 mr-3 pt-1 "><span>View Projects</span></button>
                            </Link>
                
                    </div>       
                </div>
                

            </div>
                
        )
    }
}