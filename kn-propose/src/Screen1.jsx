import React from "react";
import { motion } from "framer-motion";

export default function Screen1({ onNext }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 -top-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-purple-900/20 to-pink-600/10 blur-3xl"></div>
        <div className="absolute -right-40 -bottom-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-pink-900/8 to-red-700/10 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <FloatingHearts />
      </motion.div>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 bg-gradient-to-br from-[#0b0810]/60 to-[#130b14]/70 backdrop-blur-md border border-[#2b2030] p-8 rounded-2xl max-w-xl w-full text-center shadow-2xl"
      >
        <motion.h1
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          kn-chan
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-md md:text-xl text-[#e7dcee] font-medium"
        >
          there's somehing i've wanted to tell you !!
        </motion.p>

        <motion.button
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff5870] to-[#ff355d] text-white font-semibold shadow-lg"
        >
          Open it 💌
        </motion.button>
      </motion.div>

      <p className="absolute bottom-8 text-sm text-[#b6a8b0] z-20">made with ❤️</p>
    </div>
  );
}

function FloatingHearts() {
  const hearts = Array.from({ length: 10 }).map((_, i) => {
    const left = Math.random() * 100;
    const size = 18 + Math.random() * 40;
    const delay = Math.random() * 6;
    const duration = 6 + Math.random() * 8;
    return (
      <motion.div
        key={i}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: -400, opacity: [0, 0.9, 0] }}
        transition={{ delay, duration, repeat: Infinity, ease: "linear" }}
        style={{
          left: `${left}%`,
          position: "absolute",
          width: size,
          height: size,
          zIndex: 5,
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="url(#g)" d="M12 21s-8.5-5.6-10-9a6 6 0 0 1 10-4 6 6 0 0 1 10 4c-1.5 3.4-10 9-10 9z" />
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#ff7ba0" />
              <stop offset="1" stopColor="#ff416c" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    );
  });
  return <>{hearts}</>;
}