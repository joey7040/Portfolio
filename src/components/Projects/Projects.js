import React, { Component } from "react";
import "./Projects.css";
import ReactLoading from 'react-loading';
import Project from "./Project/Project.js";

class projects extends Component {
  state = {
    projects: [],
    done: undefined
  };


  componentDidMount() {
    setTimeout(() => {
      this.appData();
    }, 1200);
  }

  appData = () =>
    fetch("https://api.github.com/users/joey7040/repos?client_id=1516988d5eeb454cbcaf&client_secret=97675a424a0020c7d29bcf2140be1a12e62491a9")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (Array.isArray(data)) {
          const projects = [...data];
          this.setState({
            projects,
            done: true
          });
        }
      })
   .catch(error => console.log(error));

  render() {
    let projectArray = this.state.projects.map(project => {
      return  (
        <Project
          key={project.id}
          url={project.svn_url}
          name={project.name}
          description={project.description}
          languages={project.languages_url}
        />
      ) 
    });
    return  (

      <div>
          
          {!this.state.done ? (
          <ReactLoading className="center-load" type={"bars"} color={"black"} />
          ) : (
        
        
          <div>
          {this.state.projects.length > 0 ? <h3 className="container">Projects</h3> : null}
          <div>{projectArray}</div>
          </div>

        )}

        </div>
      
    );
  }
}

export default projects;
