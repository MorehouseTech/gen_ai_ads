import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Typography, Box, IconButton, Container, Grid, AppBar, Toolbar, } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuIcon from '@mui/icons-material/Menu';
import new3 from '../assets/newAssets/Screen Shot 2025-03-13 at 4.49.19 PM.png';
import new4 from '../assets/newAssets/Screen Shot 2025-03-13 at 4.50.17 PM.png';
import new1 from '../assets/newAssets/Screen Shot 2025-03-13 at 4.50.43 PM.png';
import new2 from '../assets/newAssets/Screen Shot 2025-03-13 at 4.51.05 PM.png';


const YouTube = () => {
    const [videos, setVideos] = useState([
        { id: 1, title: 'I went to the Pokemon Cafe!', image: new3, category: 'Entertainment', views: '2.8M', timeAgo: '13 days ago', duration: '7:41', channel: 'PokemonFan' },
        { id: 2, title: 'I played Pokemon, but with 50+ New Types', image: new4, category: 'Gaming', views: '7.6M', timeAgo: '2 months ago', duration: '31:39', channel: 'GameMaster' },
        { id: 3, title: 'I got a cat.', image: new1, category: 'Vlog', views: '19M', timeAgo: '4 months ago', duration: '16:09', channel: 'LifeUpdates' },
        { id: 4, title: 'They put me in a video game...', image: new2, category: 'Gaming', views: '3.8M', timeAgo: '5 months ago', duration: '5:02', channel: 'GamerLife' }
    ]);
    
    const navigate = useNavigate();
    const handleNavigate = (title: string, category: string) => {
        navigate(`/adPage/${title}/${category}`);
    };
    
    const [activeCategory, setActiveCategory] = useState('All');
    
    const [searchQuery, setSearchQuery] = useState('');

    const filteredVideos = videos.filter(video => 
        (activeCategory === 'All' || video.category === activeCategory) &&
        (searchQuery === '' || video.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <Box 
            sx={{ 
                bgcolor: '#fff', 
                minHeight: '100vh', 
                width: '100%', 
                maxWidth: '100%',
                color: 'black', 
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                overflow: 'hidden'
            }}
        >
            {/* YouTube Header */}
            <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: 'black', width: '100%' }}>
                <Container maxWidth={false} sx={{ width: '100%' }}>
                    <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
                        {/* Left section with logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton edge="start" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black', display: 'flex', alignItems: 'center' }}>
                                    <Box component="span" sx={{ bgcolor: 'red', color: 'white', py: 0.5, px: 1, borderRadius: 1, mr: 1, fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        ▶
                                    </Box>
                                    Premium
                                </Typography>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Main content area */}
            <Box sx={{ display: 'flex' }}>
              

                {/* Main content */}
                <Box sx={{ 
                    flexGrow: 1, 
                    p: 3, 
                    height: 'calc(100vh - 64px)', 
                    overflow: 'auto' 
                }}>
                

                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Videos
                    </Typography>

                    {/* Videos grid */}
                    <Grid container spacing={2}>
                        {filteredVideos.map((video) => (
                            <Grid item xs={12} sm={6} md={3} key={video.id}>
                                <Box 
                                    sx={{ 
                                        position: 'relative', 
                                        borderRadius: 2, 
                                        overflow: 'hidden', 
                                        cursor: 'pointer',
                                        '&:hover': { 
                                            '& .play-button': { opacity: 1 } 
                                        }, 
                                    }}
                                    onClick={() => handleNavigate(video.title, video.category)}
                                >
                                    <img 
                                        src={video.image} 
                                        alt={video.title} 
                                        style={{ width: '100%', height: 180, objectFit: 'cover' }} 
                                    />
                                    <Box 
                                        sx={{ 
                                            position: 'absolute', 
                                            bottom: 8, 
                                            right: 8, 
                                            bgcolor: 'rgba(0,0,0,0.8)', 
                                            color: 'white',
                                            px: 0.5,
                                            py: 0.2,
                                            borderRadius: 0.5,
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        {video.duration}
                                    </Box>
                                    <Box 
                                        className="play-button" 
                                        sx={{ 
                                            position: 'absolute', 
                                            top: 0, 
                                            left: 0, 
                                            right: 0, 
                                            bottom: 0, 
                                            bgcolor: 'rgba(0,0,0,0.2)', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            opacity: 0, 
                                            transition: 'opacity 0.2s' 
                                        }}
                                    >
                                        <PlayArrowIcon sx={{ fontSize: 50, color: 'white' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', mt: 1 }}>
                                    <Box 
                                        sx={{ 
                                            width: 36, 
                                            height: 36, 
                                            borderRadius: '50%', 
                                            bgcolor: video.id % 2 === 0 ? '#6495ED' : '#FF7F50',
                                            mr: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            flexShrink: 0
                                        }}
                                    >
                                        {video.channel.charAt(0)}
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontWeight: 'medium', lineHeight: 1.2, mb: 0.5 }}>
                                            {video.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#606060', lineHeight: 1.2 }}>
                                            {video.channel}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#606060', fontSize: '0.8rem' }}>
                                            {video.views} views • {video.timeAgo}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ ml: 'auto' }}>
                                        <IconButton size="small">
                                            <Box sx={{ fontSize: '1.5rem', lineHeight: 1, fontWeight: 'bold' }}>⋮</Box>
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default YouTube;