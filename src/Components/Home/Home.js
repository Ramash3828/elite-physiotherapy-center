import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../../images/banner.webp";
import Services from "../Services/Services";
const HOme = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCarts(data.data));
    }, []);

    return (
        <>
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
                        specialised physiotherapy services to get you better
                        faster and to stay better.
                    </p>
                    <button className="hero-btn">Book an Appointment</button>
                </div>
            </div>
            <div className="container py-5">
                <h2 className="text-center mb-3 service-title">OUR SERVICES</h2>
                <div className="row g-5">
                    {carts.map((cart) => (
                        <Services key={cart.id} cart={cart}></Services>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HOme;
