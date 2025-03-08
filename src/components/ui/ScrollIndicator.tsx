"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollIndicator = ({
  size = 40,
  color = "white",
}) => {
  const [isBottom, setIsBottom] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        setIsBottom(scrollTop + windowHeight >= docHeight - 10); // 误差控制
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [windowHeight]);

  const handleClick = () => {
    setIsClicked(true);
    if (typeof window !== 'undefined') {
      if (isBottom) {
        window.scrollTo({ top: 0, behavior: "smooth" }); // 返回顶部
      } else {
        window.scrollBy({ top: windowHeight, behavior: "smooth" }); // 向下滚动
      }
    }
    setTimeout(() => setIsClicked(false), 600); // 600ms 后重置动画
  };

  return (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={handleClick}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }} // 上下浮动动画
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        animate={isClicked ? { y: [0, 10, 0], opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 0.6 }}
        className="drop-shadow-lg"
      >
        {isBottom ? (
          // 向上箭头 `>>`
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 15l5-5 5 5"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 20l5-5 5 5"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // 向下箭头 `>>`
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 9l5 5 5-5"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 4l5 5 5-5"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;