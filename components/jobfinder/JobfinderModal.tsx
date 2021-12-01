/* eslint-disable @next/next/no-img-element */
import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Backdrop from "../Backdrop";
import Button from "../Button";

const dropIn = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const JobfinderModal = ({
  handleClose,
}: {
  handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<any>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="rounded-md flex flex-col justify-center items-center gap-6 text-black dark:text-white lg:flex-row shadow-lg px-6 py-10 lg:p-12 md:py-8 sm:p-10 bg-white dark:bg-darkTwo max-h-[85vh] w-[95%] sm:w-[85%] max-w-screen-xl font-body"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="overflow-y-scroll lg:overflow-hidden h-full px-4 pb-2  flex flex-col justify-start items-center gap-6 lg:flex-row">
          <div className="block w-full lg:w-[60%] relative border-[1px] border-light dark:border-dark dark:bg-dark bg-gray-50">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <Image
                  height={500}
                  width={800}
                  alt="pic-1"
                  src="/images/jobfinder-1.png"
                  className="w-full h-full object-contain"
                  priority={true}
                />
              </div>
              <div className="keen-slider__slide">
                <Image
                  height={500}
                  width={800}
                  alt="pic-2"
                  src="/images/jobfinder-2.png"
                  priority={true}
                />
              </div>
              <div className="keen-slider__slide">
                <Image
                  height={500}
                  width={800}
                  alt="pic-3"
                  src="/images/jobfinder-3.png"
                  priority={true}
                />
              </div>
              <div className="keen-slider__slide">
                <Image
                  height={500}
                  width={800}
                  alt="pic-4"
                  src="/images/jobfinder-4.png"
                  priority={true}
                />
              </div>
              <div className="keen-slider__slide">
                <Image
                  height={500}
                  width={800}
                  alt="pic-5"
                  src="/images/jobfinder-5.png"
                  priority={true}
                />
              </div>
              <div className="keen-slider__slide">
                <Image
                  height={500}
                  width={800}
                  alt="pic-6"
                  src="/images/jobfinder-6.png"
                  priority={true}
                />
              </div>
            </div>
            {slider && (
              <>
                <ArrowLeft
                  onClick={(e: React.MouseEvent): void => {
                    e.stopPropagation();
                    slider.prev();
                  }}
                  disabled={currentSlide === 0}
                />
                <ArrowRight
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    slider.next();
                  }}
                  disabled={currentSlide === slider.details().size - 1}
                />
              </>
            )}

            {slider && (
              <div className="dots">
                {Array.from(Array(slider.details().size).keys()).map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        slider.moveToSlideRelative(idx);
                      }}
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                    />
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-[40%]">
            <h1 className="text-xl tracking-wider font-bold uppercase">
              Jobfinder
            </h1>
            <p className="text-sm">
              Jobfinder is a website to help people find their dream job or to
              find the perfect employee for their companies. This project is
              created using NextJs, Tailwind, NodeJs, Express, and PostgreSQL.
              It also uses JWT for authentication and PWA to make it
              installable. For storage, it uses Amazon S3 to store the images
              and files. This website is deployed on Vercel (frontend) and
              Heroku (backend).
            </p>
            <p className="text-md mt-2 font-bold tracking-wider">Tech Stack</p>
            <div className="w-full flex items-center gap-2 text-darkThree dark:text-light">
              <p className="font-bold text-sm">FrontEnd</p>
              <div className="flex-grow bg-darkFour h-[2px]" />
            </div>
            <div className="flex gap-2 w-full flex-wrap">
              <p className="skill-tag">Typescript</p>
              <p className="skill-tag">NextJs</p>
              <p className="skill-tag">Tailwind</p>
              <p className="skill-tag">Vercel</p>
            </div>
            <div className="w-full flex items-center gap-2 mt-2 text-darkThree dark:text-light">
              <p className="font-bold text-sm">BackEnd</p>
              <div className="flex-grow bg-darkFour h-[2px]" />
            </div>
            <div className="flex gap-2 w-full flex-wrap">
              <p className="skill-tag">NodeJs</p>
              <p className="skill-tag">Express</p>
              <p className="skill-tag">PostgreSQL</p>
              <p className="skill-tag">JWT</p>
              <p className="skill-tag">Heroku</p>
              <p className="skill-tag">AWS S3</p>
              <p className="skill-tag">PWA</p>
            </div>
            <div className="flex flex-col gap-2 justify-center mt-2 w-full text-sm">
              <div className="flex gap-2">
                <p>Live Demo: </p>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://jobfinder-seven.vercel.app"
                  className="text-primary dark:text-light cursor-pointer hover:text-darkTwo"
                >
                  <p className="hidden md:block">
                    https://jobfinder-seven.vercel.app
                  </p>
                  <p className="block md:hidden">jobfinder-seven.vercel.app</p>
                </a>
              </div>
              <div className="flex gap-2">
                <p className="hidden md:block">Source Code: </p>
                <p className="block md:hidden">Code: </p>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/danhos28/Jobfinder"
                  className="text-primary dark:text-light  cursor-pointer hover:text-darkTwo"
                >
                  <p className="hidden md:block">
                    https://github.com/danhos28/Jobfinder
                  </p>
                  <p className="block md:hidden">
                    github.com/danhos28/Jobfinder
                  </p>
                </a>
              </div>
            </div>

            <div
              className="flex rounded-full bg-white text-red-600 absolute top-2 right-2 w-7 h-7 hover:scale-110 cursor-pointer transition-all duration-200"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};
function ArrowLeft(props: any) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props: any) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
export default JobfinderModal;
