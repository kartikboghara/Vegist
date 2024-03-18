import React from "react";
import { Link } from "react-router-dom";

const About=()=>{
    return(
        <>
        <div className="main_inner_pages">
        <img src="/img/breadcrumb.webp" alt="breadcrumb-image"/>
            <div className="container">
                <div className="row">
                <div className="inner">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><span>About Us</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="about_main" data-aos="zoom-in">
            <div className="container">
                <div className="inner">
                    <div className="about_title">
                        <h2>What we do?</h2>
                    </div>
                    <div className="about_dscr">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="about_img">
                        <img src="/img/18_ba24dbe5-edaf-4e10-bd41-3a592dbc127b_590X668_crop_center.webp" alt="about_image"/>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default About;