/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import CheaperoModal from "./CheaperoModal";

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
    <div className="relative w-screen " ref={animationOne.ref}>
      <div className="relative max-w-screen-lg w-full md:w-3/4 flex flex-col justify-center items-center md:flex-row md:justify-end mx-auto">
        <div className="w-full sm:w-3/4 h-full bg-cheapero rounded-t-lg md:rounded-lg overflow-hidden">
          <div className="w-full h-full bg-contain bg-gradient-to-b from-[#ebebebc5] to-[#c0295cbd] flex items-center justify-center">
            <motion.img
              animate={animationOne.animation}
              src="/images/cheapero-thumb.png"
              alt="cheapero-thumb"
              className="w-full md:w-2/3 max-w-[600px]"
            />
          </div>
        </div>

        <div className="md:absolute left-2 flex flex-col justify-center items-center md:items-end gap-2 w-full dark:bg-darkTwo bg-white sm:w-3/4 md:w-[40%] p-8 rounded-lg shadow-lg">
          <div className="flex gap-2 items-center mb-4">
            <h1 className="text-lg sm:text-2xl font-bold">Cheapero</h1>
            <img
              src="/images/cheapero-logo.png"
              className="h-12 w-12 rounded-full"
              alt="cheapero-logo"
            />
          </div>
          <p className="font-bold text-dark dark:text-white">Full Stack</p>
          <p className="mb-4 text-center md:text-right">
            Cheapero is a fashion ecommerce website.
          </p>
          <div className="relative flex justify-center md:justify-end items-center gap-2 m-auto sm:m-0 w-full">
            <Button
              onClick={openModalHandler}
              style="w-[120px] flex-grow-0 md:flex-grow-1 lg:w-full"
            >
              Details
            </Button>

            <div className="absolute left-0 flex flex-row-reverse gap-2">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://jobfinder-seven.vercel.app"
              >
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/danhos28/Jobfinder"
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
            </div>
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
