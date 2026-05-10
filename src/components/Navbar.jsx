export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#1A2217]">

      <h1 className="text-3xl font-bold text-white">
        🌿 FloraVision.
      </h1>

      <ul className="flex gap-8 text-lg font-medium text-white">

        <li className="cursor-pointer hover:text-green-400">
          Home
        </li>

        <li className="cursor-pointer hover:text-green-400">
          Plants Type ▼
        </li>

        <li className="cursor-pointer hover:text-green-400">
          Contact
        </li>

      </ul>

      <div className="text-white text-2xl cursor-pointer">
        ☰
      </div>

    </nav>
  )
}