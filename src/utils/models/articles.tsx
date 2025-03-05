export interface m_articlesNum {
  articles_num: number
}

export interface m_frontMatter {
    title: string;
    date: Date;
    // tags: string[];
    categories: string;
    cover: string;
}

// 文章头部信息
export interface m_articleMeta {
    title: string;
    date: Date;
    modify_date: Date;
    tags: string[];
    cover_img: string;
    categories: string;
}
  
// 文章条目，包含头部信息和路径信息
export interface m_articleType {
  name: string;
  title: string;
  cover_img: string;
  date: Date;
  modify_date: Date;
  tags: string[];
  category: string;
  content: string;
  status: string;
  views: number;
}