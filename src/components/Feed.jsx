import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";


import { Sidebar } from "./";

const Feed = () => {

  // define state for selected category
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (

    <Stack sx={{ 
              // side scroll at md (900px) breakpoint
              flexDirection: { sx: "column", md: "row" } 
              }}>

{/* sideBar menu */}

      <Box sx={{ 
             height: { sx: "auto", md: "92vh" }, 
             borderRight: "1px solid #3d3d3d", 
             px: { sx: 0, md: 2 } 
             }}>
        
        <Sidebar 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
        />
        
        <Typography 
              className="copyright" 
              variant="body2" 
              sx={{ mt: 1.5, color: "#fff", }}
        >
          Copyright © Koolleeo
        </Typography>

      </Box>
 
    </Stack>
  );
};

export default Feed;