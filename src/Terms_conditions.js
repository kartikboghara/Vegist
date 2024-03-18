import React from "react";
import { Link } from "react-router-dom";

const Terms_conditions = () => {
    return (
        <>
            <div className="main_inner_pages">
                <img src="/img/breadcrumb.webp" alt="breadcrumb-image" />
                <div className="container">
                    <div className="row">
                        <div className="inner">
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <li><span>Terms conditions</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="terms_conditions" data-aos="zoom-in">
                <div className="container">
                    <div className="title">
                        <h2>Terms & conditions</h2>
                    </div>
                    <ul>
                        <li>Our 100% buyer protection program allows for easy returns only for products not as per description/photo on the website and products which you received in damaged/defective/broken condition.</li>
                        <li>All products must be returned in their original condition along with the bills and labels..</li>
                        <li>Product after 7 days of delivery return can not accepted.</li>
                        <li>Reverse pickup orders will initiate refund once the item is picked up by our courier partner.</li>
                        <li>Customs duty & other international taxes etc. if applicable will have to be borne by the customer according to the laws of the land.</li>
                        <li>All items are carefully packaged as to avoid any form of damage.</li>
                        <li>You can raise a dispute within 7 days of delivery, in either of the two ways.</li>
                        <li>Sign into your account if you are a registered customer (easy method).</li>
                        <li>By sending an email to support@demo.com with images of broken/defective/damaged products within 7 days of delivery. please mention your order number in the email.</li>
                        <li>We will refund when your item back from warehouse. the refund amount wii be credited within 3 to 5 working days in your acoount.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Terms_conditions;