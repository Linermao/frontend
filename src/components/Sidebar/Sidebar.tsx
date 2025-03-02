'use client'; // 必须标记为客户端组件

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle"; // 假设你已经有一个主题切换组件
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion";

export default function Sidebar() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.screen.height/2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div className="flex flex-col items-end space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
      >
        {/* 主题切换按钮 */}
        <ThemeToggle />

        <ScrollToTop />

        <button className="w-10 h-10 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
          ⚙️
        </button>
      </motion.div>
    </div>
  );
}