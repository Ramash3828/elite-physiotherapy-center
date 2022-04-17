import React, { useEffect, useState } from "react";
import "./Home.css";
import Banner from "../../images/banner.webp";
import Services from "../Services/Services";
import Cervical from "../../images/cervical.jpg";
import Spondylolisis from "../../images/Spondylolysis.jpg";
import Lowbackpain from "../../images/lowbackpain.jpg";
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
            <div className="py-5">
                <h2 className="blog-title mb-4">Details Explanation</h2>
                <div className="container">
                    <div className="row g-3 mb-4">
                        <div className="col-md-4 ">
                            <img className="img-fluid" src={Cervical} alt="" />
                        </div>
                        <div className="col-md-8 text-start">
                            <h2>Cervical Spondylosis</h2>
                            <p>
                                {" "}
                                For most people, cervical spondylosis causes no
                                symptoms. When symptoms do occur, they typically
                                include pain and stiffness in the neck.
                                Sometimes, results in a narrowing of the space
                                needed by the spinal cord and the nerve roots
                                that pass through the spine to the rest of your
                                body. If the spinal cord or nerve roots become
                                pinched, you might experience:
                            </p>
                            <ul>
                                <li>
                                    Tingling, numbness and weakness in your
                                    arms, hands, legs or feet
                                </li>
                                <li>
                                    Lack of coordination and difficulty walking
                                </li>
                                <li>Loss of bladder or bowel control</li>
                            </ul>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="row g-3 mb-4">
                        <div className="col-md-4 ">
                            <img
                                className="img-fluid"
                                src={Spondylolisis}
                                alt=""
                            />
                        </div>
                        <div className="col-md-8 text-start">
                            <h2>Spondylolisis and Spondylolisthesis</h2>
                            <p>
                                Spondylolysis (or occasionally spelt as
                                Spondylolysis) is a defect of the spinal
                                vertebrae at the area where two vertebrae meet,
                                usually a stress fracture. It most commonly
                                occurs in the lumbar spine area, in particular,
                                the 5th lumbar vertebrae (and some less often
                                the 4th vertebrae).
                            </p>
                            <p>
                                Spondylolisthesis is a severe form of
                                spondylolysis, where the stressed portion of the
                                vertebrae separates; causing the vertebrae to
                                ‘slip’ forward.
                            </p>
                            <p>
                                Lower back pain worsened with activity,
                                especially overarching (hyperextension) of the
                                spine. Most often develops in young teenagers
                                who are active in sports. Often, they may not
                                exhibit signs of pain or is mild and easily
                                overlooked. An X-ray is usually taken to confirm
                                this diagnosis. Both spondylolysis and
                                spondylolisthesis are more likely to occur in
                                young people who participate in sports that
                                require frequent overstretching (hyperextension)
                                of the lumbar spine — such as; gymnastics,
                                football, and weightlifting.
                            </p>
                            <p>
                                Over time, this type of repetitive activity can
                                weaken the pars interarticularis, leading to
                                fracture and/or slippage of a vertebra.
                            </p>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="row g-3 m-4">
                        <div className="col-md-4 ">
                            <img
                                className="img-fluid"
                                src={Lowbackpain}
                                alt=""
                            />
                        </div>
                        <div className="col-md-8 text-start">
                            <h2>
                                Low back pain caused by spinal degeneration and
                                injury.
                            </h2>
                            <p>
                                {" "}
                                For most people, cervical spondylosis causes no
                                symptoms. When symptoms do occur, they typically
                                include pain and stiffness in the neck.
                                Sometimes, results in a narrowing of the space
                                needed by the spinal cord and the nerve roots
                                that pass through the spine to the rest of your
                                body. If the spinal cord or nerve roots become
                                pinched, you might experience:
                            </p>
                            <ul>
                                <li>
                                    Muscle or ligament strain. Repeated heavy
                                    lifting or a sudden awkward movement can
                                    strain back muscles and spinal ligaments. If
                                    you’re in poor physical condition, constant
                                    strain on your back can cause painful muscle
                                    spasms.
                                </li>
                                <li>
                                    Bulging or ruptured disks. Disks act as
                                    cushions between the bones (vertebrae) in
                                    your spine. The soft material inside a disk
                                    can bulge or rupture and press on a nerve.
                                    However, you can have a bulging or ruptured
                                    disk without back pain. Disk disease is
                                    often found incidentally when you have spine
                                    X-rays for some other reason.
                                </li>
                                <li>
                                    Arthritis. Osteoarthritis can affect the
                                    lower back. In some cases, arthritis in the
                                    spine can lead to a narrowing of the space
                                    around the spinal cord, a condition called
                                    spinal stenosis.
                                </li>
                                <li>
                                    Osteoporosis. Your spine’s vertebrae can
                                    develop painful fractures if your bones
                                    become porous and brittle.{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HOme;
