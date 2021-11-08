/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Button from '../Button';
import DrivesafelyModal from './DrivesafelyModal';

const DriveSafely = ({ animationOne }: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);

  const openModalHandler = () => {
    modalOpen ? close() : open();
  };
  return (
    <div className="relative w-screen" ref={animationOne.ref}>
      <div className="max-w-screen-lg w-full sm:w-3/4 flex flex-col jusitify-center items-center md:flex-row-reverse mx-auto">
        <motion.img
          animate={animationOne.animation}
          src="/images/drivesafely-thumb.png"
          alt="xfocus"
          className="w-[600px]"
        />

        <div className="flex flex-col justify-center items-end gap-2 w-full md:w-1/3 px-4 py-8">
          <div className="flex gap-2 items-center mb-4">
            <h1 className="text-lg sm:text-2xl font-bold">Drive Safely</h1>
            <img
              src="/images/drivesafely-logo.png"
              className="h-12 w-12 rounded-full object-contain"
              alt="drivesafely-logo"
            />
          </div>
          <p className="font-bold text-dark dark:text-white">Front End</p>
          <p className="mb-4 text-right">
            Drive Safely is an Android App that can detect where the driver is
            sleeping or speeding.
          </p>
          <div className="flex justify-end m-auto sm:m-0 w-full">
            <Button onClick={openModalHandler}>Details</Button>
          </div>
        </div>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => null}
      >
        {modalOpen && <DrivesafelyModal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default DriveSafely;
