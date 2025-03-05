import BlogCard from "@/components/Card/BlogCard";
import DataCard from "@/components/Card/DataCard";
import SiteCard from "@/components/Card/SiteCard";
import ArticleNavCard from "@/components/Card/ArticleNavCard";

interface BaseProps {
  isArticle?: boolean; // 使 isArticle 可选，并默认 false
}

interface ArticleProps extends BaseProps {
  isArticle: true;
  content: string;
}

interface NonArticleProps extends BaseProps {
  isArticle?: false;
  content?: never; // 确保 isArticle 为 false 时不能传 content
}

type Props = ArticleProps | NonArticleProps;

export default function Aside({ isArticle = false, content }: Props) {
  return (
    <aside className="flex flex-col items-center md:w-[280px] w-full gap-4">
      <BlogCard />
      <DataCard />
      <SiteCard />
      {isArticle && content && <ArticleNavCard content={content} />}
    </aside>
  );
}
