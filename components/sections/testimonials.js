import React, { useState } from "react";
import Slider from "react-slick";

import ArrowPrev from "../../public/images/icons/arrow-prev.svg";
import ArrowNext from "../../public/images/icons/arrow-next.svg";

const testimonials = [
  {
    name: "Gregory Smith",
    image: "/images/gregory.png",
    testimonial:
      "Playing telephone between data sources slows process and results in inevitable mistakes.",
  },
  {
    name: "Maria Kovac",
    image: "/images/maria.png",
    testimonial:
      "Playing telephone between data sources slows process and results in inevitable mistakes.",
  },
  {
    name: "Olivia Smith",
    image: "/images/olivia.png",
    testimonial:
      "Playing telephone between data sources slows process and results in inevitable mistakes.",
  },
  {
    name: "Maria Kovac",
    image: "/images/maria.png",
    testimonial:
      "Playing telephone between data sources slows process and results in inevitable mistakes.",
  },
]

const Testimonials = () => {
  const settings = {
    arrows: false,
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute bottom-[-80px] pl-5",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <section className="w-full flex flex-col py-12">
      <Slider
        {...settings}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {testimonials.map((item, idx) => (
          <div className="px-5 flex items-stretch" key={idx}>
            <div className="border-2 border-[#f1f1f1] bg-[#f1f1f1] hover:border-purple transition-all rounded-lg px-[30px] py-10 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex items-center">
                  <img
                    className="flex-shrink-0 w-[50px] h-[50px] lg:w-[140px] lg:h-[140px]"
                    src={item.image}
                    alt="Icon People"
                  />
                  <p className="ml-4 font-sora font-bold text-lg text-gray capitalize lg:text-2xl">
                    {item.name}
                  </p>
                </div>
              </div>
              <p className="mt-5 font-sora text-base text-gray lg:text-xl webkit">{item.testimonial}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end pr-5">
        <div className="flex flex-none justify-between w-auto mt-10">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-purple border hover:bg-purple hover:text-white transition-all text-purple cursor-pointer"
          >
            <ArrowPrev className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-purple border hover:bg-purple hover:text-white transition-all text-purple cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Testimonials;
