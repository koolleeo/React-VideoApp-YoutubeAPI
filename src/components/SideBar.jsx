import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

// pass in props from utils const categories

const Categories = ({ selectedCategory, setSelectedCategory }) => (

// use Stack MUI 

  <Stack
    direction="row"
    sx={{ 
    // ensure sidebar is responsive - scroll horizontal on sm screens
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >

{/* map props to button elements  */}

    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
    {/* change color and opacity when element is selected */}

        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
