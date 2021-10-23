/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import Button from './Button';
import { Canvas } from '@react-three/fiber';
import ThreeBg from './ThreeBg';
import { softShadows } from '@react-three/drei';

softShadows();

const Intro = () => {
  // const [MousePosition, setMousePosition] = useState({
  //   left: 0,
  //   top: 0,
  // });

  // const handleMouseMove = (e: MouseEvent) =>
  //   setMousePosition({ left: e.pageX, top: e.pageY });

  // useEffect(() => {
  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, [MousePosition]);

  return (
    <div className="bg-ligth w-screen h-screen flex justify-center items-center text-black font-body">
      <div className="z-10 flex sm:flex-row flex-col-reverse justify-between items-center gap-4 px-4 sm:px-0 w-full max-w-screen-lg sm:w-3/4 md:3/5">
        <div className=" flex flex-col sm:w-[550px]">
          <h1 className="text-3xl lg:text-[54px] font-bold pb-2 pt-6 sm:py-6">
            Hi, I'am Daniel Hosea
          </h1>
          <p className="text-lg sm:text-2xl font-bold mb-4 ">
            Software Developer
          </p>
          <p className="mb-4  ">
            Fresh graduate who are enthusiast about software development and
            currently seeking for experience.
          </p>
          <Button>
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </Button>
        </div>
        <div className="block">
          <img
            src="/images/Daniel.png"
            alt="profile"
            className=" object-cover object-top rounded-full bg-ternary h-[180px] w-[180px] md:w-[240px]  md:h-[240px]"
          />
        </div>
      </div>

      <div className="absolute w-screen h-screen">
        <Canvas shadows>
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial attach="material" opacity={0.3} />
            </mesh>
          </group>
          <ThreeBg position={[0, 0, 0]} />
        </Canvas>
      </div>
      {/* <div
        className="bg-ternary w-10 h-10 rounded-full absolute top-20 left-2/3 hidden md:block"
        style={{
          transform: `translateY(${
            (MousePosition.top * -1) / 50
          }px) translateX(${(MousePosition.left * -1) / 50}px)`,
        }}
      />
      <div
        className="bg-indigo-300 w-20 h-20 rounded-full absolute top-10 left-1/3 hidden md:block"
        style={{
          transform: `translateY(${
            (MousePosition.top * 0.5) / 50
          }px) translateX(${(MousePosition.left * -1) / 50}px)`,
        }}
      />
      <img
        src="/images/blob.svg"
        alt="blob"
        className="w-48 h-48 absolute top-10 left-0  hidden md:block"
        style={{
          transform: `translateY(${
            (MousePosition.top * 0.5) / 50
          }px) translateX(${(MousePosition.left * 0.5) / 50}px)`,
        }}
      />
      <img
        src="/images/blob-1.svg"
        alt="blob"
        className="w-48 h-48 absolute top-3/4 -right-14 hidden md:block"
        style={{
          transform: `translateY(${
            (MousePosition.top * 0.5) / 50
          }px) translateX(${(MousePosition.left * 0.5) / 50}px)`,
        }}
      />
      <img
        src="/images/blob-2.svg"
        alt="blob"
        className="w-52 h-52 absolute bottom-0 -left-10 hidden md:block"
        style={{
          transform: `translateY(${
            (MousePosition.top * 0.5) / 50
          }px) translateX(${(MousePosition.left * 0.5) / 50}px)`,
        }}
      /> */}
    </div>
  );
};

export default Intro;
