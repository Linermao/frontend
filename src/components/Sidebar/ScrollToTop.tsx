'use client'; // 必须标记为客户端组件

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滚动
    });
  };

  // 如果没有滚动到一定位置，则不显示按钮
  if (!isVisible) return null;

  return (
    <>
      <button
        className="w-10 h-10 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
}