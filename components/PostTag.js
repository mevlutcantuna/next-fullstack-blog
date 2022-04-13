import { memo } from "react";

const PostTag = ({ tag }) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
  return (
    <span
      style={{
        fontSize: "14px",
        color: "white",
        margin: "0 1rem 0 0",
        borderRadius: "4px",
        padding: "0.4rem 0.8rem",
        backgroundColor: `#${randomColor}`,
      }}
    >
      {tag}
    </span>
  );
};

export default memo(PostTag);
