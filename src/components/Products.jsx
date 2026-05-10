const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Snake Plant",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Cactus",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop",
  },
]

export default function Products() {
  return (
    <section className="px-10 py-20">

      <h2 className="text-4xl font-bold mb-10">
        Popular Plants
      </h2>

      <div className="grid grid-cols-3 gap-8">

        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >

            <img
              src={plant.image}
              alt={plant.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold">
                {plant.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {plant.price}
              </p>

              <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg">
                Buy Now
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}