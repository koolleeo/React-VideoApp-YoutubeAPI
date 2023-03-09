
import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {

  // check to make sure that videos array is not null
  if(videos?.length) 
  
  return (

// flex container
    <Stack 
          direction={"row"} 
          flexWrap="wrap" 
          justifyContent="start" 
          alignItems="start" 
          gap={2}
    >
      
    {/* map cards */}

      {videos.map((item, idx) => (

        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>

      ))}

    </Stack>

  );
}

export default Videos;