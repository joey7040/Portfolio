import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    render(){

        const tshirt = require('../assets/img/tshirt.jpg')


        return (
        <div >
        <div className="container"> 



            <div className=" mt-5 pt-2 card text-center ">
            
            <div className="card-header text-muted ">
                    Thank you for your interest!
                </div>
                <div className="card-body">
                    <h5 className="card-title">Products Coming Soon!</h5>
                    <p className="card-text">Your support is a blessing and is greatly apprechiated.</p>
                    <Link to="/donate" className="btn btn-outline-warning">Donate now</Link>
                </div>
                <div className="card-footer text-muted">
                    Please check back later.
                </div>
                </div>

            <div class="text-center mt-5 mb-5">
                <img src={tshirt} class="rounded img-fluid" alt="..."/>
            </div>


            
        </div>
        </div>    
        )
    }
}