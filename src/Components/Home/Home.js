import React from "react";
import "./Home.css";
import Banner from "../../images/banner.webp";
const HOme = () => {
    return (
        <div
            id="hero-area"
            style={{
                backgroundImage: `URL(${Banner})`,
            }}
        >
            <div className="banner-text">
                <h2>
                    <p>
                        <small>ELITE </small>
                    </p>{" "}
                    PHYSIOTHERAPY
                </h2>
                <p className="details">
                    Certainly, our Physiotherapists offer a wide range of
                    specialised physiotherapy services to get you better faster
                    and to stay better.
                </p>
                <button className="hero-btn">Book an Appointment</button>
            </div>
        </div>
    );
};

export default HOme;
