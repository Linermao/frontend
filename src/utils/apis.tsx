const API_BASE = process.env.NEXT_PUBLIC_LOCAL_TEST === 'true' 
    ? process.env.NEXT_PUBLIC_API_URL_LOCAL 
    : process.env.NEXT_PUBLIC_API_URL;

const API_GET_ARTICLES = process.env.NEXT_PUBLIC_API_GET_ARTICLES
const API_GET_ARTICLES_NUM = process.env.NEXT_PUBLIC_API_GET_ARTICLES_NUM
const API_GET_ARTICLES_TITLE = process.env.NEXT_PUBLIC_API_GET_ARTICLES_TITLE


const api_getArticles = (start?: number, limit?: number) => {
  let url = `${API_BASE}${API_GET_ARTICLES}`;

  const params: { [key: string]: string } = {};

  if (start !== undefined) params.start = start.toString();
  if (limit !== undefined) params.limit = limit.toString();

  if (Object.keys(params).length > 0) {
    const queryString = new URLSearchParams(params).toString();
    url = `${url}?${queryString}`;
  }

  return url;
};

const api_getArticlesNum = () => `${API_BASE}${API_GET_ARTICLES_NUM}`;
const api_getArticleByTitle = (title: string) => `${API_BASE}${API_GET_ARTICLES_TITLE}${title}`;

export { api_getArticles, api_getArticlesNum, api_getArticleByTitle };
