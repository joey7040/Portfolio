import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './Gallery.css';


export default class PhotoGallery extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
    render(){

        // const photos =[
        //     {
        //         //1
        //         src:require('../../assets/img/serverroom.jpg'),
        //         width:3,
        //         height:4,
        //     },
        //     {
                
        //         src:require("../../assets/img/avery_1.jpg"),
        //         width:4,
        //         height:3,
        //     },
        //     {
        //         src:require("../../assets/img/avery_2.jpg"),
        //         width:3,
        //         height:2,
        //     },
        //     {
        //         src:require("../../assets/img/avery_8.jpg"),
        //         width:3,
        //         height:4,
        //     },
        //     {
        //         //5
        //         src:require("../../assets/img/avery_7.jpg"),
        //         width:4,
        //         height:3,
        //     },
        //     {
        //         src:require("../../assets/img/avery_10.jpg"),
        //         width:4,
        //         height:3,
        //     },
        //     {
        //         src:require("../../assets/img/avery_11.jpg"),
        //         width:5,
        //         height:4,
        //     },
        //     {
        //         src:require("../../assets/img/avery_12.jpg"),
        //         width:6,
        //         height:4,
        //     },
        //     {
        //         src:require("../../assets/img/averyandadlin.jpg"),
        //         width:4,
        //         height:3,
        //     },
        //     {
        //         //10
        //         src:require("../../assets/img/AveryLakeside.jpg"),
        //         width:5,
        //         height:3,
        //     },
        //     {
        //         src:require("../../assets/img/boardslide.jpg"),
        //         width:4,
        //         height:3,
        //     },
        //     {
        //         src:require("../../assets/img/Chillin.jpg"),
        //         width:3,
        //         height:5,
        //     },
        //     {
        //         src:require("../../assets/img/avery_16.jpg"),
        //         width:3,
        //         height:4,
        //     },
        //     {
        //         src:require("../../assets/img/avery_17.jpg"),
        //         width:5,
        //         height:3,
        //     },
        //     {
        //         //15
        //         src:require("../../assets/img/avery_18.jpg"),
        //         width:6,
        //         height:4,
        //     },
        //     {
        //         src:require("../../assets/img/avery_5.jpg"),
        //         width:3,
        //         height:2,
        //     },
        //     {
        //         src:require("../../assets/img/avery_4.jpg"),
        //         width:4,
        //         height:3,
        //     },
        //     {
        //         src:require("../../assets/img/avery_3.jpg"),
        //         width:4,
        //         height:3,
        //     },
        //     {
        //         src:require("../../assets/img/avery_6.jpg"),
        //         width:4,
        //         height:3,
        //     },
        //     {
        //         //20
        //         src:require("../../assets/img/avery_13.jpg"),
        //         width:5,
        //         height:3,
        //     },
        //     {
        //         src:require("../../assets/img/avery_14.jpg"),
        //         width:3,
        //         height:4,
        //     },
        //     {
        //         src:require("../../assets/img/avery_15.jpg"),
        //         width:4,
        //         height:3,
        //     },
        // ]



        return (
        <div>
                {/* <Gallery photos={photos}  onClick={this.openLightbox}/>
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    /> */}
        </div>
        )
    }
}