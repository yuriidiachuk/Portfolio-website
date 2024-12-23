// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/Pizza.png",
          link: "https://hot-pizza-yurii-diachuk.netlify.app/",
        },
        {
          title: "title",
          path: "/Travelfy.png",
          link: "",
        },
        {
          title: "title",
          path: "/bankist.png",
          link: "https://bankist-wabsite-yurii-diachuk.netlify.app/",
        },
        {
          title: "title",
          path: "/Forkify.png",
          link: "https://recipe-website-forkify-yurii-diachuk.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
// icons

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] xl:h-[640px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="relative flex items-center justify-center overflow-hidden rounded-lg group">
                    <div
                      className="relative flex items-center justify-center overflow-hidden group"
                      key={index}
                    >
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt="image"
                        key={index}
                      />

                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0bcf70] to-[#1CD4D4] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 transition-all duration-300 translate-y-full group-hover:-translate-y-10 group-hover:lg:-translate-y-24 group-hover:xl:-translate-y-32">
                        <div>
                          <a
                            className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                            href={image.link}
                          >
                            <div className="delay-100">LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:-translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
