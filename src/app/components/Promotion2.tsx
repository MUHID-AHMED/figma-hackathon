

// "use client";
// import { Mail } from "lucide-react";

// const PromotionalPage = () => {
//   return (
//     <section className="bg-white py-16 px-6 lg:px-20">
//       {/* Title Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-lg text-gray-500">Share your setup with</h2>
//         <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
//           #FuniroFurniture
//         </h1>
//       </div>

//       {/* Image Grid */}
//       <div className="">
//         {/* First Column */}
//         <div className="flex flex-col space-y-4">
//           <img
//             src="/promotional1.png"
//             alt="Room 1"
//             className="w-[74px] h-[382px] object-cover "
//           />
//           <img
//             src="/promotional2.png"
//             alt="Room 5"
//             className="w-[190px] h-[323px] object-cover "
//           />
//         </div>

//         {/* Second Column */}
//         <div className="flex flex-col space-y-4">
//           <img
//             src="/promotional3.png"
//             alt="Room 2"
//             className="w-[451px] h-[312px] object-cover "
//           />
//           <img
//             src="/promotional4.png"
//             alt="Room 6"
//             className="w-[344px] h-[242px] object-cover "
//           />
//         </div>

//         {/* Large Center Image */}
//         <div className="flex justify-center">
//           <img
//             src="/promotional5.png"
//             alt="Room 3"
//             className="w-[295px] h-[392px] object-cover "
//           />
//         </div>

//         {/* Fourth Column */}
//         <div className="flex flex-col space-y-4">
//           <img
//             src="/promotional6.png"
//             alt="Room 4"
//             className="w-[290px] h-[348px] object-cover "
//           />
//           <img
//             src="/promotional7.png"
//             alt="Room 7"
//             className="w-[178px] h-[242px] object-cover "
//           />
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="mt-16 border-t pt-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-700">
//           {/* Address */}
//           <div>
//             <h3 className="text-xl font-semibold text-black">Funiro.</h3>
//             <p className="text-sm mt-10">
//               400 University Drive Suite 200 Coral Gables, FL 33134 USA
//             </p>
//           </div>

//           {/* Links */}
//           <div className="space-y-2 ">
//             <h4 className="font-medium text-gray-900">Links</h4>
//             <ul className="text-sm space-y-1 mt-10">
//               <li>
//                 <a href="#" className="hover:text-black">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-black">
//                   Shop
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-black">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-black">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Help */}
//           <div className="space-y-2">
//             <h4 className="font-medium text-gray-900">Help</h4>
//             <ul className="text-sm space-y-1">
//               <li>
//                 <a href="#" className="hover:text-black">
//                   Payment Options
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-black">
//                   Returns
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-black">
//                   Privacy Policies
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="font-medium text-gray-900">Newsletter</h4>
//             <div className="mt-3 flex border  overflow-hidden">
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Address"
//                 className="flex-1 px-3 py-2 outline-none"
//               />
//               <button className="bg-black text-white px-4 flex items-center">
//                 <Mail size={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center text-sm text-gray-500 mt-10">
//           2023 Funiro. All rights reserved
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default PromotionalPage;

"use client";

const PromotionalPage = () => {
  return (
    <section className="bg-white py-12 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-lg text-gray-500">Share your setup with</h2>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
          #FuniroFurniture
        </h1>
      </div>

      {/* Image Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-4">
        {/* First Column */}
        <div className="col-span-3 flex flex-col space-y-4">
          <img src="/promotional1.png" alt="Room 1" className="w-full h-[230px] object-cover" />
          <img src="/promotional2.png" alt="Room 2" className="w-full h-[180px] object-cover" />
        </div>

        {/* Second Column */}
        <div className="col-span-3">
          <img src="/promotional3.png" alt="Room 3" className="w-full h-[420px] object-cover" />
        </div>

        {/* Third Column */}
        <div className="col-span-3 flex flex-col space-y-4">
          <img src="/promotional4.png" alt="Room 4" className="w-full h-[250px] object-cover" />
          <img src="/promotional5.png" alt="Room 5" className="w-full h-[150px] object-cover" />
        </div>

        {/* Fourth Column */}
        <div className="col-span-3 flex flex-col space-y-4">
          <img src="/promotional6.png" alt="Room 6" className="w-full h-[280px] object-cover" />
          <img src="/promotional7.png" alt="Room 7" className="w-full h-[140px] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default PromotionalPage;





