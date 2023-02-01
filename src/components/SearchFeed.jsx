import { useState, useEffect } from 'react'
import { Box, Typography } from "@mui/material";
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);


  return (
    <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2, mx: { sm: '95px' }, p: { md: 1, sm: 0 } }}>
      <Typography variant='h5' fontWeight='bold' mb={2} ml={1} sx={{ color: "white" }}>
        Search results for : <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
