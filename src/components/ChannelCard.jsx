import { Link } from 'react-router-dom'
import { Typography, Box, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail ,marginTop}) => (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: "366px", md: "275px" }, height: "326px", margin: 'auto', marginTop}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ width: '180px', height: '180px', borderRadius: '50%', mb: 2, border: '1px solid #e3e3e3' }} />
                <Typography variant="h6" color="">
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography variant="subtitle1" color="gray">
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)


export default ChannelCard
