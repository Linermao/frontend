"use client"

import { styles } from '@/styles/styles';
import React, { useState, useEffect } from "react";

import ArticleCard from '@/components/Card/ArticleCard';
import BlogCard from "@/components/Card/BlogCard";
import DataCard from "@/components/Card/DataCard";
import SiteCard from "@/components/Card/SiteCard";
import MusicCard from '@/components/Card/MusicCard';
import Pagination from "@/components/Pagination";

import { m_articleType } from '@/utils/models';

function Aside(){
	return (
		<>
			<aside className="flex flex-col items-center md:w-[300px] w-full gap-4">
				<BlogCard />
				<DataCard />
				<SiteCard />
				<MusicCard />
			</aside>
		</>
	)
}

export default function Blog (){

	const [articles, setArticles] = useState<m_articleType[]>([]);

	useEffect(() => {
		// 定义异步函数以获取数据
		const fetchArticles = async () => {
		  try {
			const response = await fetch('http://localhost:8000/api/v1/articles?limit=8');
			if (!response.ok) {
			  throw new Error('网络响应不正常');
			}
			const data = await response.json();
			setArticles(data); // 更新状态变量
		  } catch (error) {
			console.error('获取文章数据时出错:', error);
		  }
		};
	  
		fetchArticles(); // 调用异步函数
	  }, []); // 空依赖数组，确保只在组件挂载时执行一次
	
	  
		if (!articles) {
			return <p>Article not found</p>;
		}
	
	
	return (
		<>
			<div className='flex md:flex-row flex-col justify-center w-full gap-6 mt-32'>
				<Aside />
				<div className='flex flex-col justify-center items-center gap-6 w-[720px]'>
					{articles.map((article: m_articleType, index) => (
							<ArticleCard key={index} article={article} position={index%2 == 1 ? 'left' : 'right'}/>
					))}
					<div className='p-4'>
						<Pagination />
					</div>
				</div>
			</div>
		</>
	)
}