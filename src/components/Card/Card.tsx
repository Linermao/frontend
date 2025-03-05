import { MouseEventHandler, ReactNode } from "react";

interface Props{
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  children: ReactNode;
}

function Card({onClick, className, children}: Props){
  return (
    <>
      <div className={`${onClick ? "cursor-pointer" : ""} 
                       ${className}
                       w-full bg-white dark:bg-[#121212] shadow-xl
                       overflow-hidden rounded-xl
                    `}
          onClick={onClick}
      >
        {children}
      </div>
    </>
  );
};

export default Card;