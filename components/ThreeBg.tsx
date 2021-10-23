/* eslint-disable react/no-children-prop */
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

const ThreeBg = (props: { position: number[] }) => {
  const mesh = useRef<any>();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useFrame(() => {
    mesh.current.rotation.y = mouseX * 0.001;
    mesh.current.rotation.x += 0.01;
    mesh.current.position.y = positionY * 0.005;
    mesh.current.position.z = positionY * -0.01;
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
    console.log(positionY);

    return () => {
      window.removeEventListener('scroll', onMouseScroll);
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
