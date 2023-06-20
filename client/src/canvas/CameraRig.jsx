import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useDrag } from 'react-use-gesture';
import { useSnapshot } from 'valtio';
import { easing } from 'maath';

import state from '../store';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);


  // This will move the model on drag
  const bind = useDrag(({ offset: [y] }) => {
    const rotation = group.current.rotation.clone();
    rotation.x = 0;
    rotation.y = y * .01;
    rotation.z = 0;
    group.current.rotation.copy(rotation);
  });

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 1250;

    // set the initial position of the model
    let targetPosition = [-0.25, 0, 2.5];
    if (snap.intro && snap.workorder && snap.customizer) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, .2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, .25, delta)
  });

  return (
    <group ref={group} {...bind()} >
      {children}
    </group>
  );
}

export default CameraRig;