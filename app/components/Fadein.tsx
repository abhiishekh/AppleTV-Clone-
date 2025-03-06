"use client";
import { motion } from "framer-motion";

type FadeinProps = {
  children: React.ReactNode;
};

const Fadein = ({ children }: FadeinProps) => {
  // console.log("Fadein component rendered");

  if (!children) {
    return <motion.div>Fadein component with no children.</motion.div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{margin:"100% 0px -300px 0px"}}
    >
      {children}
    </motion.div>
  );
};

export default Fadein;