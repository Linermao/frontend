import { m_articleType } from "@/utils/models/articles";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import Card from "@/components/Card/Card";

import avatar from "@/assets/avatar.jpg"

interface Props{
	// loading: boolean;
  position?: string
	article: m_articleType
}

interface Props_img{
  img_path: string | StaticImageData
  alt: string
}

function DisplayBar( {article}: Props) {
	return (
		<>
      <div className="flex flex-col">
        <Link href={`/blog/${article.title}`} className="text-black dark:text-white font-bold text-2xl hover:text-blue-600 cursor-pointer">{article.title}</Link>
        <div className="flex flex-row gap-2">
          {article.tags.map((tag, index)=>(
            <div key={index}>
              {tag} |
            </div>
          ))}
          <p>{article.category}</p>
        </div>

      </div>
		</>
	)
}

function CardImg({img_path, alt}: Props_img){
  return (
    <>
      <Image src={img_path} alt={alt}
             className="h-full w-full object-center object-cover 
                        hover:scale-110 transition-transform
                        dark:opacity-75
                       "
      />  
    </>
  )
}

function ArticleCard( {article, position}: Props){

  return (
    <>
      <Card className="w-full h-[225px] rounded-xl shadow-xl bg-white">
        {article 
          ? 
          <div className="flex justify-between items-center h-full">
            {position == "left" 
              ? 
              <>
                <div className="flex flex-1 p-10">
                  <DisplayBar article={article} />
                </div>
                <Link href={`/blog/${article.title}`} className="h-full w-[42%] rounded-xl overflow-hidden">
                  <CardImg img_path={avatar} alt={article.title} />
                </Link>
              </> 
              :
              <>
                <Link href={`/blog/${article.title}`} className="h-full w-[42%] rounded-xl overflow-hidden">
                  <CardImg img_path={avatar} alt={article.title} />
                </Link>
                <div className="flex flex-1 p-10">
                  <DisplayBar article={article} />
                </div>
              </>
            }

          </div>
          :
          <div className="text-2xl text-black">
            no articles
          </div>
        }
      </Card>

    </>
  )
}

export default ArticleCard;