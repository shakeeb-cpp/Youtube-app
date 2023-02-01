import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ReactPlayer from "react-player";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight='90vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box sx={{ width: { md: '80%', sm: '100%' }, position: 'sticky', top: '78px' }}>
          <ReactPlayer url={`https://www.com.youtube.com/watch?v=${id}`} className='react-player' controls />
          {/* <Typography variant="h6" color="#fff" fontWeight='bold' p={2} py={{ md: 2, xs: 1 }} mt='-2px' sx={{ backgroundColor: '#000' }}>
            
          </Typography> */}
          <Accordion p={2} py={{ md: 2, xs: 1 }} sx={{ backgroundColor: '#000', color: '#fff', top:'-17px',borderBottom: '1px solid #1e1e1e' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography >Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='h6'>
                {title}
              </Typography>
              <Stack direction='row' justifyContent='start' sx={{ color: '#fff', backgroundColor: '#000' }} py={2} px={0}>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography variant='body1' sx={{ opacity: 0.7 }} color="#fff">
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{ opacity: 0.7 }} color="#fff">
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Stack direction='row' justifyContent='space-between' mt='-34px' sx={{ color: '#fff', backgroundColor: '#000', borderBottom: '1px solid #fff' }} pb={2} pt={3.8} px={1}>
            <Link to={`/channel/${channelId}`} >
              <Typography variant='body1' color="#fff" pb={0.7} pt={1.2} px={2} sx={{ fontSize: '17px', borderRadius: '50px', backgroundColor: '#1e1e1e' }}>
                {channelTitle}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Typography>
            </Link>
          </Stack>
        </Box>
        <Box px={{ md: 3, sm: 0 }} py={{ md: 1, xs: 0 }} justifyContent='start' height='550px' overflow='auto' alignItems='center'>
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
