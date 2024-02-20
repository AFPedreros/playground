"use client";

import { transitionVariantsPage } from "@/lib/motion-transition";
import { motion } from "framer-motion";

export function TransitionPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-50 h-screen w-screen bg-background"
        variants={transitionVariantsPage}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4, type: "linear" }}
      >
        {children}
      </motion.div>
    </>
  );
}
