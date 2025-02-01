import React from "react";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Carousel from "../components/Carousel";
import Why from "../components/Why";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import { Helmet } from "react-helmet";
import Benefits from "../components/Benefits";
// import Contact from "../components/Contact";

const Contact = React.lazy(() => import("../components/Contact"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aryavrat</title>
      </Helmet>
      <Hero />
      <Hero2 />
      <Carousel />
      <Why />
      <Benefits />
      <Service />
      <Testimonial />
      <Faq />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </React.Suspense>
    </>
  );
};

export default Home;
