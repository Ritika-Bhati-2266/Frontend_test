export default function Reviews() {

  const reviews = [
    {
      name: "Ronnie Hamill",
      stars: "⭐⭐⭐⭐⭐",
      text: "I can't express how thrilled I am with my new natural plants!",
    },

    {
      name: "Sarah Johnson",
      stars: "⭐⭐⭐⭐⭐",
      text: "Beautiful quality plants and super fast delivery. Loved it!",
    },

    {
      name: "David Lee",
      stars: "⭐⭐⭐⭐⭐",
      text: "My room looks fresh and aesthetic now. Highly recommended!",
    },
  ]


  return (
    <section className="px-10 py-16">

      <h2 className="text-white text-3xl font-bold mb-8">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="bg-[#1E3320] rounded-2xl p-6 shadow-lg"
          >

            <div className="text-4xl mb-3">
              👤
            </div>

            <h3 className="text-white text-2xl font-bold">
              {review.name}
            </h3>

            <p className="text-yellow-400 mt-2">
              {review.stars}
            </p>

            <p className="text-gray-300 mt-4">
              {review.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}