import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Overview from "./component/Overview";
import Highlights from "./component/Highlights";
import Price from "./component/Prices";
import Amenities from "./component/Amenities";
import Gallery from "./component/Gallery";
import Location from "./component/Location";
import ContactUs from "./component/ContactUs";
import { Element } from "react-scroll";
import WhatsApp from "./component/WhatApp";
import QueryForm from "./component/Queryform";

const App = () => {
  return (
    <>
      <Header />
      <QueryForm/>

      
      <Element name="home">
        <Home />
      </Element>

      <Element name="overview">
        <Overview />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="price">
        <Price />
      </Element>

      <Element name="amenities">
        <Amenities />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Element name="contactus">
        <ContactUs />
      </Element>


      <WhatsApp/>
    </>
  );
};

export default App;
