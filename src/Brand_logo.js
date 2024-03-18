import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Brand_logo = () => {

    const scrol = {
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1000: {
                items: 6,
            }
        }
    };
    return (
        <>
            <div className="main_brand_logo" data-aos="zoom-in-up">
                <div className="container">
                    <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={false} autoplay=
            {true} autoplayTimeout={4000} {...scrol}>
                        <div className='item'>
                            <h4><div className="logo_img"><a href="#"><img src="/img/l1.avif" alt="logo-img" /></a></div></h4>
                        </div>
                        <div className='item'>
                            <h4><div className="logo_img"><a href="#"><img src="/img/l5.avif" alt="logo-img" /></a></div></h4>
                        </div>
                        <div className='item'>
                            <h4><div className="logo_img"><a href="#"><img src="/img/l2.webp" alt="logo-img" /></a></div></h4>
                        </div>
                        <div className='item'>
                            <h4><div className="logo_img"><a href="#"><img src="/img/l3.avif" alt="logo-img" /></a></div></h4>
                        </div>
                        <div className='item'>
                            <h4><div className="logo_img"><a href="#"><img src="/img/l4.avif" alt="logo-img" /></a></div></h4>
                        </div>
                        <div className='item'>
                            <h4><div className="logo_img"><a href="#"><img src="/img/l7.avif" alt="logo-img" /></a></div></h4>
                        </div>
                        <div className='item'>
                            <h4><div className="logo_img"><a href="#"><img src="/img/l8_8ed23c44-6775-4835-8afe-29b025190ae0.webp"
                                alt="logo-img" /></a></div></h4>
                        </div>
                        <div className='item'>
                            <h4><div className="logo_img"><a href="#"><img src="/img/l6_fc7c2356-cd2c-4b15-9724-558a0a196ae3.avif"
                                alt="logo-img" /></a></div></h4>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    );
};

export default Brand_logo;