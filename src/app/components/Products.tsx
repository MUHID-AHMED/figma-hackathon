
'use client';

import Image from 'next/image';

const products = [
  {
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    image: '/syltherine.png',
    discount: '-30%',
  },
  {
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    image: '/leviosa.png',
  },
  {
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    image: '/lolito.png',
    discount: '-50%',
  },
  {
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    image: '/respira.png',
    tag: 'New',
  },
  {
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rp 1.500.000',
    image: '/grifo.png',
  },
  {
    name: 'Muggo',
    description: 'Small mug',
    price: 'Rp 150.000',
    image: '/muggo.png',
    tag: 'New',
  },
  {
    name: 'Pingky',
    description: 'Cute bed set',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    image: '/pingky.png',
    discount: '-50%',
  },
  {
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 'Rp 500.000',
    image: '/potty.png',
  },
];

export default function OurProducts() {
  return (
    <div>
    <section className="py-16 text-center px-14 md:px-14 lg:px-20 justify-center">
      <h2 className="text-3xl font-bold  text-[#3A3A3A]">Our Products</h2>

      <div className=" container mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-10 justify-center mx-auto">
        {products.map((product, index) => (
          <div key={index} className="relative w-[285px] h-[446px] bg-white shadow-md  overflow-hidden flex flex-col items-center">
            {/* Product Image */}
            <div className="relative w-[285px] h-[301px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105 duration-300"
              />

              {/* 🔴 Circular Discount Tag (Top-Right) */}
              {product.discount && (
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold mr-2 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  {product.discount}
                </span>
              )}

              {/* 🟢 "New" Tag (Pill Shape, Top-Right) */}
              {product.tag && (
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold mr-2 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4 text-left w-[285px] h-[145px]  bg-[#F4F5F7]">
              <h3 className="text-xl font-bold text-[#3A3A3A]">{product.name}</h3>
              <p className=" text-sm mt-1 text-[#898989]">{product.description}</p>
              <div className="mt-2">
                <span className="text-lg font-bold text-[#3A3A3A]">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-[#B0B0B0] line-through ml-2">{product.oldPrice}</span>
                )}
              </div>
            </div>

            {/* Hover Cart Options */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="flex justify-center ">
      <button className="border border-[#B88E2F] text-[#B88E2F] w-[245px] h-[48px] mb-14 font-semibold text-lg hover:bg-[#B88E2F] hover:text-white transition">
        Show More
      </button>
    </div>
</div>
  );
}
