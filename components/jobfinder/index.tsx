/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import JobfinderModal from "./JobfinderModal";
import Button from "../Button";

const Jobfinder = ({ animationOne, animationTwo }: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => setModalOpen(true);

  const openModalHandler = () => {
    modalOpen ? close() : open();
  };

  return (
    <div className="relative w-screen">
      <div
        className="relative max-w-screen-lg w-full sm:w-3/4 mx-auto flex flex-col md:flex-row items-center shadow-lg md:shadow-none overflow-hidden mb-4"
        ref={animationOne.ref}
      >
        <div className="w-full md:w-2/3 overflow-hidden bg-jobfinder bg-center bg-cover rounded-t-lg md:rounded-lg">
          <div
            className="relative w-full bg-gradient-to-b from-[#fcfbfdc5] to-[#3a81a1bd]"
            ref={animationTwo.ref}
          >
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
              className="w-[100px] md:w-[110px] lg:w-[130px] xl:w-[150px] top-1/4 right-8 md:right-20 md:top-1/3 absolute"
            />
          </div>
        </div>
        <div className="md:absolute p-8 right-2 flex flex-col justify-center bg-white dark:bg-darkTwo items-center md:items-start gap-2 w-full md:w-[40%] rounded-lg shadow-xl">
          <div className="flex gap-2 items-center mb-2">
            <h1 className="text-lg sm:text-2xl font-bold">Jobfinder</h1>
            <img
              src="/images/jobfinder_logo.png"
              className="h-12 w-12"
              alt="jobfinder-logo"
            />
          </div>
          <p className="font-bold text-dark dark:text-white">Full Stack</p>
          <p className="mb-4 text-center md:text-left">
            Jobfinder is a website to help people find their dream job or to
            find the perfect employee for their companies.
          </p>
          <div className="relative flex justify-center md:justify-start items-center gap-2  m-auto sm:m-0 w-full">
            <Button
              onClick={openModalHandler}
              style="w-[120px] flex-grow-0 md:flex-grow-1 lg:w-full"
            >
              Details
            </Button>

            <div className="absolute right-0 flex gap-2">
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
        {modalOpen && <JobfinderModal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Jobfinder;
