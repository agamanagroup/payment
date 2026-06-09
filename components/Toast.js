"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Toast({ message, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-medium text-white shadow-card-hover"
        >
          <CheckCircle2 className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
