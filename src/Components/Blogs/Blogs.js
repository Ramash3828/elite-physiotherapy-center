import React from "react";
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="container">
            <div className="row g-5 my-5">
                <h2 className="blog-title"> Question and Answer</h2>
                <div className="col-md-4 text-start">
                    <h5>
                        {" "}
                        Difference between authorization and authentication?
                    </h5>
                    <p>
                        <strong>Ans:</strong> Authentication is done before the
                        authorization process, whereas authorization process is
                        done after the authentication process. For example, the
                        process of verifying and confirming employees ID and
                        passwords an organization is called authentication, but
                        determining which employee has access to which floor is
                        called authorization.
                    </p>
                </div>
                <div className="col-md-4 text-start">
                    <h5>
                        Why are you using firebase? What other options do you
                        have to implement authentication?
                    </h5>
                    <p>
                        <strong>Ans:</strong> Firebase Authentication makes it
                        easier to get your users signed-in without having to
                        understand the complexities. Firebase Authentication
                        makes building secure sign-ins for any platform easy.
                        This end-to-end solution supports email and passowrd,
                        phone auth, and mult-platform login. Monitor App
                        Performance. Accelerate Development. Build Fast For Any
                        Device.
                    </p>
                    <p>
                        Without Firebase, we can use Octa for makes
                        Authentication.
                    </p>
                </div>
                <div className="col-md-4 text-start">
                    <h5>
                        What are different services that Firebase provide to
                        use?
                    </h5>
                    <p>
                        <strong>Ans:</strong> There are many services which
                        Firebase provides, Most useful of them are:
                    </p>
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Authentication.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage.</li>
                        <li>Cloud Messaging.</li>
                        <li>Google Analytics.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
