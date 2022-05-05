import React from "react";
import PostDetailAuthor from "./PostDetailAuthor";
import PostDetailRelatedPosts from "./PostDetailRelatedPosts";

const PostDetailSidebar = () => {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor />
      <div className="spacing" />
      <PostDetailRelatedPosts />
    </div>
  );
};

export default PostDetailSidebar;
