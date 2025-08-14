import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard({ title, backText, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="perspective w-full "
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <motion.div
        onClick={() => setFlipped(!flipped)}
        className="relative w-full h-48 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Fața cardului */}
        <motion.div
          className="absolute w-full h-full rounded-3xl bg-red-100/90 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-md flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="font-bold text-lg">{title}</h3>
        </motion.div>

        {/* Spatele cardului */}
        <motion.div
          className=" absolute w-full h-full rounded-3xl bg-red-200/90 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-md flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
        >
          <h3 className="font-bold text-lg text-red-600 mb-2">{title} 🎁</h3>
          <p className="text-sm sm:text-base line leading-relaxed bold">{backText}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
