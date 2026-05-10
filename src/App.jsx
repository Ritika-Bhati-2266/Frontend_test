import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import TrendingPlants from "./components/TrendingPlants"  // ← ADD

function App() {
  return (
    <div className="bg-[#1A2217] min-h-screen">
      
      <Navbar />
      <Hero />
      <Products />
      <TrendingPlants />  {/* ← ADD */}

    </div>
  )
}

export default App