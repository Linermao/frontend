'use client'; // avoid hydration issue

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 确保只在客户端渲染
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // 防止 SSR 渲染

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}