import { useEffect, useState } from 'react';
/* eslint-disable @next/next/no-img-element */
const SkillsParalax = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
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
  return (
    <div className="flex flex-wrap justify-center relative w-full md:w-[1024px] py-4 px-2 h-[400px] md:h-[580px] gap-4">
      <img
        src="/images/html-logo.png"
        alt="html"
        className="skill-logo md:absolute left-[38%]"
        style={{
          transform: `translateY(${mouseY * 0.05}px) translateX(${
            mouseX * 0.05
          }px)`,
        }}
      />
      <img
        src="/images/css-logo.png"
        alt="css"
        className="skill-logo md:absolute right-[38%]"
        style={{
          transform: `translateY(${mouseY * 0.02}px) translateX(${
            mouseX * 0.06
          }px)`,
        }}
      />
      <img
        src="/images/react-logo.png"
        alt="react"
        className="skill-logo md:absolute left-[20%] top-36"
        style={{
          transform: `translateY(${mouseY * 0.05}px) translateX(${
            mouseX * 0.08
          }px)`,
        }}
      />
      <img
        src="/images/next-js.png"
        alt="nextJs"
        className="skill-logo px-2 md:absolute left-[37%] top-36"
        style={{
          transform: `translateY(${mouseY * 0.07}px) translateX(${
            mouseX * 0.02
          }px)`,
        }}
      />
      <img
        src="/images/js-logo.png"
        alt="js"
        className="skill-logo md:absolute right-[20%] top-36"
        style={{
          transform: `translateY(${mouseY * 0.06}px) translateX(${
            mouseX * 0.06
          }px)`,
        }}
      />
      <img
        src="/images/ts-logo.png"
        alt="ts"
        className="skill-logo md:absolute right-[37%] top-36"
        style={{
          transform: `translateY(${mouseY * 0.05}px) translateX(${
            mouseX * 0.05
          }px)`,
        }}
      />
      <img
        src="/images/tailwind-logo.png"
        alt="tailwind"
        className="skill-logo md:absolute left-[20%] top-72"
        style={{
          transform: `translateY(${mouseY * 0.06}px) translateX(${
            mouseX * 0.02
          }px)`,
        }}
      />
      <img
        src="/images/node-logo.png"
        alt="node"
        className="skill-logo md:absolute left-[37%] top-72"
        style={{
          transform: `translateY(${mouseY * 0.03}px) translateX(${
            mouseX * 0.04
          }px)`,
        }}
      />
      <img
        src="/images/express-logo.svg"
        alt="express"
        className="skill-logo md:absolute right-[20%] top-72"
        style={{
          transform: `translateY(${mouseY * 0.07}px) translateX(${
            mouseX * 0.03
          }px)`,
        }}
      />
      <img
        src="/images/postgres-logo.png"
        alt="postgres"
        className="skill-logo md:absolute right-[37%] top-72"
        style={{
          transform: `translateY(${mouseY * 0.01}px) translateX(${
            mouseX * 0.05
          }px)`,
        }}
      />
      <img
        src="/images/java-logo.png"
        alt="java"
        className="skill-logo md:absolute left-[38%] bottom-16"
        style={{
          transform: `translateY(${mouseY * 0.02}px) translateX(${
            mouseX * 0.03
          }px)`,
        }}
      />
      <img
        src="/images/git-logo.png"
        alt="git"
        className="skill-logo md:absolute right-[38%] bottom-16"
        style={{
          transform: `translateY(${mouseY * 0.05}px) translateX(${
            mouseX * 0.07
          }px)`,
        }}
      />
    </div>
  );
};

export default SkillsParalax;
