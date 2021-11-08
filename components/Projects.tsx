import useCustomAnimation from '../hooks/useCustomAnimation';
import Cheapero from './cheapero';
import DriveSafely from './Drivesafely';
import Jobfinder from './jobfinder';
import Xfocus from './xfocus';

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

const Projects = () => {
  const animationOne = useCustomAnimation(fadeInDown.start, fadeInDown.end);
  const animationTwo = useCustomAnimation(fadeInUp.start, fadeInUp.end);
  const animationThree = useCustomAnimation(fadeInUp.start, fadeInUp.end);
  const animationFour = useCustomAnimation(fadeInUp.start, fadeInUp.end);
  const animationFive = useCustomAnimation(fadeInDown.start, fadeInDown.end);

  return (
    <section
      id="projects"
      className=" w-screen bg-waves-two-light bg-no-repeat bg-cover dark:bg-waves-two-dark dark:text-white flex items-center flex-col font-body"
    >
      <h1 className="text-xl sm:text-3xl font-semibold mt-2">
        Recent projects
      </h1>
      <div className="w-full max-w-screen-lg sm:w-3/4 h-full flex flex-col p-4 items-center gap-2">
        <Jobfinder animationOne={animationOne} animationTwo={animationTwo} />
        <Cheapero animationOne={animationThree} />
        <Xfocus animationOne={animationFour} />
        <DriveSafely animationOne={animationFive} />
      </div>
    </section>
  );
};

export default Projects;
