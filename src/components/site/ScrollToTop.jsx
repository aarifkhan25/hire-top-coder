"use client";

import { animate, AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // यह चेक करता है कि पेज 300px से नीचे स्क्रॉल हुआ है या नहीं
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Next.js SSR सेफ चेक
    if (typeof window === "undefined") return;

    const currentScroll = window.scrollY;

    animate(currentScroll, 0, {
      type: "tween",
      duration: 1.5, // 1.5 सेकंड में धीरे-धीरे ऊपर जाएगा
      ease: "easeInOut",
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Go to top"
          
          // दिखने और गायब होने का स्मूथ फेड-इन इफ़ेक्ट
          initial={{ opacity: 0, scale: 0.6, y: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            // यहाँ इनफिनिट फ्लोटिंग एनिमेशन (10px अप-डाउन) को कंबाइन किया है
            y: [0, -10, 0] 
          }}
          exit={{ opacity: 0, scale: 0.6, y: 0 }}
          
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          
          // यहाँ साइज टकराव को ठीक करके w-12 h-12 फिक्स कर दिया है
          className="fixed bottom-6 right-6 z-50 flex w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full cursor-pointer shrink-0 border border-white/20 bg-neutral-900 text-primary hover:border-primary shadow-xl"
        >
          <MdArrowUpward className="text-2xl text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}