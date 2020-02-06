import React, {Component} from 'react';
import axios from 'axios';





export default class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            message:''
          
          };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = e => {
          this.setState({[e.target.name]: e.target.value})
        }
    
        async handleSubmit(e){
          e.preventDefault()
        
          const { name, email, message } = this.state
        
          const form = await axios.post('/api/form', {
            name,
            email, 
            message
          })
        }
    






    render(){
        return (
            <div>
           
            <div>
          
                
                <div className='container-fluid container col-6 mt-5 pt-5'>
                    <div>
                        <div class="alert alert-success" role="alert">
                        Your Message was sent successfully!
                        </div>
                    </div>
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">I promise to never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea rows='3' className="form-control" type="text" value={this.state.message} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="checkmark"/>
                        <label className="form-check-label" for="checkmark">Click me if your not a robot.</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>



            </div>
        </div>
        )
    }
}