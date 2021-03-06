import React, {useEffect, useRef} from "react";
import {extend, useThree} from "@react-three/fiber";
import { PointerLockControls as PointerLockControlsImpl } from 'three/examples/jsm/controls/PointerLockControls';

extend({ PointerLockControlsImpl });

export const FPVControls = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    document.addEventListener('lock', () => {
      controls.current.lock();
    });
  }, []);

  return (
    <pointerLockControlsImpl
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
