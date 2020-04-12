import React, {Component} from 'react';
import './Aboutme.css'


const Section1 = () =>{
    return <div className="container-fluid ab-1">
            <div className="container ">
                <div className='row'>
                    <div className='col'>
                        <h2 className="ab-title-1">About me</h2>
                        <div className="ab-text-1">
                            <h5>I'm a software engineer based in sunny Tampa, Florida.</h5>
                            <p>
                                For a little over 3 years, I've been turning complex problems into simple,
                                beautiful and intuitive designs. When I'm not coding, instagramming or pushing pixels, 
                                you'll find me fathering my son, skateboarding or tinkering on cool stuff.
                            </p>

                        </div>
                    </div>
                    <div className='col'>
                        <p>image of me will go here</p>
                    
                    </div>
                </div>
            </div>
        </div>
}

export default Section1