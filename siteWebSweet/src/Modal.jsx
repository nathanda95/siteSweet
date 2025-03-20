import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Empêche le scroll en arrière-plan
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose(); // Ferme avec la touche Échap
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[1000]"
      onClick={onClose} // Ferme en cliquant en dehors
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-6 rounded-2xl shadow-2xl w-96 relative"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur
      >
        {/* Bouton de fermeture */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
