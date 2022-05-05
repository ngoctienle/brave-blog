import React from "react";

import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";
import MainTitle from "../components/shared/MainTitle";

import getQueryStr from "../helpers";

const SearchPage = () => {
  const queryStr = getQueryStr("q");

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">5 Results found for "{queryStr}"</MainTitle>
        {/* End Row News List */}
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategories
              isShowDecs={false}
              isShowAvatar={false}
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategories
              isShowDecs={false}
              isShowAvatar={false}
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategories
              isShowDecs={false}
              isShowAvatar={false}
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategories
              isShowDecs={false}
              isShowAvatar={false}
            />
          </div>
        </div>
        {/* End Row News List */}
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button type="primary" size="large">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
