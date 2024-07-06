import { React, useEffect, useState } from "react";
import AvailableMeals from "./AvailableMeals";
import FilterMeals from "./FilterMeals";
import DUMMY_MEALS from "./DUMMY_MEAL_DATA";

// Get all available categories
let allCategories = new Set();

DUMMY_MEALS.map((item) => {
  item.category.map((category) => {
    allCategories.add(category);
  });
});

const Meals = (props) => {
  // Get menu items data, passed to available meals component
  const [menuItems, setMenuItems] = useState(DUMMY_MEALS);
  const [categories, setCategories] = useState(["نمایش همه", ...allCategories]);

  // filter menu functions passed to filter component
  const filterMenu = (category) => {
    if (category === "نمایش همه") {
      setMenuItems(DUMMY_MEALS);
      return;
    }
    const filteredMenu = DUMMY_MEALS.filter((meal) => {
      if (meal.category.indexOf(category) !== -1) {
        return meal;
      }
    });
    setMenuItems(filteredMenu);
  };

  // Search meals and set items
  useEffect(() => {
    const searchedMeals = DUMMY_MEALS.filter((item) =>
      item.name.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
    setMenuItems(searchedMeals);
  }, [props.searchQuery]);

  return (
    <>
      <FilterMeals filterMenu={filterMenu} categories={categories} />
      <AvailableMeals menuItems={menuItems} />
    </>
  );
};

export default Meals;
