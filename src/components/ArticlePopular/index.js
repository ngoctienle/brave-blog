import "./popular-news.css";

import React from "react";

import MainTitle from "../shared/MainTitle";
import ArticleItem from "../ArticleItem/index";

const ArticlePopular = () => {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLable="Read More">Popular News</MainTitle>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <ArticleItem
                  isStyleCard
                  isShowDecs
                  isShowStats
                  isShowCategories
                />
              </div>
              <div className="popular-news__list--card">
                <ArticleItem
                  isStyleCard
                  isShowCategories
                  isShowStats
                  isShowDecs
                />
              </div>
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <ArticleItem
                  isStyleCard
                  isStyleRow
                  isShowDecs
                  isShowCategories
                  isShowStats
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePopular;
