import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import App from './App'
import Homepage from './Home/Homepage'

function ParallaxComponent() {
  return (
    <div id='home'  className="App">
      <Parallax className='animation' pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id='background'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1}>
          <div className="animation_layer parallax justify-content-center align-items-center d-flex" id=''>
            <h1  className='fw-bolder parallax-text linear-wipe '>WINTEK</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.8}>
          <div className="animation_layer parallax" id='midRock'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-2}>
          <div className="animation_layer parallax" id='planets'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.1}>
          <div className="animation_layer parallax" id='rightStone'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={4}>
          <div className="animation_layer parallax" id='leftStone'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-3}>
          <div className="animation_layer parallax" id='rightPlanet'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={4}>
          <div className="animation_layer parallax" id='react'>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.07}>
          <div className="animation_layer parallax" id='php'>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.8}>
          <div className="animation_layer parallax" id='java'>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.8}>
          <div className="animation_layer parallax" id='java'>
            <Homepage />
          </div>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  )
}

export default ParallaxComponent