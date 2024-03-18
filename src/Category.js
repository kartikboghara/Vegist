import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Category = () => {

    const scrol = {
        responsive: {
            0: {
                items: 2,
            },
            640: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        }
    };
    return (
        <>

            <div className="slider-category" data-aos="zoom-in-up">
                <div className="container">
                    <div className="row">
                        <h2>Shop by category</h2>
                        <div className="item-main">
                            <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={false} autoplay=
            {true} autoplayTimeout={4000} {...scrol}>
                                <div className='item'>
                                    <h4><div className="items">
                                        <a href="#"><img src="/img/cat2.avif" alt="category-img" /></a>
                                        <span className="cat-title">fresh vegetable</span>
                                        <span>22 Item</span>
                                    </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="items">
                                        <a href="#"><img src="/img/cat3.avif" alt="category-img" /></a>
                                        <span className="cat-title">fresh vegetable</span>
                                        <span>22 Item</span>
                                    </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="items">
                                        <a href="#"><img src="/img/cat4.avif" alt="category-img" /></a>
                                        <span className="cat-title">fresh vegetable</span>
                                        <span>22 Item</span>
                                    </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="items">
                                        <a href="#"><img src="/img/cat5.avif" alt="category-img" /></a>
                                        <span className="cat-title">fresh vegetable</span>
                                        <span>22 Item</span>
                                    </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="items">
                                        <a href="#"><img src="/img/cat6.avif" alt="category-img" /></a>
                                        <span className="cat-title">fresh vegetable</span>
                                        <span>22 Item</span>
                                    </div></h4>
                                </div>
                                <div className='item'>
                                    <h4><div className="items">
                                        <a href="#"><img src="/img/cat9.avif" alt="category-img" /></a>
                                        <span className="cat-title">fresh vegetable</span>
                                        <span>22 Item</span>
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

export default Category;