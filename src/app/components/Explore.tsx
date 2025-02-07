
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ArrowRight } from "lucide-react";

// const Explore = () => {
//   return (
//     <section className="bg-[#F6F3EC] py-20 px-6 lg:px-20 w-[1440px] h-[670px] ">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left Side Content */}
//         <div>
//           <h2 className="text-4xl font-bold justify-center text-gray-900 leading-tight">
//             50+ Beautiful rooms inspiration
//           </h2>
//           <p className="text-gray-600 mt-4 text-lg">
//             Our designer already made a lot of beautiful prototype of rooms that inspire you.
//           </p>
//           <button className="mt-6 bg-[#D4AA60] text-white px-6 py-3 text-lg font-medium rounded-md flex items-center gap-2 hover:bg-[#c89a55] transition">
//             Explore More <ArrowRight size={20} />
//           </button>
//         </div>

//         {/* Right Side Swiper */}
//         <div className="relative">
//           <Swiper modules={[Navigation]} navigation loop className="rounded-lg overflow-hidden">
//             <SwiperSlide>
//               <img src="/explore1.png" alt="Room 1" className="w-full h-96 object-cover rounded-lg" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img src="/explore2.png" alt="Room 2" className="w-full h-96 object-cover rounded-lg" />
//             </SwiperSlide>
//           </Swiper>

//           {/* Pagination Dots (Manually Styled) */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//             <span className="w-3 h-3 bg-[#D4AA60] rounded-full"></span>
//             <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//             <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Explore;


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  { id: 1, src: "/explore1.png", title: "Inner Peace", subtitle: "01 — Bed Room" },
  { id: 2, src: "/explore2.png", title: "Cozy Vibes", subtitle: "02 — Dining Room" },
];

const ExplorePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#FCF8F3] py-16 px-6 lg:px-20 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Title & Description */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-black">50+ Beautiful rooms 
          inspiration</h2>
          <p className="text-xl text-[#616161]">
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] text-white w-[176px] h-[48px]  hover:bg-white hover:text-[#B88E2F] transition">
            Explore More
          </button>
        </div>

        {/* Right Side: Swiper Slider */}
        <div className="relative w-[404px] h-[582px] max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".next-btn" }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className=" overflow-hidden"
          >
            {images.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  className={`relative transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "scale-105 z-10" : "scale-90 opacity-80"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-[404px] h-[582px] object-cover rounded-xl"
                  />
                  <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-md shadow-md">
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Only Right Navigation Button */}
          <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition z-10">
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots (Now below the image) */}
          <div className="custom-pagination flex justify-center   mt-4 space-x-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
