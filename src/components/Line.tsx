import React from "react";

interface LineProps {
  width?: string;  // 线的宽度 (thickness)
  length?: string; // 线的长度
  direction?: "horizontal" | "vertical"; // 方向
  color?: string; // 颜色
}

const Line: React.FC<LineProps> = ({
  width = "2px",
  length = "100%",
  direction = "horizontal",
  color = "gray",
}) => {
  return (
    <div
      className={`bg-${color} rounded-sm`}
      style={{
        width: direction === "horizontal" ? length : width,
        height: direction === "horizontal" ? width : length,
        backgroundColor: color,
      }}
    />
  );
};

export default Line;
