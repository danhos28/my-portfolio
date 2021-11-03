/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import JobfinderModal from './JobfinderModal';
import Button from '../Button';

const Jobfinder = ({ animationOne, animationTwo }: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [elHeight, setElHeight] = useState<number | null | undefined>();
  const getClientHeight = useRef<any>(null);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);

  const openModalHandler = () => {
    modalOpen ? close() : open();
  };

  useEffect((): any => {
    setElHeight(getClientHeight.current.clientHeight);
  }, [elHeight]);

  return (
    <div ref={getClientHeight} className="relative w-screen">
      <div
        className="max-w-screen-lg w-full sm:w-3/4 mx-auto flex flex-col md:flex-row overflow-hidden mb-4"
        ref={animationOne.ref}
      >
        <div className="w-full md:w-2/3 overflow-hidden" ref={animationTwo.ref}>
          <motion.img
            whileHover={{ scale: 1.02 }}
            animate={animationOne.animation}
            src="/images/jobfinder-thumb.png"
            alt="jobfinder"
            className="w-[600px]"
          />
          <motion.img
            whileHover={{ scale: 1.02 }}
            animate={animationTwo.animation}
            src="/images/jobfinder-thumb2.png"
            alt="jobfinder"
            className="w-[100px] md:w-[110px] lg:w-[130px] xl:w-[150px] top-1/4 right-8 md:left-1/2 md:top-1/3 absolute"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 w-full md:w-1/3 px-4 py-8">
          <div className="flex gap-2 items-center mb-4">
            <h1 className="text-lg sm:text-2xl font-bold">Jobfinder</h1>
            <img
              src="/images/jobfinder_logo.png"
              className="h-12 w-12"
              alt="jobfinder-logo"
            />
          </div>
          <p className="font-bold text-dark dark:text-white">Full Stack</p>
          <p className="mb-4">
            Jobfinder is a website to help people find their dream job.{' '}
          </p>
          <div className="m-auto sm:m-0 flex w-full">
            <Button onClick={openModalHandler}>Details</Button>
          </div>
        </div>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => null}
      >
        {modalOpen && (
          <JobfinderModal handleClose={close} elHeight={elHeight} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jobfinder;
