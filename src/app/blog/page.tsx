import React from "react";

const BlogPage = () => {
  return (
    <div>
    <div className="relative h-[316px] min-h-[316px] w-[1348px] mx-auto bg-cover bg-center " style={{ backgroundImage: "url('/shopbackground1.png')" }}>          
    <div className="absolute inset-0  flex items-center justify-center" >
    <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-[#000000]">Blog</h2>
          <p className="text-gray-600">Home &gt;blo</p>
    </div>
    </div>
    </div>
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="md:col-span-8">
          {/* Blog Post */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="/blogimage1.png" // Replace with actual image URL
              alt="Blog Post"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
                <span>Admin</span>
                <span className="text-gray-400">|</span>
                <span>14 Oct 2022</span>
                <span className="text-gray-400">|</span>
                <span>Wood</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4">
          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Categories
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex justify-between">
                <span>Crafts</span>
                <span className="text-gray-500">2</span>
              </li>
              <li className="flex justify-between">
                <span>Design</span>
                <span className="text-gray-500">8</span>
              </li>
              <li className="flex justify-between">
                <span>Handmade</span>
                <span className="text-gray-500">7</span>
              </li>
              <li className="flex justify-between">
                <span>Interior</span>
                <span className="text-gray-500">1</span>
              </li>
              <li className="flex justify-between">
                <span>Wood</span>
                <span className="text-gray-500">6</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Posts
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Recent Post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-800">
                    Going all-in with millennial design
                  </h4>
                  <span className="text-gray-500 text-xs">03 Aug 2022</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Recent Post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-800">
                    Exploring new ways of decorating
                  </h4>
                  <span className="text-gray-500 text-xs">01 Aug 2022</span>
                </div>
              </li>
              {/* Add more recent posts as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
