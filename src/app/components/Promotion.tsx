"use client"
import React from 'react'
import Image from 'next/image';

// const Promotion = () => {
//   return (
      
//       <div className="h-[716px] w-[1440px] bg-cover bg-center  " style={{ backgroundImage: "url('/background-image1.png')" }}>
//                    <div className=" container h-[443px] w-[643px] mt-8 bg-[#FCEED5] py-[253px] ml-[739px] shadow-lg rounded-lg">
//             <p className="text-sm text-gray-600 uppercase font-semibold">
//               New Arrival
//             </p>
//             <h2 className="text-2xl md:text-3xl font-bold text-[#7C5A32] mt-2">
//               Discover Our <br /> New Collection
//             </h2>
//             <p className="text-gray-700 mt-4 text-sm md:text-base">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus, luctus nec ullamcorper mattis.
//             </p>
//             <button className="mt-6 px-6 py-3 bg-[#7C5A32] text-white font-semibold rounded-md">
//               BUY NOW
//             </button>
//           </div>    
//       </div>
      
//   )
// }



export default function HeroSection() {
  return (
    <div className="relative h-[716px] w-[1348px] flex items-center justify-center  mx-auto">
      {/* Background Image Placeholder */}
      <div className="container absolute inset-0 h-[716px] w-[1348px] bg-center mx-auto" style={{ backgroundImage: "url('/background-image1.png')" }}>
      
      {/* Content Box */}
      <div className="relative bg-[#fce8d8] ml-[650px] p-8 md:p-12 max-w-md md:max-w-lg rounded-lg shadow-lg text-gray-800">
        <p className="text-sm uppercase tracking-wide font-semibold text-gray-600">New Arrival</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2 text-[#a3742a]">Discover Our New Collection</h1>
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-5 bg-[#a3742a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#875d1b] transition">
          BUY NOW
        </button></div>
      </div>
    </div>
  );
}
