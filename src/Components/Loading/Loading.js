import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
    return (
        <div
            style={{ height: `400px` }}
            className="w-100 d-flex justify-content-center align-items-center py-5"
        >
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;
