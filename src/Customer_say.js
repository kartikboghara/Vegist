import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const customer_say = () => {

    const scrol = {
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 1,
            },
            767: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    };
    return (
        <>
            <div className="main_customer_say" data-aos="zoom-in-up">
                <div className="container">
                    <div className="inner ">
                        <h2>Our customer say</h2>
                        <div className="item">
                            <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={false} autoplay=
            {true} autoplayTimeout={4000} {...scrol}>
                                <div class='item'>
                                    <h4><div className="testi_content">
                                    <div className="icon">
                                        <i class="fa-solid fa-quote-left"></i>
                                    </div>
                                    <div className="content animate__zoomIn">
                                        <h4>“For other”</h4>
                                        <p>The developer is awesome at jumping on and fixing things or making changes
                                            for me.
                                            The design is great and can be adjusted easily. I will definitely stick to
                                            them when
                                            comes time for an upgrade.</p>
                                        <span>By stickersicko</span>
                                        <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                                class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                                class="fa-solid fa-star"></i></span>
                                    </div>
                                </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="testi_content animate__zoomIn">
                                    <div className="icon">
                                        <i class="fa-solid fa-quote-left"></i>
                                    </div>
                                    <div className="content">
                                        <h4>“For other”</h4>
                                        <p>The developer is awesome at jumping on and fixing things or making changes
                                            for me.
                                            The design is great and can be adjusted easily. I will definitely stick to
                                            them when
                                            comes time for an upgrade.</p>
                                        <span>By stickersicko</span>
                                        <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                                class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                                class="fa-solid fa-star"></i></span>
                                    </div>
                                </div></h4>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default customer_say;