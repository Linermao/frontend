"use client"

import React, { useEffect, useState } from 'react';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import { motion } from 'framer-motion'

interface TocItem {
  level: number;
  title: string;
  id: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  // 计算视口高度和下20%位置
  const viewportHeight = window.innerHeight;
  const targetPosition = element.offsetTop - viewportHeight * 0.2;

  // 平滑滚动到计算位置
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};

export default function MarkdownWithToc ({ content }: { content: string }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // 使用 remark 解析 Markdown 并提取标题
    const extractToc = async () => {
      const file = await remark().use(remarkParse).process(content);

      // 确保 file.contents 是字符串
      const ast = file.value as string;

      const tocItems: TocItem[] = [];
      const regex = /^(#{1,6})\s+(.*)/; // 正则表达式，匹配标题

      // 将 ast 按行分割成数组
      const lines = ast.split('\n'); // 分割成行
      lines.forEach((line) => {
        const match = line.match(regex);
        if (match) {
          const level = match[1].length; // 标题的层级
          const title = match[2]; // 标题的文本
          const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, ''); // 生成标题的 id

          tocItems.push({
            level,
            title,
            id,
          });
        }
      });

      setToc(tocItems);
    };

    extractToc();
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px', // 表示当元素进入视口的下20%区域时触发
        threshold: 0.1
      }
    );
    // 观察所有标题元素
    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
  
    return () => {
      toc.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [toc]);

  return (
    <ul className="sticky top-20">
      {toc.map((item) => (
        <li
          key={item.id}
          className={`text-base p-1 transition-colors duration-200 ${
            activeId === item.id 
              ? 'text-blue-600 dark:text-blue-400 font-medium' 
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
          style={{ marginLeft: `${(item.level - 1) * 20}px` }}
        >
          <div className="absolute right-0 w-2 h-6 bg-white dark:bg-gray-700 rounded-full">
            {activeId === item.id && (
              <motion.div
                className="bg-blue-500 h-full rounded-full"
                layoutId="activeIndicator"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </div>
          <motion.a
            onClick={() => scrollToSection(item.id)}
            className="cursor-pointer block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.title}
          </motion.a>
        </li>
      ))}
    </ul>
  )
};