import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = (props) => {
    const { id, name, desc, image, price } = props.cart;
    const navigate = useNavigate();
    const handleCheckOut = (id) => {
        if (id === props.cart.id) {
            navigate(`/checkout/${id}`);
        }
    };

    return (
        <div className="col-md-4">
            <div className="card p-3 ">
                <div className="img-area mx-auto">
                    <img className="card-img" src={image} alt="" />
                </div>
                <div className="card-detail">
                    <h3 className="mt-3">{name}</h3>
                    <p>{desc.slice(0, 100) + " [...]"}</p>
                    <h4>Price: ${price}</h4>
                </div>
                <button onClick={() => handleCheckOut(id)} className="card-btn">
                    Check Out
                </button>
            </div>
        </div>
    );
};

export default Services;
