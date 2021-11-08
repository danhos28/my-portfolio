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

const XfocusModal = ({
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
        className="rounded-md flex flex-col justify-center items-center gap-6 text-black dark:text-white lg:flex-row shadow-lg px-6 py-10 lg:p-12 md:py-8 sm:p-10 bg-white dark:bg-darkTwo w-[95%] sm:w-[85%] max-w-screen-xl font-body"
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
                src="/images/xfocus-1.png"
                className="w-full h-full object-contain"
                priority={true}
              />
            </div>
            <div className="keen-slider__slide">
              <Image
                height={500}
                width={800}
                alt="pic-2"
                src="/images/xfocus-2.png"
                priority={true}
                objectFit="contain"
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
          <h1 className="text-2xl">Xfocus</h1>
          <p className="text-sm sm:text-base">
            Xfocus is an Enterprise resource planning (ERP) Application for
            Android OS so the clients can monitor their business through phone.
            This application was developed using Android Studio.
          </p>
          <p className="text-xl mt-2">Tech Stack</p>
          <div className="flex gap-2 w-full flex-wrap">
            <img
              className="skill-logo-detail"
              src="/images/java-logo.png"
              alt="java"
            />
            <img
              className="skill-logo-detail"
              src="/images/android-studio-logo.png"
              alt="android-studio"
            />
          </div>

          <div className="flex gap-4 justify-center mt-8 w-full">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/danhos28/Xfocus"
            >
              <Button style="px-8">Github</Button>
            </a>
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

export default XfocusModal;
