import React ,{useEffect,useRef}from "react";
import { Canvas, useThree,useFrame} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const Donut = () => {
  function Donuts() { 
     const mesh = useRef(null);
      useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
     
        mesh.current.rotation.y = t / 1;
      })
    return (
    
      <mesh ref={mesh} >
        <torusGeometry attach="geometry" args={[1.5, 0.8, 48, 72]}  />
        
        <meshNormalMaterial attach="material" wireframe={true}/>
        
      </mesh>
    );
  }
  function Donuts2() { 
    const mesh = useRef(null);
     useFrame(({ clock }) => {
       const t = clock.getElapsedTime();
       mesh.current.rotation.x = t / 1;
       
     })
   return (
   
     <mesh ref={mesh} >
        <torusGeometry attach="geometry" args={[1.5, 0.8, 48, 72]}  />
      <meshNormalMaterial attach="material" wireframe={true} />
       
     </mesh>
   );
 }
  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
  return <Canvas>
    <CameraController />
    <Donuts/>
    <Donuts2/>
    </Canvas>;
};

export default Donut;
