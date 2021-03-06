import "../components/PostDetail/post-detail.css";

import React from "react";
import { useParams } from "react-router-dom";

import PostDetailContent from "../components/PostDetail/PostDetailContent";
import PostDetailHead from "../components/PostDetail/PostDetailHead";
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar";

const PostDetailPage = () => {
  const params = useParams();

  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead />
      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent />
            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostDetailPage;
