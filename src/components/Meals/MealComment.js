import React from "react";

const MealComment = (props) => {
  const date = props.date;
  return (
    <div className="meal-view__comment">
      <div className="meal-view__comment--info">
        <span>{props.name}</span>
        <span>{date}</span>
        <span className="meal-view__rating">{props.rate}</span>
      </div>
      <div className="meal-view__comment--text">
        <p>{props.comment}</p>
        <p className="meal-view__comment--response">{props.response}</p>
      </div>
    </div>
  );
};

export default MealComment;
