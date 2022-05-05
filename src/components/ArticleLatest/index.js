import "./latest-news.css";

import React from "react";
import MainTitle from "../shared/MainTitle";
import ArticleItem from "../ArticleItem";

const ArticleLatest = () => {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle />
        {/* Latest News List */}
        <div className="latest-news__list spacing">
          <div className="latest-news__card">
            <ArticleItem />
          </div>
          <div className="latest-news__card">
            <ArticleItem />
          </div>
          <div className="latest-news__card">
            <ArticleItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLatest;
