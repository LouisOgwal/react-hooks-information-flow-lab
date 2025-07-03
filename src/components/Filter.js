// src/Filter.js
import React from "react";

function Filter({ onCategoryChange }) {
  function handleChange(event) {
    onCategoryChange(event.target.value); // ✅ send selected value up
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={handleChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
