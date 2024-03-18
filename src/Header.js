import React from "react";
import { FaSearch } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";


const Header = () => {

    const kartik = () => {
        var a = document.getElementById('popo');

        if (a.style.display == 'none') {
            a.style.display = 'block';
        }
        else {
            a.style.display = 'none';
        }
    }


    return (
        <>

            <div className="ent_to_top">
                <div className="inner">
                    <a href="#" id="myBtn"><MdKeyboardDoubleArrowUp /></a>
                </div>
            </div>

            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="inner">
                            <div className="contain">
                                <p><b>Free shipping</b> orders from all item</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-mid ">
                    <div className="container">
                        <div className="inner">
                            <div className="mid-left">
                                <a href="#">
                                    <img src="/img/logo-1.svg" alt="logo-img" width="105px" />
                                </a>
                            </div>
                            <div className="mid-mid">
                                <form method="post">
                                    <input type="text" placeholder="Search oue store" />
                                    <button className="search-btn" type="submit"><FaSearch /></button>
                                </form>
                            </div>
                            <div className="mid-right">
                                <ul className="shop-element">
                                    <li className="menu_icon" onClick={kartik}>
                                        <FaBars />
                                    </li>
                                    <li className="user">
                                        <div className="user-icon">
                                            <SlUser />
                                        </div>
                                        <div className="acc">
                                            <Link to="/pages/account">Account</Link>
                                            <div className="acc-re-lo">
                                                <Link to="/pages/account">Register</Link>
                                                <Link to="/pages/account">Login</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="wishlist">
                                        <div className="wish-icon">
                                            <Link to="/wishlist"><IoMdHeartEmpty /></Link>
                                            <span class="count">0</span>
                                        </div>
                                    </li>
                                    <li className="cart">
                                        <div className="cart-icon">
                                            <a href="#"><BsHandbag /></a>
                                            <span className="count">0</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="haeder-bottom">
                    <div className="container">
                        <div className="inner">
                            <div className="nev">
                                <ul className="menu">
                                    <li className="list"><Link to="/">home </Link>
                                        {/* <ul className="sub-menu">
                                            <li className="sub-inner-menu"><a href="#">vegist home  <div className="darrow"><MdKeyboardArrowDown /></div></a>
                                                <ul className="sub-inner-list">
                                                    <li><a href="#">h-sub-inner</a></li>
                                                    <li><a href="#">h-sub-inner</a></li>
                                                    <li><a href="#">h-sub-inner</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">vegist home</a></li>
                                            <li><a href="#">vegist home</a></li>
                                            <li><a href="#">vegist home</a></li>
                                            <li><a href="#">vegist home</a></li>
                                            <li><a href="#">vegist home</a></li>
                                            <li><a href="#">vegist home</a></li>
                                            <li><a href="#">vegist home</a></li>
                                            <li><a href="#">vegist home</a></li>
                                        </ul> */}
                                    </li>
                                    <li className="list"><Link to="shop">shop <span className="darrow"><MdKeyboardArrowDown /></span></Link>
                                        <div className="sub-shop">
                                            <div className="shop-list"><a href="#"><b>fresh food</b></a>
                                                <ul>
                                                    <li><a href="#">Fruit & nut </a></li>
                                                    <li><a href="#">Snack foods </a></li>
                                                    <li><a href="#">Organics nut gifts </a></li>
                                                    <li><a href="#">Non-dairy </a></li>
                                                    <li><a href="#">Blackberry organic </a></li>
                                                    <li><a href="#">Fresh & healthy food </a></li>
                                                </ul>
                                            </div>
                                            <div className="shop-list"><a href="#"><b>Mixedfruits </b></a>
                                                <ul>
                                                    <li><a href="#">Oranges </a></li>
                                                    <li><a href="#">Ghee beverages </a></li>
                                                    <li><a href="#">Ranch salad </a></li>
                                                    <li><a href="#">Fresh avocado </a></li>
                                                    <li><a href="#">Fresh blueberry </a></li>
                                                    <li><a href="#">Fresh apple (5kg) </a></li>
                                                </ul>
                                            </div>
                                            <div className="shop-list"><a href="#"><b>Bananas & plantains</b></a>
                                                <ul>
                                                    <li><a href="#">Fresh gala </a></li>
                                                    <li><a href="#">Fifts mixed fruits </a></li>
                                                    <li><a href="#">Fresh organic </a></li>
                                                    <li><a href="#">Vegetable tomato </a></li>
                                                    <li><a href="#">Fresh litchi 100% organic </a></li>
                                                    <li><a href="#">Fresh blueberry </a></li>
                                                </ul>
                                            </div>
                                            <div className="shop-list"><a href="#"><b>Apples berries</b></a>
                                                <ul>
                                                    <li><a href="#">Pears produce </a></li>
                                                    <li><a href="#">Fresh green orange </a></li>
                                                    <li><a href="#">Blackberry 100% organic </a></li>
                                                    <li><a href="#">Fresh grassben </a></li>
                                                    <li><a href="#">Deli roll cake </a></li>
                                                    <li><a href="#">Fresh grassben </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list"><Link to="collection">collection <span className="darrow"><MdKeyboardArrowDown /></span></Link>
                                        <div className="sub-colle">
                                            <div className="colle-list">
                                                <a href="#"><img src="/img/banner4_560x350_crop_center.jpg" alt="img" /></a>
                                                <span>Bestseller</span>
                                            </div>
                                            <div className="colle-list">
                                                <a href="#"><img
                                                    src="/img/banner5_19e6fd2c-70b2-459d-b4d5-d7680262856a_560x350_crop_center.jpg"
                                                    alt="img" /></a>
                                                <span>Special product</span>
                                            </div>
                                            <div className="colle-list">
                                                <a href="#"><img src="/img/banner4_560x350_crop_center.jpg" alt="img" /></a>
                                                <span>Featured produc</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list"><Link to="pages">pages <span className="darrow"><MdKeyboardArrowDown /></span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/pages/about">About us</Link></li>
                                            <li><Link to="/pages/faq">Faq's</Link></li>
                                            <li><Link to="/pages/payment">Payment policy</Link></li>
                                            <li><Link to="/pages/privacy-policy">Privacy policy</Link></li>
                                            <li><Link to="/pages/contact-us">Contact us</Link></li>
                                            <li><Link to="/pages/return-policy">Return policy</Link></li>
                                            <li><Link to="/pages/terms-conditions">Terms & conditions</Link></li>
                                            <li><Link to="/pages/error">Page 404</Link></li>
                                        </ul>
                                    </li>
                                    <li className="list"><Link to="blogs">blogs </Link></li>
                                    <li><Link to="/">buy vegist</Link></li>
                                </ul>
                            </div>
                            <div className="call-line">
                                <div className="call-line-icon">
                                    <a href="#"><img src="/img/icon_contact_1d544c80-aa06-4dd2-a206-999b26d599fd.png"
                                        alt="call-img" /></a>
                                </div>
                                <div className="callline-contain">
                                    <p><span>hotline:</span>
                                        0123456789
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_pop_pop" id="popo">
                <li className="menu_icon2" onClick={kartik}>
                                        <MdOutlineClose />
                                    </li>
                    <div className="inner">
                        <ul className="menu">
                            <li className="list"><Link to="/">home </Link>
                                {/* <ul className="sub_menu">
                                    <li><a href="#">vegist home</a></li>
                                    <li><a href="#">vegist home</a></li>
                                    <li><a href="#">vegist home</a></li>
                                    <li><a href="#">vegist home</a></li>
                                    <li><a href="#">vegist home</a></li>
                                    <li><a href="#">vegist home</a></li>
                                    <li><a href="#">vegist home</a></li>
                                    <li><a href="#">vegist home</a></li>
                                </ul> */}
                            </li>
                            <li className="list"><Link to="shop">shop <span className="darrow"><MdKeyboardArrowDown /></span></Link>
                                <ul className="sub_menu">
                                    <li><a href="#">fresh food</a></li>
                                    <li><a href="#">Mixedfruits</a></li>
                                    <li><a href="#">Bananas & plantains</a></li>
                                    <li><a href="#">Apples berries</a></li>
                                </ul>
                            </li>
                            <li className="list"><Link to="collection">collection <span className="darrow"><MdKeyboardArrowDown /></span></Link>
                                <ul className="sub_menu">
                                    <li><a href="#">Bestseller</a></li>
                                    <li><a href="#">Special product</a></li>
                                    <li><a href="#">Featured produc</a></li>
                                </ul>
                            </li>
                            <li className="list"><Link to="pages">pages <span className="darrow"><MdKeyboardArrowDown /></span></Link>
                                <ul className="sub_menu">
                                    <li><Link to="/pages/about">About us</Link></li>
                                    <li><Link to="/pages/faq">Faq's</Link></li>
                                    <li><Link to="/pages/payment">Payment policy</Link></li>
                                    <li><Link to="/pages/privacy-policy">Privacy policy</Link></li>
                                    <li><Link to="/pages/contact-us">Contact us</Link></li>
                                    <li><Link to="/pages/return-policy">Return policy</Link></li>
                                    <li><Link to="/pages/terms-conditions">Terms & conditions</Link></li>
                                    <li><Link to="/pages/error">Page 404</Link></li>
                                </ul>
                            </li>
                            <li className="list"><Link to="blogs">blogs</Link></li>
                            <li><Link to="/">buy vegist</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    );
};
export default Header;