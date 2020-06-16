import React from 'react';
import {yoda} from '../../assets/img/yoda.jpg'
import './Aboutme.css'


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
                <p>I used to bar tend.</p>
                <p>I'm in love with good food and like to cook it.</p>
                <p>I'm knowledgeable in cheese and wine.</p>
                <p>I'm addicted to video games.</p>
                <p>I am a jedi</p>
                

            </div>
            </div>
            <div className='col'>
            <img
                    src={yoda}
                    alt="gamer-pic"
                    className="avatar-img-2"
                    style={{height: '100%'}}
                    />
            </div>
    </div>






    </div>
</div>
}

export default Section3