import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const Backdrop = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <motion.div
      className="absolute top-0 w-screen py-6 flex justify-center overflow-hidden z-10"
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
