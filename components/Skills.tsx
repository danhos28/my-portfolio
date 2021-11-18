import { motion } from "framer-motion";
import useCustomAnimation from "../hooks/useCustomAnimation";
import SkillsParalax from "./SkillsParalax";

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

const Skills = () => {
  const animationOne = useCustomAnimation(
    fadeInDown.start,
    fadeInDown.end,
    0.3
  );

  return (
    <section
      id="skills"
      className="flex py-10 justify-center bg-waves-one-light bg-cover bg-bottom
     dark:bg-waves-one-dark w-screen dark:text-white font-body"
    >
      <div
        ref={animationOne.ref}
        className="flex flex-col items-center w-full max-w-screen-xl px-4"
      >
        <motion.h1
          animate={animationOne.animation}
          className="text-xl sm:text-3xl  font-bold mb-4"
        >
          My Skillsets
        </motion.h1>
        <motion.p
          animate={animationOne.animation}
          className="text-lg mb-8 text-center"
        >
          These are some tech stacks that I used for software development
        </motion.p>
        <SkillsParalax />
      </div>
    </section>
  );
};

export default Skills;
