import { use } from "react";
import { m_articleType } from "@/utils/models";
import BlogCard from "@/components/Card/BlogCard";
import DataCard from "@/components/Card/DataCard";
import SiteCard from "@/components/Card/SiteCard";
import ArticleNavCard from "@/components/Card/ArticleNavCard";
import MarkdownRenderer from "@/components/MarkdownTool/MarkdownRenderer";


function Aside({ content }: { content: string }) {
  return (
    <aside className="flex flex-col items-center md:w-[280px] w-full gap-4">
      <BlogCard />
      <DataCard />
      <SiteCard />
      <ArticleNavCard content={content} />
    </aside>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: { article_title: string };
}) {
  const { article_title } = await params;

  // 在服务器组件中直接获取数据
  const res = await fetch(`http://localhost:8000/api/v1/articles/${article_title}`);
  const article: m_articleType | null = await res.json();
  
  // 如果 article 为空，直接返回“文章未找到”
  if (!article) {
    return <p>Article not found</p>;
  }

  // 使用 MarkdownRenderer 解析 article.content
  const { content: articleContent, frontmatter } = await MarkdownRenderer({ content: article.content });

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center w-full gap-4 mt-24">
        <Aside content={article.content} />
        <div className="flex flex-col bg-white dark:bg-[#121212] shadow-xl rounded-2xl w-[720px]">
          <div className="flex flex-col">
            <p className="text-4xl font-bold pt-10 pl-10 pr-10">
              {frontmatter.title}
            </p>
            <p className="text-base font-bold p-10">{article.category}</p>
          </div>
          <div className="prose dark:prose-invert p-10 max-w-none w-full">
            {articleContent}
          </div>
        </div>
      </div>
    </>
  );
}
