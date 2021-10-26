import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import useCustomAnimation from '../hooks/useCustomAnimation';
import ThreeBgTwo from './ThreeBgTwo';
import Button from './Button';

const About = ({ isDark }: { isDark: boolean }) => {
  const toTheRight = {
    start: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.3,
      },
    },
    end: { x: -200, opacity: 0 },
  };
  const toTheLeft = {
    start: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.3,
        delay: 0.2,
      },
    },
    end: { x: 400, opacity: 0 },
  };
  const fadeIn = {
    start: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4,
      },
    },
    end: { opacity: 0 },
  };

  const animationOne = useCustomAnimation(
    toTheRight.start,
    toTheRight.end,
    0.3,
  );
  const animationTwo = useCustomAnimation(toTheLeft.start, toTheLeft.end, 0.2);
  const animationThree = useCustomAnimation(fadeIn.start, fadeIn.end, 0.2);

  return (
    <div className="relative w-screen py-8 text-black dark:text-light font-body">
      <div
        ref={animationOne.ref}
        className="flex flex-col text-center jus gap-6 w-full max-w-screen-lg sm:w-3/4 md:3/5 h-full justify-center items-center m-auto p-4"
      >
        <div className="flex flex-col gap-2">
          <motion.h1
            animate={animationOne.animation}
            className="text-xl sm:text-2xl font-semibold"
          >
            About Me
          </motion.h1>
          <motion.p
            animate={animationTwo.animation}
            ref={animationTwo.ref}
            className="max-w-screen-md text-justify"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            debitis placeat at aliquid voluptate, minima nobis nihil pariatur
            amet! Placeat labore autem obcaecati provident enim saepe, quos odit
            nostrum porro. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Laudantium debitis placeat at aliquid voluptate, minima nobis
            nihil pariatur amet! Placeat labore autem obcaecati provident enim
            saepe, quos odit nostrum porro.
          </motion.p>
        </div>
        <motion.div animate={animationThree.animation} ref={animationThree.ref}>
          <Button>
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </Button>
        </motion.div>
        <h1 className="font-bold text-base sm:text-lg">My Personal Journey</h1>
        <div className="grid-qualification gap-4 relative">
          <div className="flex flex-col h-full justify-between">
            <li className="list-none flex flex-col items-center sm:items-end">
              <div className="flex gap-1">
                <p className="text-sm font-bold sm:text-base">
                  Smak Penabur Cirebon
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 hidden sm:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <p className="text-xs sm:text-sm">2014 - 2017</p>
            </li>

            <li className="list-none flex flex-col items-center sm:items-end">
              <div className="flex items gap-1">
                <p className="text-sm sm:text-base font-bold">
                  President University
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 hidden sm:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <p className="text-xs sm:text-sm">
                Information Technology (GPA 3.56)
              </p>
              <p className="text-xs sm:text-sm">2017 - 2021</p>
            </li>
          </div>
          <div className="h-[200px]  w-[3px] bg-dark dark:bg-primary flex justify-center">
            <div className="absolute w-[14px] h-[14px] bg-dark dark:bg-primary rounded-full"></div>
            <div className="absolute w-[14px] h-[14px] top-[38%] bg-dark dark:bg-primary rounded-full"></div>
            <div className="absolute w-[14px] h-[14px] bottom-[18%] bg-dark dark:bg-primary rounded-full"></div>
          </div>

          <div className="flex flex-col h-full justify-center">
            <li className="list-none flex flex-col items-center sm:items-start">
              <div className="flex items gap-1">
                <p className="text-sm sm:text-base font-bold">
                  PT. Tiga Inti Perkasa
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 hidden sm:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-xs sm:text-sm">
                Android Developer (Internship)
              </p>
              <p className="text-xs sm:text-sm">Oct 2020 - Feb 2021</p>
            </li>
          </div>
        </div>
      </div>

      <div className="absolute bg-light dark:bg-dark top-0 z-[-999] w-full h-full">
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
            color={'red'}
          />
          <ambientLight />
          <pointLight position={[10, 20, 10]} color="white" />
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial attach="material" opacity={isDark ? 0.2 : 0.1} />
            </mesh>
          </group>
          <ThreeBgTwo position={[0, 0, 0]} isDark={isDark} speed={0.02} />
          <ThreeBgTwo position={[-4, 1, 0]} isDark={isDark} speed={0.01} />
          <ThreeBgTwo position={[4, 2, 0]} isDark={isDark} speed={0.03} />
        </Canvas>
      </div>
    </div>
  );
};

export default About;
