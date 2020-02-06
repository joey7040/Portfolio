import React, {Component} from 'react';





export default class Contact extends Component{
    render(){
        return (
            <div>
           
            <div>
          
                
                <div className='container-fluid container col-6 mt-5 pt-5'>
                
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="sendersName" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="sendersEmail"/>
                        <small id="emailHelp" className="form-text text-muted">I promise to never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea type="text" rows='3' className="form-control" id="sendersMessage"/>
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