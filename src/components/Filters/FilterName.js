import React from "react";

const FilterName = (props) => {
  const handelChange = (ev) => {
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
        id="id"
        placeholder="Filter by name"
        value={props.filterName}
        onChange={handelChange}
      />
    </>
  );
};

export default FilterName;
