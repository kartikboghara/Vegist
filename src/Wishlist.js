import React from "react";
import { Link } from "react-router-dom";

const Wishlist=()=>{
    return(
        <>
        <div className="main_inner_pages">
        <img src="/img/breadcrumb.webp" alt="breadcrumb-image"/>
            <div className="container">
                <div className="row">
                <div className="inner">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><span>Wishlist</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default Wishlist;