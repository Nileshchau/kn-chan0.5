import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Final() {
  const [answered, setAnswered] = useState(null);

  return (
    <div className="w-full h-screen flex items-center justify-center px-6">
      <div className="relative max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0c0710]/70 border border-[#2a2130] p-10 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Will you be mine, Kn-chan?</h2>
          <p className="mt-4 text-[#d6c8d2]">I've waited to say this — you're everything to me.</p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => setAnswered("yes")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6e8a] to-[#ff3566] text-white font-semibold shadow"
            >
              YES 💖
            </button>

            <button
              onClick={() => setAnswered("no")}
              className="px-6 py-3 rounded-full border border-[#3a2b3d] text-[#e0ced8] font-semibold hover:bg-[#1a1520]"
            >
              NO 😅
            </button>
          </div>

          {answered === "yes" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg"
            >
              <p className="text-[#ffdfe6]">You made me the happiest — thank you, Kn-chan 💖</p>
            </motion.div>
          )}

          {answered === "no" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-lg">
              <p className="text-[#c9b9c7]">Haha it's okay — I'm still glad I told you ❤️</p>
            </motion.div>
          )}
        </motion.div>

        <p className="mt-6 text-sm text-[#b6a8b0]">Tip: share the site link with Kn-chan — mobile works best.</p>
      </div>
    </div>
  );
}