export default function BrowseRange() {
    const categories = [
      { name: "Dining", image: "/dining.png" },
      { name: "Living", image: "/living.png" },
      { name: "Bedroom", image: "/bedroom.png" },
    ];
  
    return (
      <section className="py-16 mt-14 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900">Browse The Range</h2>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-[381px] h-[480px] object-cover rounded-lg"
                />
                <p className="mt-5 text-lg font-bold text-gray-800">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  