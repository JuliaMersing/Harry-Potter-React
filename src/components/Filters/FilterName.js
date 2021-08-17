import React from "react";
import "../../stylesheet/Filters/FilterName.scss";

const FilterName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name"></label>
      <input
        type="text"
        className="form__input"
        name="name"
        id="name"
        placeholder="Filter by name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterName;
