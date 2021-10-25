/* eslint-disable react/no-children-prop */
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const ThreeBgTwo = (props: {
  position: number[];
  isDark: boolean;
  speed: number;
}) => {
  const mesh = useRef<any>();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useFrame(() => {
    mesh.current.rotation.y = mouseX * 0.001;
    mesh.current.rotation.x += props.speed;
    mesh.current.position.z = positionY * -0.003;
  });

  useEffect(() => {
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX - windowHalfX);
      setMouseY(event.clientY - windowHalfY);
    };

    window.addEventListener('mousemove', onDocumentMouseMove);

    return () => {
      window.removeEventListener('mousemove', onDocumentMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    setPositionY(window.scrollY);
    const onMouseScroll = () => {
      setPositionY(window.scrollY * 0.001);
    };
    window.addEventListener('scroll', onMouseScroll);

    return () => {
      window.removeEventListener('scroll', onMouseScroll);
    };
  }, [positionY]);

  return (
    <mesh {...props} ref={mesh} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={props.isDark ? '#170055' : '#FCFBFF'} />
    </mesh>
  );
};

export default ThreeBgTwo;
