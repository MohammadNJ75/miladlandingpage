"use client";

import { motion } from "framer-motion";

export default function DiscountBadge() {
  return (
    <motion.div
      className="absolute top-8 right-8 md:top-12 md:right-12 z-10"
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.5,
      }}
    >
      <div className="relative">
        {/* Starburst shape */}
        <div className="absolute -inset-1.5 bg-red-600 rounded-full blur-sm opacity-70"></div>

        {/* Main badge */}
        <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg border-2 border-white rotate-12">
          <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-white font-bold transform -rotate-12">
              <span className="text-sm md:text-base uppercase tracking-wider">
                تخفیف
              </span>
              <span className="text-2xl md:text-4xl leading-none">50%</span>
              <span className="text-xs md:text-sm uppercase tracking-wider">
                زمان
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider">
                محدود
              </span>
            </div>
          </div>
        </div>

        {/* Animated pulse effect */}
        <motion.div
          className="absolute -inset-3 rounded-full bg-red-500 opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  );
}
