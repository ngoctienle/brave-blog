import "./article-item.css";

import React from "react";
import cls from "classname";

import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";
import ArticleItemDesc from "./ArticleItemDesc";

const ArticleItem = ({
  isStyleRow = false,
  isStyleCard = false,
  isShowDecs = false,
  isShowCategories = false,
  isShowStats = false,
  isShowAvatar = true,
}) => {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });
  return (
    <article className={classes}>
      <ArticleItemThumb />
      <div className="article-item__content">
        {isShowCategories && <ArticleItemCategories />}
        {isShowStats && <ArticleItemStats />}
        <ArticleItemTitle />
        {isShowDecs && <ArticleItemDesc />}
        <ArticleItemInfo isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
};

export default ArticleItem;
