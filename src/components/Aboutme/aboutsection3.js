import React from 'react';
import {yoda} from '../../assets/img/yoda.jpg'
import './Aboutme.css'

console.log(yoda)
const Section3 = () =>{
    return <div className="container-fluid ab-3">
    <div className="container ">


    <div className='row'>

    <div className='col'>
            <h2 className="ab-title-3">Fun Facts</h2>
            <div className="ab-text-3">
                <p>I've been skateboarding for 14 years</p>
                <p>I was born and raised in florida</p>
                <p>I fly drones for fun</p>
                <p>I used to bar tend, so I know how to make good drinks.</p>
                <p>I'm in love with good food and like to cook it.</p>
                <p>I'm knowledgeable in cheese and wine oddly enough.</p>
                <p>I'm addicted to winning in call of duty warzone.</p>
                <p>I am a jedi</p>
                

            </div>
            </div>
            <div className='col'>
            <img
                    src={require('../../assets/img/yoda.jpg')}
                    alt="gamer-pic"
                    // className="avatar-img-2"
                    style={{height: '25rem'}}
                    />
            </div>
    </div>






    </div>
</div>
}

export default Section3