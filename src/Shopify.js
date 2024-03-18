import React from "react";

const Shopify=()=>{

    return(
        <>
        <div className="main_shopify_section" data-aos="zoom-in-up">
        <div className="img"><img src="/img/banner3-min.jpg" alt="img"/></div>
        <div className="container">
            <div className="inner">
                <div className="title">
                    <h3>Get the latest deals</h3>
                    <p>And receive 20% off coupon for first shopping</p>
                </div>
                <div className="subscribe_content">
                    <form method="post">
                        <div className="subscribe-block">
                            <input type="text" placeholder="Enter your email address"/>
                            <button>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Shopify;