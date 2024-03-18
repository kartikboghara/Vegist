import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Main_slider = () => {

    const scrol = {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    };

    return (
        <>
            <OwlCarousel data-aos="zoom-in-up" className='owl-theme' loop margin={10} nav={false} dots={false} autoplay=
                {true} autoplayTimeout={4000} {...scrol}>
                <div className='item'>
                    <h4><div className="main-slider" >
                        <div className="inner">
                            <div className="slider-img">
                                <img src="/img/slider3_7f623fd1-a932-4b5c-92c7-292044869712.webp" alt="slider-img" />
                                <div className="slider-contain">
                                    <div className='animate__slideInLeft inner'>
                                        <p>
                                            top seling! <br />
                                            <b>fresh for your <br />
                                                heath
                                            </b>
                                        </p>
                                        <a href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></h4>
                </div>
                <div className='item'>
                    <h4><div className="main-slider">
                        <div className="inner">
                            <div className="slider-img">
                                <img src="/img/slider2.webp" alt="slider-img" />
                                <div className="slider-contain2">
                                    <p>
                                        Organic indian masala <br />
                                        <b>Prod of indian <br />
                                            100% packaging
                                        </b>
                                    </p>
                                    <a href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div></h4>
                </div>
                <div className='item'>
                    <h4><div className="main-slider">
                        <div className="inner">
                            <div className="slider-img">
                                <img src="/img/slider1-min.jpg" alt="slider-img" />
                                <div className="slider-contain3">
                                    <p>
                                        Summer vege sale <br />
                                        <b>Fresh fruits <br />
                                            & vegetable
                                        </b>
                                    </p>
                                    <a href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div></h4>
                </div>
            </OwlCarousel>

        </>
    );
};

export default Main_slider;