"use client";

import { motion } from "framer-motion";

export default function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      whileHover={{ y: -2 }}
      className={`flex flex-col rounded-card border border-brand-border bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover md:p-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}
