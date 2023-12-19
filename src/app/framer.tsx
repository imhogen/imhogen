"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface MotionComponentProps {
  childVariants: any;
  children: ReactNode;
}

const Motion: React.FC<MotionComponentProps> = ({
  childVariants,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  console.log("InView:", inView);
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <motion.div
        className="motion-container"
        variants={childVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Motion;
