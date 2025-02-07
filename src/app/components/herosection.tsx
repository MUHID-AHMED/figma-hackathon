export default function HeroSection() {
    return (
      <div>
        <div className="relative ">
          <div className="absolute inset-5 h-[712px] w-[1440px] bg-cover bg-center">
            <img src="/background-image1.png"  alt="Interior Design" className="w-[1440px] h-[712px] object-cover"/>
          </div>
          <div className="relative bg-[#FCEED5] mt-8 p-8 md:p-10 max-w-md md:max-w-lg shadow-lg rounded-lg ml-auto mr-1">
            <p className="text-sm text-gray-600 uppercase font-semibold">
          
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#7C5A32] mt-2">
              Discover Our <br /> New Collection
            </h2>
            <p className="text-gray-700 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#7C5A32] text-white font-semibold rounded-md">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    );
  }
  
