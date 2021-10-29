import React from 'react';
import useStore from '../hook/useStore';
import useInterval from '../hook/useInterval';
import Cube from './Cube';

export default function Cubes() {
  const [cubes, addCube, removeCube, saveWorld] = useStore((state) => [
    state.cubes,
    state.addCube,
    state.removeCube,
    state.saveWorld,
  ]);

  useInterval(
    () => {
      saveWorld(cubes);
    },
    // every 10 seconds
    10000,
  );

  return cubes.map((cube) => {
    return (
      <Cube
        key={cube.key}
        texture={cube.texture}
        position={cube.pos}
        addCube={addCube}
        removeCube={removeCube}
      />
    );
  });
}