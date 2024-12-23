import { Swiper, SwiperSlide } from "swiper/react";
// icons

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import {
//   RxCrop,
//   RxDesktop,
//   RxPencil2,
//   RxReader,
//   RxRocket,
//   RxArrowTopRight,
// } from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  // {
  //   icon: <RxCrop />,
  //   title: "Branding",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Creating UX/UI, responsive web design.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Landing page, e commerce, SPA.",
  },
  // {
  //   icon: <RxReader />,
  //   title: "Copywriting",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Help users find your site by optimizing it.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(96,90,113,0.15)]  lg:mt-10  h-max rounded-lg px-6 py-8 flex 
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(122,115,142,0.15)]
            transition-all duration-300 "
            >
              <div className="mb-4 text-3xl text-accent">{item.icon}</div>
              <div>
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="mt-5 text-3xl">
                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
