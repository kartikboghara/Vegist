import React from "react";
import { Link } from "react-router-dom";

const Privacy_policy = () => {
    return (
        <>
            <div className="main_inner_pages">
                <img src="/img/breadcrumb.webp" alt="breadcrumb-image" />
                <div className="container">
                    <div className="row">
                        <div className="inner">
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <li><span>Payment policy</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="privacy_policy" data-aos="zoom-in">
                <div className="container">
                    <div className="title">
                        <h2>Privacy policy</h2>
                    </div>
                    <ul>
                        <li>Delivery charge varies with each product. most of product free delivery in India. some items may have a shipping cost depending on the product.</li>
                        <li>The estimated time of delivery is within 7 working days for domestic orders and 15-20 working days for international orders. all orders get shipped within 4 to 5 days from the our warehouse.</li>
                        <li>We try to process all deliveries through reputed courier companies like bluedart, aramex, e-come, DTDC, DHL and fedex. In some cases, your pincode is not serviceable by these courier companies, we use Indian speed post for those deliveries..</li>
                        <li>All items are carefully packaged as to avoid any form of damage.</li>
                        <li>Basket offers you multiple payment methods. whatever your online mode of payment, you can trust assured that basket trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.</li>
                        <li>Delivery charge varies with each product. most of product free delivery in India. some items may have a shipping cost depending on the product.</li>
                        <li>You can make credit card payments through the mobile site. basket uses 256-bit encryption technology to protect your card information while securely transmitting it to the secure and trusted payment gateways managed by leading banks.</li>
                        <li>All items are carefully packaged as to avoid any form of damage.</li>
                        <li>Basket offers you multiple payment methods. whatever your online mode of payment, you can trust assured that basket trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Privacy_policy;