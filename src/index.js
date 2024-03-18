import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Collection from './Collection';
import Buy_vegist from './Buy_vegist';
import Page from './Page';
import Shop from './Shop';
import Bloge from './Blogs';
import About from './About';
import Faqs from './Faqs';
import Payment_plc from './Payment_plc';
import Privacy_policy from './Privacy_policy';
import Terms_conditions from './Terms_conditions';
import Error from './Error';
import Return_policy from './Return_policy';
import Contact_us from './Contact_us';
import Account from './Account';
import Signup from './Signup';
import Wishlist from './Wishlist';
import Allnews from './Allnews';
import 'animate.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /><Route />
        <Route path="/shop" element={<Shop />} /><Route />
        <Route path="/pages" element={<Page />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/faq" element={<Faqs />} />
        <Route path="/pages/payment" element={<Payment_plc />} />
        <Route path="/pages/privacy-policy" element={<Privacy_policy />} />
        <Route path="/pages/terms-conditions" element={<Terms_conditions />} />
        <Route path="/pages/return-policy" element={<Return_policy />} />
        <Route path="/pages/contact-us" element={<Contact_us />} />
        <Route path="/pages/account" element={<Account />} />
        <Route path="/pages/error" element={<Error />} />
        <Route />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/allnews" element={<Allnews/>} />
        <Route path="/collection" element={<Collection />} /><Route />
        <Route path="/blogs" element={<Bloge />} /><Route />
        <Route path="/buy-vegist" element={<Buy_vegist />} /><Route />
      </Routes>
      <Footer />
    </BrowserRouter >
  </>
);

