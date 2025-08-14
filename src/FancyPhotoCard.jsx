import React from "react";
import { motion } from "framer-motion";

export default function FancyPhotoCard({ imageSrc, title = 'Momentele frumoase', description, index }) {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="relative h-64">
        {/* Imaginea */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-white/90 text-sm mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
