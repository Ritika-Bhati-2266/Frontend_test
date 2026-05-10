export default function TrendingPlants() {

  const plants = [
    {
      name: "Aglaonema",
      price: "$25",
      type: "Indoor Plant",
      image:
        "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Money Plant",
      price: "$15",
      type: "Indoor Plant",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Peace Lily",
      price: "$20",
      type: "Indoor Plant",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop",
    },
  ]


  return (
    <section className="px-10 py-16">

      <h2 className="text-white text-4xl font-bold mb-10">
        Our Trendy Plants
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {plants.map((plant, index) => (

          <div
            key={index}
            className="bg-[#1E3320] rounded-2xl overflow-hidden shadow-lg"
          >

            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">

              <h3 className="text-2xl font-bold text-white">
                {plant.name}
              </h3>

              <p className="text-green-400 mt-2">
                {plant.type}
              </p>

              <p className="text-gray-300 mt-1">
                {plant.price}
              </p>

              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                Buy Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}