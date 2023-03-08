import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";


import { Videos, Sidebar } from "./";

const Feed = () => {

  // define state for selected category
  const [selectedCategory, setSelectedCategory] = useState("New");

  // define state for selected videos (based on selected category)
  const [videos, setVideos] = useState(null);

// :TODO: commented out to prevent API calls on refresh during development

  // useEffect(() => {
  //   setVideos(null);

  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  //     .then((data) => setVideos(data.items))
  //   }, [selectedCategory]);

  return (

    <Stack sx={{ 
              // responsive design - stack on small screens (less than 900px)
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

{/* section to render video title and tiles */}

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>

        <Typography 
                variant="h4" 
                fontWeight="bold" 
                mb={2} 
                sx={{ color: "white" }}
          >
        {/* render video category title to the page */}

          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          
        </Typography>

        {/* render videos component */}

        <Videos videos={videos} />

      </Box>

    </Stack>
  );
};

export default Feed;