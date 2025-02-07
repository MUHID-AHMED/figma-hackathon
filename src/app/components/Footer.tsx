import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-black bg-white [w-1440] h-[505px] justify-center border-t">
  <div className="container px-10 py-10  w-[1240.01px] h-[419px] mx-auto mt-5 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className=" mt-2 flex title-font font-mono font-bold items-center md:justify-start justify-center text-black">
       <span className=" text-xl">Furniro.</span>
      </a>
      <p className="mt-14 text-sm text-gray-500">400 University Drive Suite 200 Coral Gables,
      FL 33134 USA
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 mb-10 md:mt-2 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
          Links
        </h2>
        <nav className="list-none  mt-14 space-y-10 text-black ">
          <li>
            <a href="home"className="text-black ">Home</a>
          </li>
          <li>
            <a href="shop"className="text-black ">Shop</a>
          </li>
          <li>
            <a href="about"className="text-black">About</a>
          </li>
          <li>
            <a href="contact"className="text-black">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
          Help
        </h2>
        <nav className="list-none mt-14 space-y-10 text-black">
          <li>
            <a href="#"className="text-black">Payment Options</a>
          </li>
          <li>
            <a href="#"className="text-black">Returns</a>
          </li>
          <li>
            <a href="#"className="text-black">Privacy Policies</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
  <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
    Newsletter
  </h2>
  <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 mt-10">
      <label htmlFor="placeholder" className=" text-sm text-[#9F9F9F] ">
      </label>
      <input
        type="text"
        id="placeholder"
        name="placeholder"
        placeholder='Enter your email address'
        className=" w-auto  bg-white focus:outline-none  text-[#9F9F9F] border-b bottom-2 border-black "
      />
    </div>
    <button className=" border-b border-black lg:mt-0 xl:mt-0  text-black py  focus:outline-none">
      SUBSCRIBE
    </button>
  </div>
</div>

     
    </div>
  </div>
  <div className="bg-white">
    <div className="container  border-t mx-auto py-8 flex flex-shrink-0 text-center justify-center md:text-left">
      <p className="text-black text-sm text-center sm:text-left">
        © 2024 Furino. All rights reverved
     
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer