import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import TrendingPlants from "./components/TrendingPlants"
import Reviews from "./components/Reviews"
import O2Plants from "./components/O2Plants"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#1A2217] min-h-screen">

      <Navbar />

      <Hero />

      <Products />

      <TrendingPlants />

      <Reviews />

      <O2Plants />

      <Footer />

    </div>
  )
}

export default App