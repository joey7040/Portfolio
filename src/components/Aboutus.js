import React, {Component} from 'react';

export default class About extends Component{
    render(){

      const AveryAdlin = require('../assets/img/averyandadlin.jpg')
      const Boardslide = require('../assets/img/boardslide.jpg')
      const lakeside = require("../assets/img/AveryLakeside.jpg")

        return(
            <div className="container mt-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={AveryAdlin} className="d-block w-100" alt="..."/>
                    </div> 
                    <div className="carousel-item">
                      <img src={Boardslide} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={lakeside} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="container">
                <h3 className="mt-3">About us</h3>
                <p>Avery Rice Memorial Foundation Inc is a non-profit 
                  organization that has been established to raise funds 
                  in order to build a public skatepark in Kissimmee / 
                  Poinciana area in memory of Avery Michael Rice to 
                  foster lifelong friendships within the residence in 
                  the community. The foundation is being run by Avery’s
                   families and friends who want to keep Avery’s memories 
                   alive by helping other people create lasting memories. 
                   The foundation is a way for us to generate funds by 
                   selling custom designed artworks printed on merchandise. 
                   All designs are created with Avery’s favorites in mind such as skateboarding, 
                   car racing, music, and funny things.</p>
                
            
                <h3 className="mt-3">Our Vision</h3>
                <p>Through this foundation, our vision is to purchase a land in Kissimmee / Poinciana area and build an indoor skatepark so anyone can safely play without worrying about the weather, 
                  lighting and other hazards that you would have in an outdoor skatepark. We also want to build a garage equipped with all the mechanical tools next to the skatepark to provide aspiring auto
                   mechanics the opportunity to learn about fixing and maintaining cars. Donations are a way to share with communities in need so we will use the foundation to be the means of communication via events and celebrations. 
                   Volunteers are always welcome. Bring out your talent and skills to help others in need. It is just what Avery would do.</p>
                </div>
            </div>
        )
    }
}