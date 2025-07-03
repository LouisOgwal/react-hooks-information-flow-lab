import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"; // ✅ import new component

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category); // ✅ now expects a string directly
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      {/* ✅ use Filter component */}
      <Filter onCategoryChange={handleCategoryChange} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
