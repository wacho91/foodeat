import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/Navbar/Navbar"


function App() {
  
  return (
    <div>
        <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
            <Navbar />
            <Hero />
        </div>
    </div>
  )
}

export default App
