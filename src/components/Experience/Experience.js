import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {






  render() {
    let text = this.props.jobDescription
    let newText = text.split("\n").map((item, i) => {
      return <p key={i}>{item}</p>;
      });




    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p>{newText}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
