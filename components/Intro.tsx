/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import ThreeBg from './ThreeBg';
import Button from './Button';
import { Canvas } from '@react-three/fiber';
import { softShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

softShadows();

const Intro = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="bg-light dark:bg-dark dark:text-white w-screen h-screen flex justify-center items-center text-black font-body">
      <div className="z-10 flex sm:flex-row flex-col-reverse justify-between items-center gap-4 px-4 sm:px-0 w-full max-w-screen-lg sm:w-3/4 md:3/5">
        <div className=" flex flex-col sm:w-[550px]">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-2xl sm:text-3xl lg:text-[54px] font-bold pb-2 pt-6 sm:py-6"
          >
            Hi
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              , I'am Daniel Hosea
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="text-lg sm:text-2xl font-bold mb-4 "
          >
            Software Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mb-4  "
          >
            A fresh graduate who is passionate about coding and problem-solving.
            Always willing to learn new things and can work swiftly and
            effectively either alone or as part of a team.
          </motion.p>
          <motion.div
            initial={{ scale: 0, x: -100 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
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
          </motion.div>
          <div className="flex mt-6 gap-4 text-black dark:text-white">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/danhos28"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/danielhosea/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
              >
                <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="block">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src="/images/Daniel.png"
            alt="profile"
            className=" object-cover object-top rounded-full bg-yellow-200 dark:bg-gray-200 h-[160px] w-[160px] md:w-[240px]  md:h-[240px]"
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
            color={'red'}
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
              <shadowMaterial attach="material" opacity={isDark ? 0.2 : 0.1} />
            </mesh>
          </group>
          <ThreeBg position={[0, 0, 0]} isDark={isDark} />
        </Canvas>
      </div>
    </div>
  );
};

export default Intro;
