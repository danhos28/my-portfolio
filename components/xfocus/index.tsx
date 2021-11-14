/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Button from '../Button';
import XfocusModal from './XfocusModal';

const Xfocus = ({ animationOne }: any) => {
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
      <div className="max-w-screen-lg w-full sm:w-3/4 py-4 md:gap-6 flex flex-col justify-center items-center md:flex-row mx-auto">
        <motion.img
          animate={animationOne.animation}
          src="/images/xfocus_thumb.png"
          alt="xfocus"
          className="w-full md:w-2/3 max-w-[400px] px-8 md:p-0"
        />

        <div className="flex flex-col justify-center items-center md:items-start gap-2 w-full md:w-1/3 px-4 py-4 md:py-8">
          <div className="flex gap-2 items-center my-4">
            <h1 className="text-lg sm:text-2xl font-bold">XFocus</h1>
            <img
              src="/images/xfocus-logo.png"
              className="h-12 w-12 rounded-full"
              alt="xfocus-logo"
            />
          </div>
          <p className="font-bold text-dark dark:text-white">Front End</p>
          <p className="mb-4 text-center md:text-left">
            Xfocus is an Enterprise resource planning (ERP) Application for
            Android OS.
          </p>
          <div className="flex justify-center md:justify-start m-auto sm:m-0 w-full">
            <Button onClick={openModalHandler}>Details</Button>
          </div>
        </div>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => null}
      >
        {modalOpen && <XfocusModal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Xfocus;
