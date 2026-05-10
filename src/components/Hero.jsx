export default function Hero() {
  return (
    <section className="flex items-center justify-between px-10 py-20">

      <div className="max-w-xl">
        <h1 className="text-6xl font-bold leading-tight">
          Bring Nature Into Your Home
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Discover beautiful plants to decorate your space
          and make your environment fresh and healthy.
        </p>

        <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
          Shop Now
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop"
        alt="plant"
        className="w-[500px] rounded-2xl"
      />

    </section>
  )
}