export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      
      <h1 className="text-3xl font-bold text-green-700">
        PlantShop
      </h1>

      <ul className="flex gap-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-green-600">
          Home
        </li>

        <li className="cursor-pointer hover:text-green-600">
          Plants
        </li>

        <li className="cursor-pointer hover:text-green-600">
          About
        </li>

        <li className="cursor-pointer hover:text-green-600">
          Contact
        </li>
      </ul>

    </nav>
  )
}