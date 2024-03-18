import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";


const News = () => {
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
                items: 3,
            }
        }
    };
    return (
        <>
            <div className="main_news" data-aos="zoom-in-up">
                <div className="container">
                    <h2>Recent news</h2>
                    <div className="inner">
                        <OwlCarousel className='owl-theme' loop margin={10} nav={false} dots={false} autoplay=
            {true} autoplayTimeout={5000} {...scrol}>
                            <div className='item'>
                                <h4><div className="news">
                                    <div className="news_img">
                                        <a href="#"><img src="/img/blog-4_1ff8c58f-79d1-4e97-bff0-e7c236171b97_1024x1024.webp"
                                            alt="news-img" /></a>
                                    </div>
                                    <div className="news_contant">
                                        <p>
                                            <span><i class="fa-regular fa-calendar-days"></i> May 13, 2023</span>
                                            <a href="#"><i class="fa-regular fa-message"></i> 1 Comment</a>
                                        </p>
                                        <h3><a href="#">All time fresh every time healthy</a></h3>
                                        <p className="news_desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget
                                            dolor. ...
                                        </p>
                                        <span>Spacing Tech</span>
                                    </div>
                                    <span className="news_caount">1</span>
                                </div></h4>
                            </div>
                            <div className='item'>
                                <h4><div className="news">
                                    <div className="news_img">
                                        <a href="#"><img src="/img/blog-2_f16054cd-c759-43fc-a870-37322e322142_1024x1024.webp"
                                            alt="news-img" /></a>
                                    </div>
                                    <div className="news_contant">
                                        <p>
                                            <span><i class="fa-regular fa-calendar-days"></i> May 13, 2023</span>
                                            <a href="#"><i class="fa-regular fa-message"></i> 1 Comment</a>
                                        </p>
                                        <h3><a href="#">All time fresh every time healthy</a></h3>
                                        <p className="news_desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget
                                            dolor. ...
                                        </p>
                                        <span>Spacing Tech</span>
                                    </div>
                                    <span className="news_caount">2</span>
                                </div></h4>
                            </div>
                            <div className='item'>
                                <h4><div className="news">
                                    <div className="news_img">
                                        <a href="#"><img src="/img/blog-3_01262cce-ca6e-4f5a-a9a8-93b9016af364_1024x1024.webp"
                                            alt="news-img" /></a>
                                    </div>
                                    <div className="news_contant">
                                        <p>
                                            <span><i class="fa-regular fa-calendar-days"></i> May 13, 2023</span>
                                            <a href="#"><i class="fa-regular fa-message"></i> 1 Comment</a>
                                        </p>
                                        <h3><a href="#">All time fresh every time healthy</a></h3>
                                        <p className="news_desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget
                                            dolor. ...
                                        </p>
                                        <span>Spacing Tech</span>
                                    </div>
                                    <span className="news_caount">3</span>
                                </div></h4>
                            </div>
                            <div className='item'>
                                <h4><div className="news">
                                    <div className="news_img">
                                        <a href="#"><img src="/img/blog-3_01262cce-ca6e-4f5a-a9a8-93b9016af364_1024x1024.webp"
                                            alt="news-img" /></a>
                                    </div>
                                    <div className="news_contant">
                                        <p>
                                            <span><i class="fa-regular fa-calendar-days"></i> May 13, 2023</span>
                                            <a href="#"><i class="fa-regular fa-message"></i> 1 Comment</a>
                                        </p>
                                        <h3><a href="#">All time fresh every time healthy</a></h3>
                                        <p className="news_desc">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget
                                            dolor. ...
                                        </p>
                                        <span>Spacing Tech</span>
                                    </div>
                                    <span className="news_caount">4</span>
                                </div></h4>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="all_news"><Link to="/allnews">View all news</Link></div>
                </div>
            </div>
        </>
    );
};

export default News;