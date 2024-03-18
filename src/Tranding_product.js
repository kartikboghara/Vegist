import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Tranding_product = () => {
    const scrol = {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    };
    return (
        <>
            <div className="main-tranding-product" data-aos="zoom-in-up">
                <div className="container">
                    <div className="row">
                        <h2>Trending products</h2>
                        <div className="tp-inner">
                            <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={false} autoplay=
            {true} autoplayTimeout={4000} {...scrol}>
                                <div className='item'>
                                    <h4><div className="tp-item">
                                    <div className="img">
                                        <a href="#"><img src="/img/2_590X668_crop_center.webp" alt="img"/></a>
                                        <div className="bg-img">
                                            <a href="#"><img src="/img/39_590X668_crop_center.webp" alt="img"/></a>
                                        </div>
                                        <div className="bg-icon">
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                            <a href="#"><i class="fa-solid fa-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="prod-contain">
                                        <p className="prod-title">Organic coconet</p>
                                        <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                                class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                                class="fa-regular fa-star"></i></p>
                                        <span>€33,00</span>
                                        <span className="old-price">€44,00</span>
                                    </div>
                                </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="tp-item">
                                    <div className="img">
                                        <a href="#"><img src="/img/14_590X668_crop_center.webp" alt="img"/></a>
                                        <div className="bg-img"><a href="#"><img
                                                    src="img/7_3edd060e-53fe-4d4d-a0e1-43ad2e4a4059_590X668_crop_center.webp"
                                                    alt="img"/></a></div>
                                        <div className="bg-icon">
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                            <a href="#"><i class="fa-solid fa-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="prod-contain">
                                        <p className="prod-title">Organic coconet</p>
                                        <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                                class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                                class="fa-regular fa-star"></i></p>
                                        <span>€33,00</span>
                                        <span className="old-price">€44,00</span>
                                    </div>
                                </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="tp-item">
                                    <div className="img">
                                        <a href="#"><img src="/img/30_590X668_crop_center.webp" alt="img"/></a>
                                        <div className="bg-img"><a href="#"><img
                                                    src="img/7_3edd060e-53fe-4d4d-a0e1-43ad2e4a4059_590X668_crop_center.webp"
                                                    alt="img"/></a></div>
                                        <div className="bg-icon">
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                            <a href="#"><i class="fa-solid fa-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="prod-contain">
                                        <p className="prod-title">Organic coconet</p>
                                        <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                                class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                                class="fa-regular fa-star"></i></p>
                                        <span>€33,00</span>
                                        <span className="old-price">€44,00</span>
                                    </div>
                                </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="tp-item">
                                    <div className="img">
                                        <a href="#"><img src="/img/34_590X668_crop_center.webp" alt="img"/></a>
                                        <div className="bg-img"><a href="#"><img src="/img/36_1_590X668_crop_center.webp"
                                                    alt="img"/></a>
                                        </div>
                                        <div className="bg-icon">
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                            <a href="#"><i class="fa-solid fa-eye"></i></a>
                                        </div>
                                    </div>
                                    <div className="prod-contain">
                                        <p className="prod-title">Organic coconet</p>
                                        <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                                class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
                                                class="fa-regular fa-star"></i></p>
                                        <span>€33,00</span>
                                        <span className="old-price">€44,00</span>
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

export default Tranding_product;