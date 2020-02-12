import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import ProjuctUC from '../Projects/ProjectUC';
import './Aboutme.css'



export default class Aboutme extends Component {
    state = {
        done : undefined
      }

    componentDidMount(){
    setTimeout(()=>{
        this.setState({
        done : true
        })
    },500)
    }



    render(){
        return (

            <div>

                {!this.state.done ? (
                    <ReactLoading className="center-load" type={"bars"} color={"black"} />
                        ) : (




                <div className="cover-container about">
                    <ProjuctUC />
                    {/* <div className="container mt-5">
                        <h2 className="ab-title">Hello, world!</h2>
                        <p className="ab-text">
                        Zip. That easy. It's a good way of getting rid of all your anxieties and hostilities. Don't forget to tell these special people in your life just how special they are to you. You can do it.

                        This is truly an almighty mountain. See how easy it is to create a little tree right in your world. This is your world, whatever makes you happy you can put in it. Go crazy. Only think about one thing at a time. Don't get greedy. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Now let's put some happy little clouds in here.

                        Let's have a nice tree right here. Let's make a nice big leafy tree. You can get away with a lot. Just make little strokes like that. Just relax and let it flow. That easy.

                        The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. Just think about these things in your mind - then bring them into your world. Don't be bashful drop me a line. Let's make some happy little clouds in our world. Nice little clouds playing around in the sky. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people.

                        If you hypnotize it, it will go away. Be so very light. Be a gentle whisper. Paint anything you want on the canvas. Create your own world. Let your imagination be your guide. It's so important to do something every day that will make you happy. Maybe there's a happy little bush that lives right there.

                        They say everything looks better with odd numbers of things. But sometimes I put even numbers—just to upset the critics. It's important to me that you're happy. I want everbody to be happy. That's what it's all about. But they're very easily killed. Clouds are delicate. Isn't that fantastic that you can create an almighty tree that fast?

                        If you don't think every day is a good day - try missing a few. You'll see. A thin paint will stick to a thick paint. See there, told you that would be easy.


                        </p>
                    </div> */}
                    
                </div>
                )}
            </div>
        )
    }
}