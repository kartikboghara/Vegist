import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdHeadsetMic } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";


const Footer = () => {

    const btn1 = () => {
        var a = document.getElementById('tc');

        if (a.style.display == 'none') {
            a.style.display = 'block';
        }
        else {
            a.style.display = 'none';
        }
        
    }
    const btn2 = () => {
        var a = document.getElementById('srv');

        if (a.style.display == 'none') {
            a.style.display = 'block';
        }
        else {
            a.style.display = 'none';
        }
    }
    const btn3 = () => {
        var a = document.getElementById('pt');

        if (a.style.display == 'none') {
            a.style.display = 'block';
        }
        else {
            a.style.display = 'none';
        }
    }
    const btn4 = () => {
        var a = document.getElementById('myc');

        if (a.style.display == 'none') {
            a.style.display = 'block';
        }
        else {
            a.style.display = 'none';
        }
    }

    return (
        <>
            {/* <!-- footer  --> */}
            <div className="footer" data-aos="zoom-in-up">
                <div className="container">
                    <div className="footer_top">
                        <div className="item">
                            <a href="#"><span className="icon"><FaTruck /></span></a>
                            <span className="contant">Free delivery</span>
                        </div>
                        <div className="item">
                            <a href="#"><span className="icon"><BsCash /></span></a>
                            <span className="contant">Cash on delivery</span>
                        </div>
                        <div className="item">
                            <a href="#"><span className="icon"><FaArrowRightArrowLeft /></span></a>
                            <span className="contant">30 days returns</span>
                        </div>
                        <div className="item">
                            <a href="#"><span className="icon"><MdHeadsetMic /></span></a>
                            <span className="contant">Online support</span>
                        </div>
                    </div>
                    <div className="footer_mid">
                        <div className="row">
                            <div className="item">
                                <div className="logo"><a href="#"><img src="/img/logo-1.svg" alt="logo-img" width="105px"
                                    height="53px" /></a></div>
                                <div className="contant">
                                    <p>Lorem ipsum iasds simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry's standard dummy text ever since the</p>
                                </div>
                            </div>
                            <div className="item item2">
                                <div className="icon"><span className="icon"><FaLocationDot /></span></div>
                                <div className="contant">
                                    <div className="title">
                                        <span>Address</span>
                                    </div>
                                    <div className="inner_contant">
                                        <p>38 block street arean licard <br /> hamonia road sydney, australia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item item2">
                                <div className="icon"><span className="icon"><FaPhoneAlt /></span></div>
                                <div className="contant">
                                    <div className="title">
                                        <span>Get in touch</span>
                                    </div>
                                    <div className="inner_contant">
                                        <p><span>(+800) 1234 5678 90</span> <br />
                                            <span>support@demo.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="row">
                            <div className="item">
                                <div className="title" onClick={btn1}>
                                    Top categories <span className="footer-downarow"><FaSortDown/></span>
                                </div>
                                <ul className="slide" id="tc">
                                    <li><a href="#">Fresh fruits</a></li>
                                    <li><a href="#">Organic wine</a></li>
                                    <li><a href="#">Organic juice</a></li>
                                    <li><a href="#">Dairy & chesse</a></li>
                                    <li><a href="#">Fresh meat</a></li>
                                </ul>
                            </div>
                            <div className="item">
                                <div className="title" onClick={btn2}>
                                    Services <span className="footer-downarow"><FaSortDown/></span>
                                </div>
                                <ul className="slide" id="srv">
                                    <li><Link to="/pages/about">About us</Link></li>
                                    <li><Link to="/pages/faq">Faq's</Link></li>
                                    <li><Link to="/pages/contact-us">Contact us</Link></li>
                                    <li><Link to="/pages/blogs">News</Link></li>
                                    <li><a href="#">Store location</a></li>
                                </ul>
                            </div>
                            <div className="item">
                                <div className="title" onClick={btn3}>
                                    Privacy & terms <span className="footer-downarow"><FaSortDown/></span>
                                </div>
                                <ul className="slide" id="pt">
                                    <li><Link to="/pages/payment">Payment policy</Link></li>
                                    <li><Link to="/pages/privacy-policy">Privacy policy</Link></li>
                                    <li><Link to="/pages/return-policy">Return policy</Link></li>
                                    <li><a href="#">Shipping policy</a></li>
                                    <li><Link to="/pages/terms-conditions">Terms & conditions</Link></li>

                                </ul>
                            </div>
                            <div className="item">
                                <div className="title" onClick={btn4}>
                                    My account <span className="footer-downarow"><FaSortDown/></span>
                                </div>
                                <ul className="slide" id="myc">
                                    <li><Link to="/pages/account">My Account</Link></li>
                                    <li><a href="#">My cart</a></li>
                                    <li><a href="#">Order history</a></li>
                                    <li><Link to="/wishlist">My wishlist</Link></li>
                                    <li><a href="#">My address</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- copy_right --> */}

            <div className="copy_right">
                <div className="container">
                    <div className="row">
                        <div className="left">
                            <p><span>Copyright</span><i class="fa-regular fa-copyright"></i><span>2023 spacingtech all rights
                                reserved</span></p>
                        </div>
                        <div className="right">
                            <a href="#"><FaWhatsapp /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaPinterest /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;