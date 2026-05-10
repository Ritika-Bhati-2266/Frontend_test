export default function O2Plants() {
  return (
    <section className="px-10 py-16 flex items-center gap-10 bg-[#1E3320] mx-10 rounded-3xl my-10">
      <img
        src="https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?w=400"
        className="w-64 h-64 object-cover rounded-2xl"
      />
      <div>
        <h2 className="text-white text-3xl font-bold">O₂ Plants</h2>
        <p className="text-gray-300 mt-3">Fresh oxygen plants for your home.</p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  )
}