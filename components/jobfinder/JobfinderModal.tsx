/* eslint-disable @next/next/no-img-element */
import React, { MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import Backdrop from '../Backdrop';
import Button from '../Button';

const dropIn = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const JobfinderModal = ({
  handleClose,
  elHeight,
}: {
  handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  elHeight: number | null | undefined;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<any>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Backdrop onClick={handleClose} elHeight={elHeight}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="rounded-md relative flex flex-col justify-center items-center gap-6 text-black dark:text-white lg:flex-row shadow-lg px-6 py-10 md:py-8 sm:p-10 bg-white dark:bg-darkTwo w-[95vw] sm:w-[85vw] max-w-screen-xl font-body"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="block w-full lg:w-[60%] relative">
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
                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[40%]">
          <h1 className="text-2xl">Jobfinder</h1>
          <p className="text-justify text-sm sm:text-base">
            Jobfinder is a website to help people find their dream job or to
            find the perfect employee for their companies. This project is
            created using NextJs, Tailwind, NodeJs, Express, and PostgreSQL. It
            also uses JWT for authentication and PWA to make it installable. For
            storage, it uses Amazon S3 to store the images and files. This
            website is deployed on Vercel (frontend) and Heroku (backend).
          </p>
          <p className="text-xl mt-2">Tech Stack</p>
          <div className="flex gap-2 w-full flex-wrap">
            <img
              className="skill-logo-detail"
              src="/images/next-js.png"
              alt="nextJs"
            />
            <img
              className="skill-logo-detail"
              src="/images/tailwind-logo.png"
              alt="tailwind"
            />
            <img
              className="skill-logo-detail"
              src="/images/node-logo.png"
              alt="node"
            />
            <img
              className="skill-logo-detail"
              src="/images/express-logo.svg"
              alt="express"
            />
            <img
              className="skill-logo-detail"
              src="/images/postgres-logo.png"
              alt="postgres"
            />
            <img
              className="skill-logo-detail"
              src="/images/jwt.png"
              alt="jwt"
            />
            <img
              className="skill-logo-detail"
              src="/images/pwa.png"
              alt="pwa"
            />
            <img className="skill-logo-detail" src="/images/s3.svg" alt="s3" />
            <img
              className="skill-logo-detail"
              src="/images/heroku.png"
              alt="heroku"
            />
            <img
              className="skill-logo-detail"
              src="/images/vercel.svg"
              alt="vercel"
            />
          </div>

          <div className="flex gap-4 justify-center mt-8 w-full">
            <Button>View Site</Button>
            <Button>Github</Button>
          </div>

          <div
            className="flex rounded-full bg-red-600 absolute top-2 right-2 w-6 h-6 hover:scale-110 cursor-pointer transition-all duration-200 text-white font-sans"
            onClick={handleClose}
          >
            <p className="m-auto font-bold">X</p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};
function ArrowLeft(props: any) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props: any) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
export default JobfinderModal;
