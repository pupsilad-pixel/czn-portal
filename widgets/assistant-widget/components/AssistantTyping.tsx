"use client";

import { motion } from "framer-motion";

export const AssistantTyping = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-1 bg-white border border-blue-50 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm w-fit mb-4"
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="w-1.5 h-1.5 bg-brand rounded-full"
        />
      ))}
    </motion.div>
  );
};
