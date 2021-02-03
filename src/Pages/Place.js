import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/main.css';
import '../Assets/css/city.css';
import Gallery from "../components/Gallery";

export default class Place extends Component{

    constructor(props){
        super(props);

        this.state = {
            images: [],
            url: "",
            website: "",
            lat: "",
            lng: "",
            phone: "",
        }

        this.place_id = this.props.place_info.place_id;
        this.apiKey = "AIzaSyDzys1ur3d0iAEH_SWL_1s7DHmS2esyQSo";
        this.fetchDetails = this.fetchDetails.bind(this);
    }

    componentDidMount() {
        console.log(this.props.place_info);
        this.fetchDetails();
    }

    fetchDetails() {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.place_id}&fields=geometry,photos,formatted_phone_number,url,website,opening_hours,price_level&key=${this.apiKey}`;
        var imgs = [];
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            var photos = data['result']['photos'];
            for(var i = 0; i < photos.length; i++){
                var photo_reference = photos[i]["photo_reference"];
                var photo_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=${photo_reference}&key=${this.apiKey}`;
                imgs.push(photo_url);
            }
            this.setState({
                images: imgs,
                url: data['result']['url'],
                website: data['result']['website'],
                lat: data['result']['geometry']['location']['lat'],
                lng: data['result']['geometry']['location']['lng'],
                phone: data['result']['formatted_phone_number']
            });
            console.log(data);
            console.log(imgs);
        });
    }

    render() {
        const map = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${this.state.lat},${this.state.lng}`;
        return (
            <div className="gallerycontainer container">
                <h1><a href={this.state.url}>{this.props.place_info.name}</a></h1>
                <h2>Gallery</h2>
                <Gallery
                    img1={this.state.images[0]}
                    img2={this.state.images[1]}
                    img3={this.state.images[2]}
                    img4={this.state.images[3]}
                    img5={this.state.images[4]}
                    img6={this.state.images[5]}
                    img7={this.state.images[6]}
                    img8={this.state.images[7]}
                    img9={this.state.images[8]}
                    img10={this.state.images[9]}
                    img11={this.state.images[10]}
                    img12={this.state.images[11]}
                />
                {this.state.phone ? (<h4>Contact: {this.state.phone}</h4>) : ""}
                <br />
                <iframe
                    width="100%"
                    height="360"
                    frameborder="0"
                    src={map}
                    allowFullScreen
                />
                {this.state.website ? (<a href={this.state.website}>Visit Website</a>) : ""}
            </div>
        );
    }
}