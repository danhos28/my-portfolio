import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const Backdrop = ({
  children,
  onClick,
  elHeight,
}: {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  elHeight: number | null | undefined;
}) => {
  const bdropHeight = `${elHeight}px`;

  return (
    <motion.div
      className="absolute top-0 w-screen py-12 flex justify-center overflow-hidden z-10"
      // style={{ height: bdropHeight }}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
