import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="main_inner_pages">
                <img src="/img/breadcrumb.webp" alt="breadcrumb-image" />
                <div className="container">
                    <div className="row">
                        <div className="inner">
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <li><span>404 Not Found</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="error_main" data-aos="zoom-in">
                <div className="container">
                    <div className="err_inner">
                        <h3>4 <span>0</span> 4</h3>
                        <h2> Page <span> not </span> be <span> found </span> </h2>
                        <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
                        <Link to="/">Go To Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Error;