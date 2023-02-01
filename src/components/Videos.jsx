 
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from './';


const Videos = ({ videos, direction }) => {

    if (!videos?.length) return 'Loading...';

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" sx={{ gap: { md: 2, sm: 2, xs: 0 } }} >
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos
