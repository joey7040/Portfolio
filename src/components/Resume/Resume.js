import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/skills';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom'
import myhead from '../../assets/img/meinwater.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRProject } from '@fortawesome/free-brands-svg-icons';





class Resume extends Component {
  state = {
    done: undefined
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        done: true
      })
    }, 800);
  }



  render() {


    return(
      <div>


          {!this.state.done ? (
          <ReactLoading className="center-load" type={"bars"} color={"black"} />
          ) : (






            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src={myhead}
                    alt="avatar"
                    className="avatar-img-2"
                    style={{height: '25rem', width:'25rem'}}
                    />
                </div>

        

                <h2 style={{paddingTop: '2em'}}>Joey Rivera</h2>
                <div className="row">
                
                <div className="ml-3 mt-3 mr-4">
                <Link className='btn btn-primary' to="/resume/JRivera-Resume-2020.pdf" target="_blank" download>Download CV</Link>
                </div>
                <FontAwesomeIcon icon={faCoffee} size="3x"className="m-2" ></FontAwesomeIcon>
                </div>
                <h4 style={{color: 'grey'}}>Fullstack Developer</h4>
                
   
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>Hello, my name is Joey Rivera, I’m a mid to senior level full stack developer. Every day I work with technologies such as Python, Javascript, Linux, & Aws Cloud infrustructue. 
                Working at my current company Trellance, has placed me in the center of making great technology that will drive the future in data analytics for the credit union financial services space.    
                While creating new features for the ironsafe platform I’ve also createdm deployed, and maintained cloud security architecture. As well as created automated deployment processes for the platforms underlying cloud infrastructure in AWS.
                For little over a year now I've been working on dynamic apis that create predictive analytics tools for the medical & financial sector. I encourage those who are curious to check out <a href="https://www.trellance.com/ironsafe-data-extraction-platform/">Ironsafe here. </a>
                When I find free time, I practice for competitve esports and make content to help others improve their skillsets in programming pradigms popular in the job market today.
                I aspire to contribute as much as possible back to the community that has given me much more than I could ever ask for. </p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5>Address</h5>
                <p>3350 W Hillsborough ave Tampa FL</p>
                <h5>Phone</h5>
                <p>(813)-847-0551</p>
                <h5>Email</h5>
                <p>joey7040@hotmail.com</p>



               
               
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <div className="social-links-2">

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/joseph-i-rivera/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/joey7040" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                </div>
              
              
              </Cell>
              <Cell className="resume-right-col" col={8}>
              
              <h2>Experience</h2>


              <Experience
                startYear={2019}
                endYear="Present"
                jobName="Trellance - Software Engineer"
                jobDescription="    
                 Created dynamic apis and core connectors for data pipelines.
                 Developed and maintained enterprise applications in production software.
                 Provide continuous support for production issues.
                 Vulnerability patch management.
                 Design and build user interfaces in JavaScript es6 based off business requirements.
                 Deployed and maintained cloud SaaS platform. 
                 Created automated deployment processes for underlying cloud infrastructure."
                />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Verizon - Front End Software Engineer (Contractor)"
                jobDescription="
                Coded clean syntax for enterprise grade web applications. 

                Worked closely with a design team to create working applications from mock-ups.  
                
                Created Bootstrap & JavaScript libraries with Angular 7.  
                
                Wrote reusable code and debugged issues within interfaces. 
                
                Managed multiple applications at once and communicate with teams across Verizon on development solutions. "
                />
              <Experience
                startYear={2018}
                endYear={2018}
                jobName="Germinal Resources - Front End Software Developer (Contractor)"
                jobDescription="
                Provided web development services for small businesses, startups, & large companies.  

                Created dynamic front-end interfaces with AngularJS.  
                
                Created mobile first native applications with Angular mobile UI and Cordova. 
                
                Created favicons and other application images to match application themes and structure.  "
                />
              <Experience
                startYear={2017}
                endYear={2018}
                jobName="Free Lance Web Developer"
                jobDescription="
                Provided web development services for clients from various sources. 

                Created dynamic front-end interfaces in TypeScript with Angular.  

                Created mobile first native applications with Angular mobile UI and Cordova. 

                Built websites using HTML5, CSS3, JavaScript, jQuery & WordPress.

                http://wetruerealty.com/
                
                http://www.framco.org/
                
                http://congo.io/
                
                https://justmarry.com/
                
                http://www.onswann.com/#destination
                
                http://extremeautolights.com/"
                />
            
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Education</h2>

                
              <Education
                startYear={2014}
                endYear={2016}
                schoolName="Hillsborough Community College"
                schoolDescription="While pursuing my computer 
                science associate degree, 
                I have developed an understanding of the 
                basic principles and practices needed to program and m
                aintain computer programs and computer systems. 
                I have also completed many of the general education courses required 
                by most four-year universities."
                />



              <Education
                startYear={2017}
                endYear={2018}
                schoolName="Udemy "
                schoolDescription="Certification to make interactive websites and web applications"
                />
              


              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
             
              <Skills
                skill="Linux"
                progress={60}
                />
              <Skills
                skill="AWS"
                progress={70}
                />
              <Skills
                skill="MySql"
                progress={100}
                />
              <Skills
                skill="MongoDB"
                progress={70}
                />
              <Skills
                skill="Python"
                progress={100}
                />
              <Skills
                skill="Java"
                progress={60}
                />
             
              <Skills
                skill="HTML/CSS"
                progress={90}
                />
             
              <Skills
                skill="NodeJS"
                progress={90}
                />
             
              <Skills
                skill="React"
                progress={100}
                />
              <Skills
                skill="Vue"
                progress={100}
                />
              <Skills
                skill="Angular"
                progress={85}
                />


          </Cell>
        </Grid>


          )}

      </div>
    )
  }
}

export default Resume;