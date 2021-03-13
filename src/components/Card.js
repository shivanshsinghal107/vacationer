import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/card.css';

const Card = (props) => {
    return (
       
        <div className=" row " id="card">
            <div class="col-sm-6">
                <img class='cardimg' src={props.img_url} />
            </div>
            <div class="col-sm-6 content">
                <h2>{props.name}</h2>
                <p>{props.address}</p>
           

                <p><span class="badge badge-pill badge-info">{props.rating}</span><small>{props.num_ratings}</small></p>
                <br /><br />
                <div class="alert alert-secondary">
                    <strong>{props.open_now}</strong>
                </div>

            </div>
        </div>
           
       
     
    );
};

export default Card;