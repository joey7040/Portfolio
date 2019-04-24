import React, {Component} from 'react';
import './Mission.css'
import {Link} from 'react-router-dom';

export default class Mission extends Component {
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Do it for Avery.</h1>
                            <p className="lead">Help make a change in the osceola community.</p>
                        </div>
                    </div>
                <div className="container">

                            <h2>About Avery</h2>
                            <p>
                            Avery Michael Rice was born on September 21, 1995 in Bloomington, Illinois. 
                            He spent countless hours helping people out (friends, family, strangers). 
                            Avery made friends everywhere he went. 
                            It seemed that he knew who needed to have a friend and he befriended them without making them feel like he knew they needed someone to be their friend. He opened his home to friends when they needed a place to stay. When he started realizing his love for skateboarding,
                            he would find people who were also into skateboarding and would challenge them to encourage them to practice and get better. 
                            Skateboarding was first and foremost his love and passion. When he was in high school, 
                            Avery would be the first one to say no to drugs and alcohol. 
                            He skated because he liked the natural high of adrenalin rush that you get during an execution and feeling the sense of accomplishment when he successfully lands a trick that he has been working on.
                            Avery also discovered a passion in car racing and actually learned how to do mechanic work by reading a volume of auto mechanic books that he bought online, watching YouTube videos and hanging out with friends who had the same passion and worked with them to learn about cars and how to customize them. He was even able to re-build an engine. 
                            Whenever his friends needed their car fixed or maintained, they would come to the house and ask for his help. 
                            He is the kind of person who would always extend his hands out to help. 
                            On January 13th, 2019, God took him from us when he was just 23 years old. Avery lived his life to the fullest and encouraged others to do the same.
                            </p>




                            <h2>Mission Statement</h2>
                            <p>
                            Our mission is to build a local skatepark in the Kissimmee / Poinciana area to commemorate Avery Rice. 
                            Most of Avery's friendships that he made throughout the years were because of skateboarding, 
                            so we want to provide others the same opportunity to build a friendship that could possibly last a lifetime.
                            We also want to take the opportunity through this website to prevent unnecessary deaths by training people on drugs, and its effects on someone's health. 
                            In addition, we would like to provide some information on what to do when you suspect someone is having a medical issue. 
                            Below are some of the helpful links that can be useful in these kinds of situations.
                            </p>


                            <Link to='/products'>
                                <button className="btn btn-outline-warning mb-5 mr-3 pt-1 "><span>View Products</span></button>
                            </Link>
                            <Link to='/donate'>
                                <button className="btn btn-outline-info  mb-5 pt-1"><span>Donate to the cause..</span></button>
                            </Link>
                </div>
                

            </div>
                
        )
    }
}