import { notFound } from 'next/navigation';

import Aside from '@/components/Aside';
import ArticleCard from '@/components/Card/ArticleCard';
import Pagination from "@/components/Pagination";

import { m_articlesNum, m_articleType } from '@/utils/models/articles';

import { api_getArticles, api_getArticlesNum } from '@/utils/apis';
import { c_EACH_PAGE_NUM, c_CACHE_MODIFY_FREQUENCE, c_t_ARTICLE, c_t_ARTICLE_NUM } from '@/utils/configs';

export async function generateStaticParams() {
  const apiUrl = api_getArticlesNum();
  const response = await fetch(apiUrl, {
    next: { 
      revalidate: c_CACHE_MODIFY_FREQUENCE ,
      tags: [c_t_ARTICLE_NUM],
    }
  });


  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: m_articlesNum  = await response.json();
  const totalPages = Math.ceil(data.articles_num / c_EACH_PAGE_NUM);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    page_number: (i + 1).toString()
  }));
}

async function getArticleData(page_number: number) {
  const start = (page_number - 1) * c_EACH_PAGE_NUM;
  const apiUrl = api_getArticles(start, c_EACH_PAGE_NUM);
  const apiUrl_num = api_getArticlesNum();
  
  const [articlesRes, numRes] = await Promise.all([
    fetch(apiUrl, {
      next: { 
        revalidate: c_CACHE_MODIFY_FREQUENCE, 
        tags: [`${c_t_ARTICLE}${page_number}`],
      }
    }),
    fetch(apiUrl_num, {
      next: { 
        revalidate: c_CACHE_MODIFY_FREQUENCE,
        tags: [c_t_ARTICLE_NUM],
      }
    })
  ]);

  if (!articlesRes.ok || !numRes.ok) {
    return {
      articles: [],
      articles_num: 0,
    };
  }
  
  const articles = await articlesRes.json() as m_articleType[];
  const articles_num = await numRes.json() as m_articlesNum;
  
  return {
    articles,
    articles_num: articles_num.articles_num,
  };
}

export default async function BlogPages({ params }: { params: Promise<{ page_number: string }>}){

  const { page_number } = await params;
  const currentPage = parseInt(page_number, 10)

  const data = await getArticleData(currentPage);
  const totalPages = Math.ceil(data.articles_num / c_EACH_PAGE_NUM);
  
  if (!data.articles) {
    return notFound();
  }

  return (
    <>
    <div className='flex md:flex-row flex-col justify-center w-full gap-6 mt-32'>
      <Aside />
      <div className='flex flex-col justify-center items-center gap-6 w-[720px]'>
        {data.articles.map((article: m_articleType, index) => (
            <ArticleCard key={index} article={article} position={index%2 == 1 ? 'left' : 'right'}/>
        ))}
        <div className='p-4'>
          <Pagination currentPage={currentPage} totalPages={totalPages}/>
        </div>
      </div>
    </div>
  </>
  )

}