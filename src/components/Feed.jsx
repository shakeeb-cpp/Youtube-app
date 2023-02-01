import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);


    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 } }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright 2023 Media App
                </Typography>
            </Box>

            <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2, p: { md: 1, sm: 1, xs: 0 } }}>
                <Typography variant='h4' fontWeight='bold' mb={2} ml={1} sx={{ color: "white" }}>
                    {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>

        </Stack >
    )
}

export default Feed
