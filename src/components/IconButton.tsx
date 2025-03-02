import Image from "next/image";

interface Props{
  isLink: boolean;
  link: string;
  ico: string;
}

function IconButton({ isLink, link, ico }: Props){

  return(
    <>
      {isLink 
        ? 
        <a href={link} target='_blank' rel='noreferrer'>
          <Image src={ico} alt="icon" className="w-11 h-11" />
        </a>
        :
        <Image src={ico} alt="icon" className="w-11 h-11"/>
      }
    </>
  )
}

export default IconButton;