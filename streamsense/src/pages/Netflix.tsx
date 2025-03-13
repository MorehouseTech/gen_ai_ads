import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Typography, Button, Box, IconButton, Container, Grid,  AppBar, Toolbar, TextField} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import gardenImage from '../assets/Screen Shot 2025-03-04 at 1.56.56 AM.png';
import bathroomImage from '../assets/Screen Shot 2025-03-04 at 1.57.28 AM.png';
import Hulu from './Hulu';
// const navigate = useNavigate();
//     const passed = 12;

//     const handleNavigate = () => {
//         navigate(`/AIinfo/${passed}`);
//     };

//     return (
//         <Button 
//             variant="contained" 
//             color="primary" 
//             onClick={handleNavigate}
//         >
//             Go to AIinfo
//         </Button>
//     );
const Netflix = () => {
    
    const [videos, setVideos] = useState([
        { id: 1, title: 'How to Make an Easy Green Project', image: gardenImage, duration: '12:30', link: 'https://www.youtube.com/watch?v=n3brCJ6TLoA', category: 'Garden' },
        { id: 2, title: 'Bathroom Renovation Guide', image: bathroomImage, duration: '18:45', link: 'https://www.youtube.com/watch?v=tqraoQeEYT4', category: 'Bathroom' }
    ]);
    const navigate = useNavigate();
    const handleNavigate = (title: string, category: string) => {
                navigate(`/AIinfo/${title}/${category}`);
            };
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Garden', 'Bathroom'];

    const filteredVideos = videos.filter(video => activeCategory === 'All' || video.category === activeCategory);

    return (
        
        <Container maxWidth="md" sx={{ p: 0, bgcolor: '#141414', height: '100vh', display: 'flex', flexDirection: 'column', color: 'white' }}>
            {/* Category Filter */}
            <button onClick={() => navigate('/')}> // Go back to platform selection
                Go to Home
            </button>
            <AppBar position="static" sx={{ bgcolor: '#111' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'red' }}>
              NETFLIX
            </Typography>
          </Toolbar>
        </AppBar>
            <Box sx={{ display: 'flex', overflowX: 'auto', p: 1, backgroundColor: '#222', '&::-webkit-scrollbar': { display: 'none' } }}>
                {categories.map(category => (
                    <Button key={category} variant={activeCategory === category ? "contained" : "outlined"} sx={{ mx: 0.5, borderRadius: 4, textTransform: 'none', minWidth: 'auto', px: 2, backgroundColor: activeCategory === category ? '#E50914' : 'transparent', borderColor: '#E50914', color: activeCategory === category ? 'white' : '#E50914', '&:hover': { backgroundColor: activeCategory === category ? '#E50914' : 'rgba(229, 9, 20, 0.1)' } }} onClick={() => setActiveCategory(category)}>
                        {category}
                    </Button>
                ))}
            </Box>
            
            {/* Videos List */}
            <Box sx={{ flex: 1, overflow: 'auto', p: 2, backgroundColor: '#181818' }}>
                <Grid container spacing={2}>
                    {filteredVideos.map((video) => (
                        <Grid item xs={12} key={video.id}>
                            <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', '&:hover': { transform: 'scale(1.02)' }, transition: 'transform 0.2s' }}>
                                <img src={video.image} alt={video.title} style={{ width: '100%', height: 450, objectFit: 'cover', borderRadius: 8 }} />
                                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <IconButton 
                                            onClick={() => handleNavigate(video.title, video.category)}
                                            sx={{ backgroundColor: 'rgba(229, 9, 20, 0.8)', color: 'white', '&:hover': { backgroundColor: '#E50914' } }}
                                        >
                                            <PlayArrowIcon fontSize="large" />
                                        </IconButton>
                                </Box>

                            </Box>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{video.title}</Typography>
                                <Typography variant="caption" sx={{ color: '#E50914', fontWeight: 'medium' }}>{video.category}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Netflix;