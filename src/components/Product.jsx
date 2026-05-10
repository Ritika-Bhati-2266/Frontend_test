export default function Products() {
  const plants = [
    {
      name: "Aloe Vera",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Snake Plant",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop",
    },

    {
      name: "Cactus",
      price: "$15",
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop",
    },
  ]

  return (
    <section className="px-5 py-16">

      <h2 className="text-4xl font-bold text-white mb-10">
        Popular Plants
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

            <div className="p-5 bg-[#1E3320]">

              <h3 className="text-2xl font-semibold text-white">
                {plant.name}
              </h3>

              <p className="text-gray-300 mt-2">
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