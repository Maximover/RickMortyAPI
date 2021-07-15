import React from "react";

const Filter = ({ onValueChange }) => {
  return (
    <div className="flex flex-row">
      <input
        id="searchbar"
        type="text"
        className="w-4/5 p-2"
        onChange={(e) => onValueChange(e.target.value)}
      ></input>
    </div>
    /*
    <select id="status_filter">
      <option selected value="">
        All
      </option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    */
  );
};

export default Filter;
