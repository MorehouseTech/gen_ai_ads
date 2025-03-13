import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Typography, Button, Box, IconButton, Container, Grid, AppBar, Toolbar, TextField, InputAdornment } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import gardenImage from '../assets/newAssets/Screen Shot 2025-03-13 at 2.03.34 PM.png';
import bathroomImage from '../assets/newAssets/Screen Shot 2025-03-13 at 2.03.57 PM.png';
import Hulu from './AIinfo';

const YouTube = () => {
    const [videos, setVideos] = useState([
        { id: 1, title: 'I went to the Pokemon Cafe!', image: gardenImage, category: 'Entertainment', views: '2.8M', timeAgo: '13 days ago', duration: '7:41', channel: 'PokemonFan' },
        { id: 2, title: 'I played Pokemon, but with 50+ New Types', image: bathroomImage, category: 'Gaming', views: '7.6M', timeAgo: '2 months ago', duration: '31:39', channel: 'GameMaster' },
        { id: 3, title: 'I got a cat.', image: gardenImage, category: 'Vlog', views: '19M', timeAgo: '4 months ago', duration: '16:09', channel: 'LifeUpdates' },
        { id: 4, title: 'They put me in a video game...', image: bathroomImage, category: 'Gaming', views: '3.8M', timeAgo: '5 months ago', duration: '5:02', channel: 'GamerLife' }
    ]);
    
    const navigate = useNavigate();
    const handleNavigate = (title, category) => {
        navigate(`/adPage/${title}/${category}`);
    };
    
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Gaming', 'Entertainment', 'Vlog'];
    const menuItems = ['Home', 'Shorts', 'Subscriptions', 'YouTube Music'];
    const secondaryMenuItems = ['History', 'Playlists', 'Your videos'];
    const mainNavItems = ['Home', 'Videos', 'Shorts', 'Live', 'Playlists', 'Posts', 'Store'];
    
    const [searchQuery, setSearchQuery] = useState('');

    const filteredVideos = videos.filter(video => 
        (activeCategory === 'All' || video.category === activeCategory) &&
        (searchQuery === '' || video.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh', width: '100vw', color: 'black', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            {/* YouTube Header */}
            <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: 'black' }}>
                <Container maxWidth="xl">
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

                        {/* Right section with icons */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton>
                                <VideoCallIcon />
                            </IconButton>
                            <Button variant="contained" startIcon={<VideoCallIcon />}sx={{ mx: 2, 
                                    textTransform: 'none',
                                    bgcolor: 'white',
                                    color: 'black',
                                    boxShadow: 'none',
                                    border: '1px solid #ccc',
                                    '&:hover': { bgcolor: '#f2f2f2', boxShadow: 'none' }
                                }}
                            >
                                Create
                            </Button>
                            <IconButton sx={{ position: 'relative' }}>
                                <NotificationsIcon />
                                <Box sx={{ 
                                    position: 'absolute', 
                                    top: 4, 
                                    right: 4, 
                                    bgcolor: 'red', 
                                    color: 'white', 
                                    borderRadius: '50%', 
                                    width: 18, 
                                    height: 18,
                                    fontSize: '0.7rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    9+
                                </Box>
                            </IconButton>
                            <Box sx={{ 
                                width: 32, 
                                height: 32, 
                                borderRadius: '50%', 
                                bgcolor: '#6495ED',
                                ml: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                A
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Main content area */}
            <Box sx={{ display: 'flex' }}>
                {/* Left sidebar */}
                <Box sx={{ 
                    width: 240, 
                    bgcolor: 'white', 
                    borderRight: '1px solid #e0e0e0',
                    height: 'calc(100vh - 64px)',
                    overflow: 'auto',
                    py: 1
                }}>
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            startIcon={
                                index === 0 ? <HomeIcon /> : 
                                index === 1 ? <ExploreIcon /> : 
                                index === 2 ? <SubscriptionsIcon /> : 
                                <VideoLibraryIcon />
                            }
                            sx={{ 
                                py: 1, 
                                px: 2, 
                                justifyContent: 'flex-start', 
                                color: 'black',
                                width: '100%',
                                textTransform: 'none',
                                borderRadius: 0,
                                '&:hover': { bgcolor: '#f2f2f2' }
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                    
                    <Box sx={{ my: 2, borderBottom: '1px solid #e0e0e0' }}></Box>
                    
                    <Typography variant="subtitle2" sx={{ px: 3, py: 1, fontWeight: 'bold' }}>
                        You
                    </Typography>
                    
                    {secondaryMenuItems.map((item, index) => (
                        <Button
                            key={index}
                            startIcon={
                                index === 0 ? <HistoryIcon /> : 
                                index === 1 ? <PlaylistPlayIcon /> : 
                                <VideoLibraryIcon />
                            }
                            sx={{ 
                                py: 1, 
                                px: 2, 
                                justifyContent: 'flex-start', 
                                color: 'black',
                                width: '100%',
                                textTransform: 'none',
                                borderRadius: 0,
                                '&:hover': { bgcolor: '#f2f2f2' }
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>

                {/* Main content */}
                <Box sx={{ 
                    flexGrow: 1, 
                    p: 3, 
                    height: 'calc(100vh - 64px)', 
                    overflow: 'auto' 
                }}>
                    {/* Nav tabs */}
                    <Box sx={{ 
                        display: 'flex', 
                        borderBottom: '1px solid #e0e0e0',
                        pb: 1,
                        mb: 2
                    }}>
                        {mainNavItems.map((item, index) => (
                            <Button
                                key={index}
                                sx={{ 
                                    mx: 1, 
                                    color: index === 0 ? 'black' : '#606060',
                                    fontWeight: index === 0 ? 'bold' : 'normal',
                                    textTransform: 'none',
                                    minWidth: 'auto',
                                    borderBottom: index === 0 ? '3px solid black' : 'none',
                                    borderRadius: 0,
                                    pb: 1
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Box>

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