/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';
import CheaperoModal from './CheaperoModal';

const Cheapero = ({ animationOne }: any) => {
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
          src="/images/cheapero-thumb.png"
          alt="jobfinder"
          className="w-[600px]"
        />

        <div className="flex flex-col justify-center items-end gap-2 w-full md:w-1/3 px-4 py-8">
          <div className="flex gap-2 items-center mb-4">
            <h1 className="text-lg sm:text-2xl font-bold">Cheapero</h1>
            <img
              src="/images/cheapero-logo.png"
              className="h-12 w-12 rounded-full"
              alt="cheapero-logo"
            />
          </div>
          <p className="font-bold text-dark dark:text-white">Full Stack</p>
          <p className="mb-4 text-right">
            Cheapero is a fashion ecommerce website.
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
        {modalOpen && <CheaperoModal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Cheapero;
