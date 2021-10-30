/* eslint-disable @next/next/no-img-element */
import Button from './Button';
import { motion } from 'framer-motion';
import useCustomAnimation from '../hooks/useCustomAnimation';

const Projects = () => {
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

  const animationOne = useCustomAnimation(fadeInDown.start, fadeInDown.end);
  const animationTwo = useCustomAnimation(fadeInUp.start, fadeInUp.end);
  const animationThree = useCustomAnimation(fadeInDown.start, fadeInDown.end);

  return (
    <div className="w-screen bg-light dark:bg-dark dark:text-white flex justify-center font-body">
      <div className="w-full max-w-screen-lg sm:w-3/4 h-full flex flex-col p-4 items-center gap-2">
        <h1 className="text-xl sm:text-3xl font-semibold mb-8">
          Recent projects
        </h1>

        <div
          className="w-full flex flex-col md:flex-row overflow-hidden relative mb-4"
          ref={animationOne.ref}
        >
          <div
            className="w-full md:w-2/3 overflow-hidden"
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
              className="w-[100px] md:w-[110px] lg:w-[130px] xl:w-[150px] top-1/4 right-0 md:left-1/2 md:top-1/3 absolute"
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
            <p className="font-bold text-dark">Full Stack</p>
            <p className="mb-4">
              Jobfinder is a website to help people find their dream job.{' '}
            </p>
            <div className="m-auto sm:m-0">
              <Button>Details</Button>
            </div>
          </div>
        </div>

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
            <p className="font-bold text-dark">Full Stack</p>
            <p className="mb-4">Cheapero is a fashion ecommerce website. </p>
            <div className="m-auto sm:m-0">
              <Button>Details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
