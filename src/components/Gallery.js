import React,{Component} from 'react';
import '../Assets/css/gallery.css';

const Gallery = (props) => {
    return (
        <div className="gallerycontainer container">
            <div class="row">
                <div class="column">
                    <img src={props.img1} />
                    <img src={props.img2} />
                    <img src={props.img3} />
                    <img src={props.img4} />
                </div>
                <div class="column">
                    <img src={props.img5} />
                    <img src={props.img6} />
                    <img src={props.img7} />
                    <img src={props.img8} />
                </div>
                <div class="column">
                    <img src={props.img9} />
                    <img src={props.img10} />
                    <img src={props.img11} />
                    <img src={props.img12} />
                </div>
            </div>
        </div>

    );
};

export default Gallery;