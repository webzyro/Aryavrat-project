import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import car5 from "../assets/car5.png";

const Carousel = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-5xl text-center font-bold text-gray-800 py-10">
        Trusted by 12000+ high growth brands
      </h1>
      <div className="flex items-center justify-center ml-5 md:ml-10">
        <Swiper
          // spaceBetween={50}
          // slidesPerView={4}
          loop={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          style={{
            height: "100px",
          }} // Increase the height of the slider
        >
          <SwiperSlide>
            <img src={car1} alt="Placeholder" className="w-32" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car2} alt="Placeholder" className="w-32" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car3} alt="Placeholder" className="w-32" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car4} alt="Placeholder" className="w-32" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car5} alt="Placeholder" className="w-32" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
