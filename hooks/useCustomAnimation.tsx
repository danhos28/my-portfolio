import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * This is a custom hook to toggle a Framer Motion animation
 * when an element is in view or out of view
 *
 * @param {object} start - the framer motion animation object when IN view
 * @param {object} end - the framer motion animation object when OUT of view
 * @param {number} threshold - the threshold for when IN view
 * @returns {object} an object with the ref and the animation
 */

const useCustomAnimation = (start: object, end: object, threshold = 0.25) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) animation.start(start);
    else animation.start(end);
  }, [inView, animation, start, end]);

  return { ref, animation };
};

export default useCustomAnimation;
