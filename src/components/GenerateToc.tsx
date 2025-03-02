"use client"

import React, { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  htmlContent: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ htmlContent }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const newHeadings: Heading[] = [];

    headingElements.forEach((heading) => {
      const level = parseInt(heading.tagName.substring(1), 10);
      const text = heading.textContent || '';
      const id = heading.id || text.toLowerCase().replace(/\s+/g, '-');
      if (!heading.id) {
        heading.id = id; // 为没有 id 的标题添加 id
      }
      newHeadings.push({ id, text, level });
    });

    setHeadings(newHeadings);
  }, [htmlContent]);

  return (
    <nav>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: (heading.level - 1) * 20 }}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
