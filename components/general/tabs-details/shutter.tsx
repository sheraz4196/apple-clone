import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const shutterVariants = {
  open: {
    y: "32px",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface ShutterProps {
  children: ReactNode;
  isOpen: boolean;
}

export default function Shutter({ children, isOpen }: ShutterProps) {
  return (
    <div className=" relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute -top-8 backdrop-blur-md z-50 w-full flex flex-col header-screen"
            initial="closed"
            animate="open"
            exit="closed"
            variants={shutterVariants}
          >
            <div className="w-full">{children}</div>
            <div className="flex-1 w-full bg-black/20 backdrop-blur-lg"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
