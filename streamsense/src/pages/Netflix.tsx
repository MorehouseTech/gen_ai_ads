import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Typography, Button, Box, IconButton, Container, Grid, AppBar, Toolbar, TextField } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import gardenImage from '../assets/newAssets/Screen Shot 2025-03-13 at 2.03.34 PM.png';
import bathroomImage from '../assets/newAssets/Screen Shot 2025-03-13 at 2.03.57 PM.png';


const Netflix = () => {
    const [videos, setVideos] = useState([
        { id: 1, title: 'Avatar', image: gardenImage, category: 'Fantasy' },
        { id: 2, title: 'Stranger Things', image: bathroomImage, category: 'Drama' }
    ]);
    
    const navigate = useNavigate();
    const handleNavigate = (title: string, category: string) => {
        navigate(`/adPage/${title}/${category}`);
    };
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Fantasy', 'Drama'];
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredVideos = videos.filter(video => 
        (activeCategory === 'All' || video.category === activeCategory) &&
        (searchQuery === '' || video.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Group videos by row (3 per row)
    const groupedVideos = [];
    for (let i = 0; i < filteredVideos.length; i += 3) {
        groupedVideos.push(filteredVideos.slice(i, i + 3));
    }

    return (
        <Box sx={{ bgcolor: '#141414', minHeight: '100vh', width: '100vw',color: 'white',position: 'fixed',top: 0,left: 0,right: 0,bottom: 0}}>
            {/* Netflix Header */}
            <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', py: 1 }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        {/* Left section with logo and navigation */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'red', mr: 4 }}>
                                NETFLIX
                            </Typography>
                            <Box sx={{ display: 'flex' }}>
                                {categories.map(category => (
                                    <Button key={category} sx={{ color: 'white', mx: 1, textTransform: 'none',fontWeight: activeCategory === category ? 'bold' : 'normal','&:hover': { backgroundColor: 'transparent', opacity: 0.8 }}} onClick={() => setActiveCategory(category)}>
                                        {category}
                                    </Button>
                                ))}
                            </Box>
                        </Box>

                        {/* Right section with search and user */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton>
                                <NotificationsIcon sx={{ color: 'white' }} />
                            </IconButton>
                            <Box sx={{ width: 32, height: 32, bgcolor: 'dodgerblue', borderRadius: 1, ml: 2, display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                                <Typography variant="body2">:)</Typography>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Content Rows */}
            <Container maxWidth="xl" sx={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
                {groupedVideos.map((row, rowIndex) => (
                    <Box key={rowIndex} sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'medium' }}>
                            {rowIndex === 0 ? 'Popular on Netflix' : rowIndex === 1 ? 'Continue Watching' : 'New Releases'}
                        </Typography>
                        <Grid container spacing={2}>
                            {row.map((video) => (
                                <Grid item xs={12} sm={6} md={4} key={video.id}>
                                    <Box sx={{ position: 'relative', borderRadius: 1, overflow: 'hidden', '&:hover': { transform: 'scale(1.05)', '& .play-button': { opacity: 1 } }, transition: 'transform 0.3s' }}>
                                        <img src={video.image} alt={video.title} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
                                        <Box className="play-button" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0, transition: 'opacity 0.2s' }}>
                                            <IconButton onClick={() => handleNavigate(video.title, video.category)} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.5)' } }}>
                                                <PlayArrowIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        {video.title}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default Netflix;