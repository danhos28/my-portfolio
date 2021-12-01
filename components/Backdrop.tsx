import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const Backdrop = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <motion.div
      className="fixed top-[64px] w-screen h-[calc(100vh-64px)] bg-[#0a0a0a48] flex justify-center items-center overflow-hidden z-10"
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
