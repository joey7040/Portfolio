import React, { Component } from "react";
import "./Project.css";
import Octicon, {
  Globe,
} from "@primer/octicons-react";

class Project extends Component {
  state = {
    repositories: [],
    languages: []
  };

  componentDidMount = () => {
    this.repositoriesArray();
    this.languagesArray();
  };

  repositoriesArray = () =>
    fetch(
      `https://api.github.com/users/joey7040/${this.props.name}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const repositories = data;
        console.log(data.name)
        this.setState({
          repositories
        });
      });

      languagesArray = () =>
      fetch(this.props.languages)
        .then(res => res.json())
        .then(data => {
          const languages = data;
          this.setState({
            languages
          });
        });

  render() {
    let languagesArray = Object.keys(this.state.languages);
    return (
      <div className="container">
        <div className="card" >
          <div className="card-body">
          <h4 className="card-title"><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.name}</a></h4>
            <h5 className="card-text">{this.props.description}</h5>
            <h6>
            <Octicon icon={Globe} size="small" verticalAlign="middle" />{"  "}
               Languages Used:
            </h6>
              <ul>
                {languagesArray.map((language, index) => {
                  return <li key={index}>{language}</li>;
                })}
              </ul>
         </div>
      </div>
      </div>
    );
  }
}

export default Project;
