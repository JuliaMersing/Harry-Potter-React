import React from "react";
import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterAncestry from "./FilterAncestry";
import "../../stylesheet/Filters/Filters.scss";

const Filters = (props) => {
  return (
    <section>
      <form className="form__container">
        <FilterName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterHouse
          filterSpecie={props.filterHouse}
          handleFilter={props.handleFilter}
        />
        <FilterAncestry
          filterGender={props.filterAncestry}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
