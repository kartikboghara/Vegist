import React from "react";
import { Link } from "react-router-dom";
import { FaStreetView } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact_us=()=>{
    return(
        <>
        <div className="main_inner_pages">
        <img src="/img/breadcrumb.webp" alt="breadcrumb-image"/>
            <div className="container">
                <div className="row">
                <div className="inner">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><span>Contact Us</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="contact_main" data-aos="zoom-in">
            <div className="container">
                <div className="inner">
                    <div className="contact_title">
                        <h2>Contact us</h2>
                    </div>
                    <div className="contact_dscr">
                        <p>Got a question? we had love to hear from you. send us a message and we will respond as soon as possible.</p>
                    </div>
                    <div className="conatact_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14862.580940648533!2d71.65693108735601!3d21.364484235919043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2118a78378e13%3A0xa67e14ac1f69ab13!2sJesar%2C%20Gujarat%20364510!5e0!3m2!1sen!2sin!4v1704524659909!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="conatact_content">
                    <div className="contact_form">
                        <div className="ctc_form_title">
                            <h6>Drop us message</h6>
                        </div>
                        <form>
                            <label name="name">Name</label>
                            <input type="text" placeholder="Enter your name..."/>
                            <label name="email">Email</label>
                            <input type="text" placeholder="Enter your email..."/>
                            <label name="message">Message</label>
                            <textarea name="conatact_msg" placeholder="Enetr your message..."></textarea>
                        </form>
                        <a href="#">Submit</a>
                    </div>
                    <div className="contact_info">
                        <div className="ctc_info_title">
                            <h6>Get in touch</h6>
                        </div>
                        <div className="ctc_info_content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. rerum earum eveniet dolorum suscipit nesciunt incidunt animi repudiandae ab at, tenetur distinctio voluptate vel illo similique.</p>
                        </div>
                        <div className="ctc_info_list">
                            <p><span><FaStreetView /></span><span>Address</span></p>
                            <p>255 parker st. englishtown, NJ 07726</p>
                            <p><span><FaPhoneAlt /></span><span>Phone</span></p>
                            <p>+1234568999</p>
                            <p><span><MdEmail /></span><span>Email</span></p>
                            <p>kartikboghara999@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default Contact_us;