import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';
import Octicon, {
  DeviceMobile, Mail , Link
} from "@primer/octicons-react";
import './Contacts.css';




export default class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            message:'',
            done: undefined,
          };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = e => {
          this.setState({[e.target.name]: e.target.value})


        }

        componentDidMount() {
            setTimeout(() => {
              this.setState({
                  done:true
              })
            }, 800);
          }

        async handleSubmit(e){
          e.preventDefault()
        
          const { name, email, message } = this.state
        
          await axios.post('/api/form', {
            name,
            email, 
            message
          })
     
        }

        // Alert(){
        //     this.setState({
        //      : false
        //     })
        // }





    render(){

        return (
            <div>
                
                {!this.state.done ? (
                  <ReactLoading className="center-load" type={"bars"} color={"black"} />
                 ) : (
        
           
          
                
                <div className='container-fluid container col-9 col-lg-6'>
                    <h3>Contact</h3>
                    <div className="container row">
                   <div className='col'>
                    <img src="https://media.giphy.com/media/c9g8VRiOsqDba/giphy.gif" alt=""/>
                   </div>

                  <div className='col'>

                   <div className="row">
                    <Octicon className='icons' icon={Link} size="medium" verticalAlign="middle" />{"  "}
                   
                    <h4 className="alert-heading mt-2 text">Contact info:</h4>
                    </div>
                    <div className="row">
                      <Octicon className='icons' icon={DeviceMobile} size="medium" verticalAlign="middle" />{"  "}
                      <h5 className='text pl-2'>Phone: 813-847-0551</h5>
                    </div>
                   
                    <div className="row">
                      <Octicon className='icons' icon={Mail} size="medium" verticalAlign="middle" />{"  "}
                      <h5 className='text'>Email: Joey7040@hotmail.com</h5>
                    </div>
                    </div>
                </div>


                <form className ='container mt-4'>
                    <div className="form-group">
                        <label forhtml="name">Name</label>
                        <input name='name'type="text" className="form-control" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label forhtml="email">Email</label>
                        <input name='email' type="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">I promise to never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label forhtml="message">Message</label>
                        <textarea name='message' rows='3' className="form-control" type="text" value={this.state.message} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="checkmark"/>
                        <label className="form-check-label" forhtml="checkmark">Click me if your not a robot.</label>
                    </div>
                    <button  type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>


                 )}
       
        </div>
        )
    }
}