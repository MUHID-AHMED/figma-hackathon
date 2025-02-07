import React from 'react'

const Shopimage = () => {
  return (
    
 <div>  
    <div className="relative h-[316px] min-h-[316px] w-[1348px] mx-auto bg-cover bg-center " style={{ backgroundImage: "url('/shopbackground1.png')" }}>          
    <div className="absolute inset-0  flex items-center justify-center" >
    <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-gray-900">Shop</h2>
          <p className="text-gray-600">Home &gt; Shop</p>
    </div>
    </div>
    </div>
       
        <div className="flex justify-between items-center h-[100px] w-[1348px] mx-auto px-6 py-4 bg-[#F9F1E7] ">
      <button className="flex items-center px-4 py-2 bg-[#F9F1E7] hover:bg-gray-200">
        <span className="text-gray-600">⚙️</span>
        <span className="ml-2 text-gray-700">Filter</span>
      </button>
       <p className="text-gray-700 text-sm">
        Showing <strong>1–16</strong> of 32 results
      </p>
      <div className="flex space-x-4">
        <select className="border border-gray-300 bg-white px-3 py-2 rounded text-gray-700 text-sm">
          <option>Show 16</option>
          <option>Show 32</option>
          <option>Show 48</option>
        </select>
        <select className="border border-gray-300 bg-white px-3 py-2 rounded text-gray-700 text-sm">
          <option>Sort by Default</option>
          <option>Sort by Price</option>
          <option>Sort by Popularity</option>
        </select>
      </div>
    </div>
</div>
  )
}

export default Shopimage