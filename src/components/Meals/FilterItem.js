import React from "react";

const FilterItem = (props) => {
  return (
    <div
      className={props.classes}
      onClick={() => {
        props.onSelect(props.category);
        props.filterMenu(props.category);
      }}
    >
      <img width="48" height="48" src={props.icon} alt={props.category} />
      <span className="filter__text">{props.category}</span>
    </div>
  );
};

export default FilterItem;
