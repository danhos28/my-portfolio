/* eslint-disable react/no-children-prop */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';

const ThreeBg = (props: { position: number[] }) => {
  //   const normalMap = useLoader(TextureLoader, 'NormalMap.png');
  const mesh = useRef<any>();
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [positionY, setPositionY] = useState(window.scrollY);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    mesh.current.rotation.y = mouseX * 0.001;
    mesh.current.rotation.x += 0.01;
    mesh.current.position.y = positionY * 0.001;
    mesh.current.position.z = positionY * -1;
  });

  const onDocumentMouseMove = useCallback(
    (event: MouseEvent) => {
      setMouseX(event.clientX - windowHalfX);
      setMouseY(event.clientY - windowHalfY);
    },
    [windowHalfX, windowHalfY],
  );

  const onMouseScroll = () => {
    setPositionY(window.scrollY * 0.002);
  };

  useEffect(() => {
    window.addEventListener('mousemove', onDocumentMouseMove);

    return () => {
      window.removeEventListener('mousemove', onDocumentMouseMove);
    };
  }, [mouseX, mouseY, onDocumentMouseMove]);

  useEffect(() => {
    window.addEventListener('scroll', onMouseScroll);
    console.log(positionY);
    return () => {
      window.removeEventListener('mousemove', onMouseScroll);
    };
  }, [positionY]);

  return (
    <mesh {...props} ref={mesh} castShadow>
      <torusKnotGeometry args={[1, 0.3, 160, 16]} />
      <MeshWobbleMaterial
        color={'#FCFBFF'}
        attach="material"
        factor={1}
        speed={1}
        key={undefined}
        attachArray={undefined}
        attachObject={undefined}
        args={undefined}
        children={undefined}
        onUpdate={undefined}
        visible={undefined}
        dispose={undefined}
        type={undefined}
        id={undefined}
        uuid={undefined}
        name={undefined}
        userData={undefined}
        toJSON={undefined}
        clone={undefined}
        copy={undefined}
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
        map={undefined}
        transparent={undefined}
        fog={undefined}
        opacity={undefined}
        alphaTest={undefined}
        alphaToCoverage={undefined}
        blendDst={undefined}
        blendDstAlpha={undefined}
        blendEquation={undefined}
        blendEquationAlpha={undefined}
        blending={undefined}
        blendSrc={undefined}
        blendSrcAlpha={undefined}
        clipIntersection={undefined}
        clippingPlanes={undefined}
        clipShadows={undefined}
        colorWrite={undefined}
        defines={undefined}
        depthFunc={undefined}
        depthTest={undefined}
        depthWrite={undefined}
        stencilWrite={undefined}
        stencilFunc={undefined}
        stencilRef={undefined}
        stencilWriteMask={undefined}
        stencilFuncMask={undefined}
        stencilFail={undefined}
        stencilZFail={undefined}
        stencilZPass={undefined}
        isMaterial={undefined}
        needsUpdate={undefined}
        polygonOffset={undefined}
        polygonOffsetFactor={undefined}
        polygonOffsetUnits={undefined}
        precision={undefined}
        premultipliedAlpha={undefined}
        dithering={undefined}
        side={undefined}
        shadowSide={undefined}
        toneMapped={undefined}
        vertexColors={undefined}
        version={undefined}
        onBeforeCompile={undefined}
        customProgramCacheKey={undefined}
        setValues={undefined}
        roughness={undefined}
        metalness={undefined}
        lightMap={undefined}
        lightMapIntensity={undefined}
        aoMap={undefined}
        aoMapIntensity={undefined}
        emissive={undefined}
        emissiveIntensity={undefined}
        emissiveMap={undefined}
        bumpMap={undefined}
        bumpScale={undefined}
        normalMap={undefined}
        normalMapType={undefined}
        normalScale={undefined}
        displacementMap={undefined}
        displacementScale={undefined}
        displacementBias={undefined}
        roughnessMap={undefined}
        metalnessMap={undefined}
        alphaMap={undefined}
        envMap={undefined}
        envMapIntensity={undefined}
        refractionRatio={undefined}
        wireframe={undefined}
        wireframeLinewidth={undefined}
        wireframeLinecap={undefined}
        wireframeLinejoin={undefined}
        skinning={undefined}
        vertexTangents={undefined}
        morphTargets={undefined}
        morphNormals={undefined}
        flatShading={undefined}
        isMeshStandardMaterial={undefined}
      />
    </mesh>
  );
};

export default ThreeBg;
