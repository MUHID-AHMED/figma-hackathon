import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <div className="relative h-[316px] min-h-[316px] w-[1348px] mx-auto bg-cover bg-center " style={{ backgroundImage: "url('/shopbackground1.png')" }}>          
    <div className="absolute inset-0  flex items-center justify-center" >
    <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-[#000000]">Contact</h2>
          <p className="text-gray-600">Home &gt; Contact</p>
    </div>
    </div>
    </div>
    <div className="max-w-7xl mx-auto px-40 py-16 mt-10">
      {/* Heading */}
      <div className="text-center mb-10 ">
        <h2 className="text-4xl font-bold text-[#000000]">Get In Touch With Us</h2>
        <p className="text-[#9F9F9F] text-lg mt-2 px-24">
          For more information about our product & services, please feel free to drop us an email.
          Our staff is always here to help you out. Do not hesitate!
        </p>
      </div>

      {/* Contact Section */}
      <div className="container mt-24 grid md:grid-cols-2 ">
        {/* Left Side - Contact Info */}
        <div className="space-y-20">
          <div className="flex items-start gap-5">
            <FaMapMarkerAlt className="w-[22px] h-[27px] text-primary text-2xl  " />
            <div>
              <h3 className="text-2xl font-semibold text-[#000000]">Address</h3>
              <p className="text-[#000000] text-lg ">
                236 5th SE Avenue, New<br/> York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaPhoneAlt className="w-[22px] h-[30px] text-primary text-2xl " />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Phone</h3>
              <p className="text-[#000000] text-lg">Mobile: +(84) 546-6789</p>
              <p className="text-[#000000] text-lg">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaClock className="w-[22px] h-[22px] text-primary text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Working Time</h3>
              <p className="text-[#000000] text-lg">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-[#000000] text-lg">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white mt-1">
          <form className="space-y-10">
            <div>
              <label className="block text-[#000000] font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-[528px] h-[75px] mt-5 px-4 py-2 border border-[#9F9F9F] rounded-xl focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-[#000000] font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-[528px] h-[75px] mt-5 px-4 py-2 border border-[#9F9F9F] rounded-xl focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-[#000000] font-semibold">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-[528px] h-[75px] mt-5 px-4 py-2 border border-[#9F9F9F] rounded-xl focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-[#000000] font-semibold">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                rows={4}
                className="w-[528px] h-[120px] mt-5 px-4 py-2 border border-[#9F9F9F] rounded-xl focus:ring-primary focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-[237px] h-[55px] bg-[#B88E2F] text-white py-2 rounded-lg  hover:bg-white hover:text-[#B88E2F] transition" >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div> 
    <div className='items-center justify-center '> 
    <img
    src="./services.png"
    alt=""
    className='w-[1440px] h-[270px] object-cover mx-auto'
    />
  </div>
    </div>
  );
};

export default ContactPage;
