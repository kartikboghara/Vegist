import React from "react";
import { Link } from "react-router-dom";
import News from "./News";

const Bloge=()=>{
    return(
        <>
        <div className="main_inner_pages">
        <img src="/img/breadcrumb.webp" alt="breadcrumb-image"/>
            <div className="container">
                <div className="row">
                <div className="inner">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><span>News</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in">
        <News/>
        </div>
        </>
    );
}
export default Bloge;