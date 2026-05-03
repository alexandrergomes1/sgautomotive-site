"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "34662625953";

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({ message = "" }: WhatsAppButtonProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-trust shadow-lg shadow-trust/30 text-white hover:bg-trust-light transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
