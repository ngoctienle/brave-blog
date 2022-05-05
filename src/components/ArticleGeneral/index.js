import React from "react";

import ArticleItem from "../ArticleItem/index";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

const ArticleGeneral = () => {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLable="Read More">General News</MainTitle>
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem isStyleCard isShowAvatar={false} />
          </div>
        </div>
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading
            loadingPosition="right"
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleGeneral;
