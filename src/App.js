import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import Player from "./components/Player";
import useStore from "./hook/useStore";
import useInterval from "./hook/useInterval";
import { Hud } from "./components/Hud";
import Cubes from "./components/Cubes";


function App() {
  const [cubes, saveWorld] = useStore((state) => [state.cubes, state.saveWorld])

  useInterval(() => {
    saveWorld(cubes)
    console.log("saved")
  }, 10000)

  return <Canvas shadowMap sRGB>
    <Sky sunPosition={[100, 20, 100]}/>
    <ambientLight intensity={0.7} position={[100, 100, 100]}/>
    <pointLight
      castShadow
      intensity={0.7}
      position={[100,100,100]}
    />
    <Hud position={[0, 0, -2]} />
    <Physics gravity={[0, -30, 0]}>
      <Player position={[0, 5, 0]}/>
      <Ground position={[0, 0.5, 0]}/>
      <Cubes />
    </Physics>
  </Canvas>;

}

export default App;
