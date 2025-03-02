import { promises as fs} from 'fs';
import path from 'path';
import { compileMDX } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/atom-one-dark.css';

export default async function MarkdownRenderer({content=''}){
  const data = await compileMDX<{ title:string }>({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypeHighlight, rehypeSlug],
      }
    }
  })

  return { content: data.content, frontmatter: data.frontmatter };
}
