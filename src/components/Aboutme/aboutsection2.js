import React from 'react';
import { Link } from 'react-router-dom';
import BarChart from '../Charts/BarChart';


import './Aboutme.css'


const Section2 = () =>{
    return <div className="container-fluid ab-2">
    <div className="container">
    <div className="ab-text-2 row">
        <div className="col">
            <BarChart/>
        </div>
        <div className='col'>
            <div>
            <h2 className="ab-title-2">My Skills</h2>
            <h5>I'm a software engineer based in sunny Tampa, Florida.</h5>
            <p>
                For a little over 3 years, I've been turning complex problems into simple,
                beautiful and intuitive designs. When I'm not coding, instagramming or pushing pixels, 
                you'll find me fathering my son, skateboarding or tinkering on cool stuff.
            </p>
                <Link to='metrics' className="btn btn-primary">See more metrics on me</Link>
            </div>
        </div>
    </div>
    </div>
</div>
}

export default Section2