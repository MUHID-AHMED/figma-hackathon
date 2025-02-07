import React from 'react'
import Image from 'next/image';
import { IoIosContact } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <div>
                <Image src={"/logo.png"} alt='' width={50} height={42} />
              </div>
      <span className=" text-3xl font-mono font-bold leading-10 ">Furniro</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
               <a href="home"className="mr-12 ml-5 text-black">Home</a>
               <a href="shop"className="mr-12 text-black">Shop</a>
               <a href="blog"className="mr-12 text-black">Blog</a>
               <a href="contact"className="mr-12 text-black">Contact</a>
             </nav>
             <div className=' flex space-x-7'>
               <IoIosContact className='w-[28px] h-[28px]' />
               <IoIosSearch className='w-[28px] h-[28px]' />
               <IoIosHeartEmpty className='w-[28px] h-[28px]' />
               <CiShoppingCart className='w-[28px] h-[28px]' />
             </div>
  
  </div>
</header>

    </div>
  )
}

export default Header