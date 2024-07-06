import React, { useState } from "react";
import FilterItem from "./FilterItem";

// Corresponding icon for each category
const FILTER_ICONS = [
  {
    category: "نمایش همه",
    icon: "https://img.icons8.com/color/48/restaurant-menu.png",
  },
  {
    category: "تخفیف دار",
    icon: "https://img.icons8.com/color/48/discount--v1.png",
  },
  {
    category: "پیتزا",
    icon: "https://img.icons8.com/color/48/pizza.png",
  },
  {
    category: "ساندویچ",
    icon: "https://img.icons8.com/color/48/sandwich.png",
  },
  {
    category: "بشقاب ها",
    icon: "https://img.icons8.com/color/48/lasagna.png",
  },
  {
    category: "برگر",
    icon: "https://img.icons8.com/color/48/hamburger.png",
  },
  {
    category: "پیش غذا",
    icon: "https://img.icons8.com/color/48/salad.png",
  },
  {
    category: "نوشیدنی",
    icon: "https://img.icons8.com/color/48/soda-can.png",
  },
];

const FilterMeals = ({ categories, filterMenu }) => {
  const [isSelected, setIsSelected] = useState("نمایش همه");
  const selectHandler = (category) => {
    setIsSelected(category);
  };
  return (
    <section className="filter">
      {categories.map((item) => {
        // Find the corresponding icon for category
        const iconIndex = FILTER_ICONS.find(
          (iconObj) => iconObj.category === item
        );
        const icon = iconIndex.icon;
        const classes = `filter__item ${
          isSelected === item && "filter__item--active"
        }`;
        return (
          <FilterItem
            category={item}
            icon={icon}
            classes={classes}
            filterMenu={filterMenu}
            onSelect={selectHandler}
          />
        );
      })}
    </section>
  );
};

export default FilterMeals;
