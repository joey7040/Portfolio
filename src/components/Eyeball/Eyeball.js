import React, {Component} from "react";
import './Eyeball.css'



// var ball = document.getElementsByClassName("ball");
// document.onmousemove = function () {
//     var x = event.clientX * 100 / window.innerWidth + "%";
//     var y = event.clientY * 100 / window.innerHeight + "%";
//     for (var i=0; i < 1; i++) {
//         ball[i].style.left = x;
//         ball[i].style.top = y;
//         ball[i].style.transform = "translate(-"+x+",-"+y+")"
//     }
// }




export default class Eyeball extends Component{
    render(){
        return(
            <div className='container'>
            <div className="eye">
                <div className="shut">
                    <span></span>
                </div>
                <div className="ball"></div>
            </div>
            </div>

        )
    }
}