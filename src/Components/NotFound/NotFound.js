import React from "react";
import NotFoundImg from "../../images/notFound.jpg";

const NotFound = () => {
    return (
        <div
            style={{ height: `80vh`, backgroundColor: `gray` }}
            className="d-flex justify-content-center align-items-center"
        >
            <img className="img-fluid w-50" src={NotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;
