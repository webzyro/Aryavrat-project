import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Carousel from "../components/Carousel";
import Why from "../components/Why";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import { Helmet } from "react-helmet";
import Benefits from "../components/Benefits";
import Modal from "../components/Modal";
// import Contact from "../components/Contact";

const Contact = React.lazy(() => import("../components/Contact"));

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    let timeId = setTimeout(() => {
      setOpen(true);
      console.log(open);
    }, 5000);

    return () => clearTimeout(timeId);
  }, []);

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
      {open && <Modal onClick={handleClick} />}
    </>
  );
};

export default Home;
