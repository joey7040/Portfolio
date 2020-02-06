import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/skills';
import myhead from '../../assets/img/myhead.png'
import './Resume.css';





class Resume extends Component {
  render() {
    return(
      <div >
            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src={myhead}
                    alt="avatar"
                    className="avatar-img-2"
                    style={{height: '20rem'}}
                    />
                </div>

        

                <h2 style={{paddingTop: '2em'}}>Joey Rivera</h2>
                <h4 style={{color: 'grey'}}>Programmer</h4>
                
   
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>I’m a mid level full stack software engineer with experience in tech such as Python, Node, Databases & Cloud. I currently work at Trellance creating enterprise grade applications with a front end written in JavaScript as well as Python and MySQL on the back-end. I’ve also deployed and maintained cloud security architecture and created automated deployment processes for underlying cloud infrastructure. While also working on dynamic apis that create predictive analytics tools for the medical & financial sector.
                When I find free time, I focus on diving deeper into JS & Py frameworks and libraries learning AI and Machine learning as well as neural networks and Deep Learning. I’m in the works of making great technology that will drive the future in data analytics. Currently employed. </p>
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
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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
                jobDescription="Design and build user interface solutions using Javascript and SPA frameworks such as AngularJS, React, VueJS ,& Webix.
                with a Python ORM that interacts with a MySQL server.
                My duties also include working on Python server RESTful solutions in addition to Javascript tasks.
                As well as deliver results in software/technology sales proof of concept events, support events, and software upgrade events.
                I also participate in providing and implementing recommendations for security and privacy configuration options as it relates to AWS, with the goal of meeting various compliance guidelines.
                Deploy and monitor migrations for new customers transitioning to our custom software from a competitor’s solution.
                I'm also responsible for the enhancement existing systems by analyzing business objectives, preparing an action plan and identifying areas for modification and improvement.
                I create technical specifications and test plans & investigate and develop skills in new technologies."
                />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Verizon - Front End Software Engineer (Contractor)"
                jobDescription="Contracted with Verizon Wireless. 
                I create SPAs with angular 7 to be used by other Verizon employees. 
                My roll was responsible for documenting and managing multiple applications 
                and creating clean reusable and maintainable code. As well as create working 
                applications from mock-ups/wire-frames, and work closely with the design team 
                about approved designs. Communicating with clients about any potential road blocks 
                with development and gather user feedback to ensure quality of user experience. 
                Other technologies I would like to include where jQuery, JavaScript, TypeScript."
                />
              <Experience
                startYear={2018}
                endYear={2018}
                jobName="Germinal Resources - Front End Software Developer (Contractor)"
                jobDescription="Responsible for implementing visual elements that users see and interact 
                with in a web application. Develop new user-facing features, 
                Build reusable code and libraries for future use, Ensure the technical 
                feasibility of UI/UX designs, Optimize application for maximum speed and scalability, 
                Assure that all user input is validated before submitting to back-end.
                Create service calls that will make back-end calls and create apis to 
                communicate with mysql database.
                Speak directly with clients about design and brand identity to ensure content was in line with marketing teams approved designs. As well as meet short timeline deadlines. "
                />
              <Experience
                startYear={2017}
                endYear={2018}
                jobName="Free Lance Web Developer"
                jobDescription="Develop websites with Html, Css, Javascript, PHP and WordPress CMS.
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
                progress={75}
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
      </div>
    )
  }
}

export default Resume;