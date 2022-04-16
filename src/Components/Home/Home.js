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
            <h2>Home page</h2>
        </div>
    );
};

export default HOme;
