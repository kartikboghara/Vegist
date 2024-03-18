import React from "react";

const Main_banner = () =>{
    
    return (
        <>
        <div className="main-banner" data-aos="zoom-in-up">
        <div className="container">
            <div className="row">
                <div className="banner-inner-img">
                    <a href="#"><img src="/img/banner-3.webp" alt="banner-img"/></a>
                    <div className="banner-inner-contain">
                        <p>
                            Fresh fruit,vegetable on <br/>our product
                        </p>
                        <a href="#">
                            shop now
                        </a>
                    </div>
                </div>
                <div className="banner-inner-img">
                    <a href="#"><img src="/img/banner-1.webp" alt="banner-img"/></a>
                    <div className="banner-inner-contain">
                        <p>
                            Vegetable eggplant <br/>100% fresh food
                        </p>
                        <a href="#">
                            shop now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Main_banner;