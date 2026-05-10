export default function Footer() {
  return (
    <footer className="bg-[#0f1a0f] px-10 py-12 mt-10">

      <div className="grid md:grid-cols-3 gap-8">

        {/* Left: Logo + description */}
        <div>

          <h2 className="text-white text-2xl font-bold">
            🌿 FloraVision.
          </h2>

          <p className="text-gray-400 mt-3">
            Your trusted plant store.
          </p>

        </div>


        {/* Middle: Quick Links */}
        <div>

          <h3 className="text-white text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-green-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Plants
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Reviews
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Contact
            </li>

          </ul>

        </div>


        {/* Right: Newsletter */}
        <div>

          <h3 className="text-white text-xl font-semibold mb-4">
            Newsletter
          </h3>

          <p className="text-gray-400 mb-4">
            Subscribe for latest plant updates.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-[#1E3320] text-white outline-none"
          />

          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
            Subscribe
          </button>

        </div>

      </div>

    </footer>
  )
}