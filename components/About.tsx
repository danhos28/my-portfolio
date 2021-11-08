import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import useCustomAnimation from '../hooks/useCustomAnimation';
import ThreeBgTwo from './ThreeBgTwo';
import Button from './Button';

const About = ({ isDark }: { isDark: boolean }) => {
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
  const fadeInDown = {
    start: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    end: { y: -20, opacity: 0 },
  };

  const animationOne = useCustomAnimation(
    fadeInDown.start,
    fadeInDown.end,
    0.3,
  );
  const animationTwo = useCustomAnimation(toTheLeft.start, toTheLeft.end, 0.4);
  const animationThree = useCustomAnimation(fadeIn.start, fadeIn.end, 0.4);

  return (
    <section
      id="about"
      className="relative w-screen py-8 text-black dark:text-light font-body"
    >
      <div
        ref={animationOne.ref}
        className="flex flex-col text-center jus gap-10 w-full max-w-screen-lg sm:w-3/4 md:3/5 h-full justify-center items-center m-auto p-4"
      >
        <div className="flex flex-col gap-2">
          <motion.h1
            animate={animationOne.animation}
            className="text-xl sm:text-3xl font-semibold mb-8"
          >
            About Me
          </motion.h1>
          <div ref={animationTwo.ref}>
            <motion.p
              animate={animationTwo.animation}
              className="max-w-screen-md 2xl:max-w-screen-xl text-justify"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium debitis placeat at aliquid voluptate, minima nobis
              nihil pariatur amet! Placeat labore autem obcaecati provident enim
              saepe, quos odit nostrum porro. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Laudantium debitis placeat at
              aliquid voluptate, minima nobis nihil pariatur amet! Placeat
              labore autem obcaecati provident enim saepe, quos odit nostrum
              porro.
            </motion.p>
          </div>
        </div>
        <motion.div animate={animationThree.animation} ref={animationThree.ref}>
          <Button style="w-[180px]">
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
      </div>

      <div className="absolute bg-light dark:bg-dark top-0 z-[-999] w-full h-full">
        <Canvas shadows>
          <ambientLight />
          <pointLight position={[10, 20, 10]} color="white" />
          <ThreeBgTwo position={[0, 0, 0]} isDark={isDark} speed={0.02} />
          <ThreeBgTwo position={[-4, 1, 0]} isDark={isDark} speed={0.01} />
          <ThreeBgTwo position={[4, 2, 0]} isDark={isDark} speed={0.03} />
        </Canvas>
      </div>
    </section>
  );
};

export default About;
