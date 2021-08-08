import React from "react";

const FilterAncestry = (props) => {
  const handelChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "house",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="ancestry"></label>
      <select
        type="text"
        className="form__select"
        name="ancestry"
        id="id"
        placeholder="Filter by ancestry"
        value={props.filterAncestry}
        onChange={handelChange}
      >
        <option value="All">All</option>
        <option value="half-blood">Half-blood</option>
        <option value="pure-blood">Pure-blood</option>
        <option value="squib">Squib</option>
        <option value="muggleborn">Muggleborn</option>
        <option value="">No Defined</option>
      </select>
    </>
  );
};

export default FilterAncestry;
