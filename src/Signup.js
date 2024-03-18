import React from "react";
import { Link } from "react-router-dom";

const Signup=()=>{
    return(
        <>
        <div className="main_inner_pages">
        <img src="/img/breadcrumb.webp" alt="breadcrumb-image"/>
            <div className="container">
                <div className="row">
                <div className="inner">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><span>Create account</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="account_main" data-aos="zoom-in">
            <div className="container">
                <div className="inner">
                    <div className="acc_log_right">
                        <div className="login">
                            <form>
                                <div className="form_title">
                                    <h2>Create Account</h2>
                                    <p>Please register below account detail</p>
                                </div>
                                <label>First Name</label>
                                <input type="name" placeholder="First Name" />
                                <label>Last Name</label>
                                <input type="name" placeholder="Last Name" />
                                <label>Email</label>
                                <input type="email" placeholder="Email" />
                                <label>Password</label>
                                <input type="password" placeholder="Password" />
                                <a href="#">Create in</a>
                                {/* <a href="#">Forgot your password?</a> */}
                            </form>
                        </div>
                    </div>
                    <div className="acc_log_left">
                        <h2>Don't have an account?</h2>
                        <Link to="/pages/account" className="criat_acc">Login</Link>
                        <div className="term_privacy">
                            <p className="term_cond"><span>*</span>
                                <a href="#">Terms & conditions.</a>
                            </p>
                            <p className="pri_pol"><span>Your privacy and security are important to us. For more information on how we use your data read our</span>
                                <a href="#">Terms & conditions.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Signup;