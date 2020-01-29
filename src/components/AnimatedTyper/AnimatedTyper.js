import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import './AnimatedTyper.css';


export default class AnimatedHeader extends Component {
    render(){
        return (
            <Typing speed={1} className='cursor' >
                <div>
                    <h1 className="display-4">Heros are remembered,</h1>
                    <Typing.Delay ms={1000}/>
                    <h2 className="lead">But legends never die...</h2>
                </div>
             </Typing>
        )
    }
}