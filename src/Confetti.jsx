import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Confetti({ celebrate }) {
  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        scale: 0.5 + Math.random() * 1.5,
        rotate: Math.random() * 360,
        duration: 3 + Math.random() * 3,
        sway: Math.random() * 20 - 10,
        color: Math.random() > 0.5 ? "bg-red-500" : "bg-white",
        shape: ["rounded-full", "rounded", "rounded-3xl"][Math.floor(Math.random() * 3)],
      })),
    []
  );

  return (
    <AnimatePresence>
      {celebrate &&
        confettiPieces.map((c) => (
          <motion.div
            key={c.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: ["-10vh", "110vh"],
              x: [c.x + "%", c.x + c.sway + "%"],
              opacity: [0, 1, 1, 0],
              rotate: [c.rotate, c.rotate + 360],
              scale: c.scale,
            }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className={`fixed top-0 w-2 h-2 ${c.color} ${c.shape}`}
            style={{ left: `${c.x}%` }}
          />
        ))}
    </AnimatePresence>
  );
}
