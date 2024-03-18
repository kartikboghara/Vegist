import React from "react";
import Main_slider from './Main_slider';
import Main_banner from './Main_banner';
import Category from './Category';
import Tranding_product from './Tranding_product';
import Deal_banner from './Deal_banner';
import Customer_say from './Customer_say';
import News from './News';
import Shopify from './Shopify';
import Brand_logo from './Brand_logo';

const Home = () => {

    return (
        <>
            <Main_slider />
            <Main_banner />
            <Category />
            <Tranding_product />
            <Deal_banner />
            <Tranding_product />
            <Customer_say />
            <News />
            <Shopify />
            <Brand_logo />
        </>
    );
}
export default Home;