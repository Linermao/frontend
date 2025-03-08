import { styles } from "@/styles/styles";

import { ReactNode } from "react";

interface Props{
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

function Card({onClick, className, children}: Props){
  return (
    <>
      <div className={`${onClick ? "cursor-pointer" : ""} 
                       ${className}
                       w-full ${styles.primaryColor} 
                       shadow-xl
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