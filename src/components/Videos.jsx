import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
const Videos = ({ videos }) => {
  // console.log(videos)
  return (
    // <div>Videos</div>
    <Stack direction="row" flexWrap="wrap" justifyContant="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* {console.log("item.id.videoId")} */}
          {/* {console.log(item.id.videoId)} */}
          {/* {console.log(item.id.videoId)} */}
          {/* {console.log("item.id.channelId")} */}
          {/* {console.log(item.id.channelId)} */}
          {/* {console.log("item")} */}
         {/* { console.log(item)} */}
          {/* <VideoCard 
            />  */}

{item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard 
 channelDetail= {item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
