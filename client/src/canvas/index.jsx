import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Product from './Product';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.15} />
      <Environment preset="city" />

      <Backdrop />
      <CameraRig>
        <Center>
          
          <Product/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel