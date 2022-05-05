import React from "react";
import PostDetailComment from "./PostDetailComment";
import PostDetailRichText from "./PostDetailRichText";
import PostDetailTag from "./PostDetailTag";

const PostDetailContent = () => {
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src="/assets/images/blog-detail.jpg" alt="blog-title" />
      </div>
      <div className="content-padding">
        <PostDetailRichText />
        <PostDetailTag />
        <PostDetailComment />
      </div>
    </div>
  );
};

export default PostDetailContent;
