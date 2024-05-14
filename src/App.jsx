import About from "./About/About"
import Address from "./Address/Address"
import Dummy from "./Dummy"
import Experience from "./Experience.jsx/Experience"
import Homepage from "./Home/Homepage"
import Navbar from "./Navbar/Navbar"
import ParallaxComponent from "./ParallaxComponent"
import Services from "./Ṣervices/Services"

function App() {
  
  return (
    <>
    <div className="d-md-block d-none">
      <ParallaxComponent/>
    </div>
      <Dummy/>
      <Navbar />
    <div className="d-md-none d-block">
      <Homepage />
    </div>
      <Services />
      <About />
      <Experience />
      <Address />
    </>
  )
}

export default App
