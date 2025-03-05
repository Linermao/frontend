import { notFound } from "next/navigation";
import { m_articleType } from "@/utils/models/articles";

import MarkdownRenderer from "@/utils/tools/MarkdownRenderer";
import Aside from "@/components/Aside";

import { api_getArticles, api_getArticleByTitle } from '@/utils/apis';
import { c_CACHE_MODIFY_FREQUENCE, c_t_ALL_ARTICLES, c_t_ARTICLE } from '@/utils/configs';


export async function generateStaticParams() {
  const response = await fetch(api_getArticles(), {
    next: { 
      revalidate: c_CACHE_MODIFY_FREQUENCE,
      tags: [c_t_ALL_ARTICLES],
    }
  });
  if (!response.ok) return [];
  
  const articles: Pick<m_articleType, 'title'>[] = await response.json();
  
  return articles.map((article) => ({
    article_title: article.title,
  }));
}

async function getArticleData(title: string) {

  const apiUrl = api_getArticleByTitle(title);
  
  const res = await fetch(apiUrl, {
    next: { 
      revalidate: c_CACHE_MODIFY_FREQUENCE, 
      tags: [`${c_t_ARTICLE}${title}`], 
    }
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({})); // 防止 res.json() 失败

    if (res.status === 404) {
      return null;
    }

    throw new Error(errorData?.detail || `Failed to fetch article (Status: ${res.status})`);
  }

  return res.json() as Promise<m_articleType>;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ article_title: string }>
}) {
  const { article_title } = await params;

  const article = await getArticleData(article_title);

  if (!article) {
    return notFound();
  }

  const { content: articleContent, frontmatter } = await MarkdownRenderer({ content: article.content });

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center w-full gap-4 mt-24">
        <Aside isArticle content={article.content} />
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
