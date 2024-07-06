import React from "react";
import Modal from "../UI/Modal";
import DUMMY_COMMETNS from "./DUMMY_COMMENTS";
import MealComment from "./MealComment";
import DUMMY_MEALS from "./DUMMY_MEAL_DATA";

const MealView = (props) => {
  // Find the meal with passed id from props
  const meal = DUMMY_MEALS.find((meal) => meal.id === props.mealViewID);

  // Find the corresponding comments for meal id
  const comments = DUMMY_COMMETNS.filter(
    (comment) => comment.mealID === meal.id
  );

  return (
    <Modal onClose={props.onHideMealView}>
      <div className="meal-view">
        <header className="meal-view__header">
          <img src={meal.image} alt={meal.name} />
          <div className="meal-view__info">
            <h3>{meal.name}</h3>
            <span className="meal-view__rating">{meal.rating}</span>
            <p className="meal-view__ingredients">{meal.ingredients}</p>
          </div>
        </header>
        <section className="meal-view__comments">
          <h3>نظرات کاربران</h3>
          <div className="underline"></div>
          {comments.length === 0 && <p>هنوز نظری ثبت نشده است</p>}
          {comments.map((item) => (
            <MealComment
              name={item.name}
              date={item.date}
              comment={item.comment}
              rate={item.rate}
              response={item.response}
            />
          ))}
        </section>
      </div>
    </Modal>
  );
};

export default MealView;
