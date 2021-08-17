import React from "react";
import "../../stylesheet/Filters/OtherFilters.scss";

const FilterHouse = (props) => {
  const handelChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "house",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="house"></label>
      <select
        type="text"
        className="form__select"
        name="house"
        id="id"
        placeholder="Filter by house"
        value={props.filterHouse}
        onChange={handelChange}
      >
        <option value="All">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="">No House</option>
      </select>
    </>
  );
};

export default FilterHouse;
