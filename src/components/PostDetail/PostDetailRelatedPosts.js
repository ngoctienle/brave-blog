import React from "react";
import ArticleRelated from "../ArticleItem/ArticleRelated";

const PostDetailRelatedPosts = () => {
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      <ArticleRelated />
      <ArticleRelated />
      <ArticleRelated />
      <ArticleRelated />
    </div>
  );
};

export default PostDetailRelatedPosts;
