import clsx from "clsx";
import { styles } from "@/styles/styles";

type ButtonProps = {
  variant?: "primary" | "secondary" | "gray";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  shadow? : "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary", 
  size = "md", 
  children, 
  shadow,
  className, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-xl font-semibold transition-all duration-200",
        variant === "primary" && `${styles.primaryColor} ${styles.buttonHover}`,
        variant === "secondary" && `${styles.secondaryColor} ${styles.buttonHover}`,
        variant === "gray" && `${styles.grayColor} ${styles.buttonHover}`,
        {
          "px-2 py-1 text-sm rounded-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        {
          "shadow-sm": shadow === "sm",
          "shadow-md": shadow === "md",
          "shadow-lg": shadow === "lg",
        },
        className // 允许额外的 Tailwind 样式
      )}
    >
      {children}
    </button>
  );
};

export default Button;
