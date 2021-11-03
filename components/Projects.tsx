/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import useCustomAnimation from '../hooks/useCustomAnimation';
import Jobfinder from './jobfinder/Jobfinder';

const fadeInDown = {
  start: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: 'spring',
    },
  },
  end: { y: -200, opacity: 0 },
};
const fadeInUp = {
  start: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: 'spring',
      delay: 0.3,
    },
  },
  end: { y: 200, opacity: 0 },
};

const Projects = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [elHeight, setElHeight] = useState<number | null | undefined>();
  const getClientHeight = useRef<any>(null);

  const animationOne = useCustomAnimation(fadeInDown.start, fadeInDown.end);
  const animationTwo = useCustomAnimation(fadeInUp.start, fadeInUp.end);
  const animationThree = useCustomAnimation(fadeInDown.start, fadeInDown.end);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);

  const openModalHandler = () => {
    modalOpen ? close() : open();
  };

  return (
    <section className=" w-screen bg-light dark:bg-dark dark:text-white flex items-center flex-col font-body">
      <h1 className="text-xl sm:text-3xl font-semibold mt-2">
        Recent projects
      </h1>
      <div className="w-full max-w-screen-lg sm:w-3/4 h-full flex flex-col p-4 items-center gap-2">
        <Jobfinder animationOne={animationOne} animationTwo={animationTwo} />

        <div
          className="w-full flex flex-col md:flex-row-reverse overflow-hidden relative"
          ref={animationThree.ref}
        >
          <motion.img
            animate={animationThree.animation}
            src="/images/cheapero-thumb.png"
            alt="jobfinder"
            className="w-[600px]"
          />

          <div className="flex flex-col justify-center gap-2 w-full md:w-1/3 px-4 py-8">
            <div className="flex gap-2 items-center">
              <h1 className="text-lg sm:text-2xl font-bold">Cheapero</h1>
              <img
                src="/images/cheapero-logo.png"
                className="h-12 w-12 rounded-full"
                alt="jobfinder-logo"
              />
            </div>
            <p className="font-bold text-dark dark:text-white">Full Stack</p>
            <p className="mb-4">Cheapero is a fashion ecommerce website. </p>
            <div className="flex m-auto sm:m-0 w-full">
              <Button onClick={openModalHandler}>Details</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
