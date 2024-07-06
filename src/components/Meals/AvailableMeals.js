import MealItem from "./MealItem";
const AvailableMeals = (props) => {
  return (
    <section className="meals">
      {props.menuItems.map((meal) => (
        <MealItem
          id={meal.id}
          title={meal.name}
          image={meal.image}
          price={meal.price}
          rating={meal.rating}
        />
      ))}
    </section>
  );
};

export default AvailableMeals;
