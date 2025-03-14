import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { keyframes } from '@mui/material/styles';
import huluLogo from '../assets/Hulu-Logo.png';
import huluBackground from '../assets/Hulu-Background.jpg';
import { Box, Container, Typography, AppBar, Toolbar, Grid, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import reactlogo from '../assets/react.svg';

// Define a subtle zoom animation for the background
const subtleZoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Hulu = () => {
    const { passed } = useParams();
    const navigate = useNavigate();
    
    // Use a high-quality background image URL
    const backgroundImageUrl = "https://wallpapercave.com/wp/wp7634419.jpg"; // Hulu-themed dark background
    
    // Debug the background image loading
    useEffect(() => {
      console.log("Using background image URL:", backgroundImageUrl);
      
      // Create an image element to test loading
      const img = new Image();
      img.onload = () => console.log("Background image loaded successfully");
      img.onerror = () => console.error("Failed to load background image");
      img.src = backgroundImageUrl;
    }, []);
    
    // Function to navigate to the ad page when clicking on a movie
    const handleNavigate = (title: string, category: string) => {
        navigate(`/AdPage/${title}/${category}`);
    };
  
  const categories = [
    'Trending', 'Top Rated', 'Action', 'Comedy', 
    'Horror', 'Romance', 'Mystery', 'Sci-fi',
    'Western', 'Animation', 'TV Movie'
  ];
  
  const movies = [
    { id: 1, title: 'Lorem Ipsum Dolor', image: reactlogo, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vel...', category: 'Action' },
    { id: 2, title: 'Sit Amet Consectetur', image: reactlogo, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...', category: 'Comedy' },
    { id: 3, title: 'Adipiscing Elit', image: reactlogo, description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu...', category: 'Horror' },
    { id: 4, title: 'Nullam Euismod Magna', image: reactlogo, description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...', category: 'Romance' },
    { id: 5, title: 'Tempor Incididunt', image: reactlogo, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...', category: 'Mystery' },
    { id: 6, title: 'Ut Labore Et Dolore', image: reactlogo, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...', category: 'Sci-fi' },
    { id: 7, title: 'Magna Aliqua', image: reactlogo, description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat...', category: 'Western' },
    { id: 8, title: 'Quis Nostrud', image: reactlogo, description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...', category: 'Animation' },
  ];

  const headerIcons = [
    { icon: HomeIcon, label: 'Home', active: true },
    { icon: FlashOnIcon, label: 'Trending', active: false },
    { icon: LiveTvIcon, label: 'Verified', active: false },
    { icon: VideoLibraryIcon, label: 'Collections', active: false },
    { icon: SearchIcon, label: 'Search', active: false },
    { icon: PersonOutlineIcon, label: 'Account', active: false }
  ];

  return (
    <Box 
      sx={{ 
        color: 'white', 
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        // Fallback background color and gradient
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      {/* Full-screen background image */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          opacity: 1,
          animation: `${subtleZoom} 30s infinite ease-in-out`, // Slow, subtle zoom animation
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(11, 12, 15, 0.5)', // Even more reduced opacity
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)', // Add gradient overlay
            zIndex: -1,
          }
        }}
      />
      
      <Container 
        maxWidth={false} 
        sx={{ 
          p: { xs: 1, md: 2 }, 
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header */}
        <AppBar position="static" sx={{ 
          bgcolor: 'rgba(30, 33, 38, 0.5)', 
          backdropFilter: 'blur(10px)', // Add blur effect
          boxShadow: 'none' 
        }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              {headerIcons.map((item, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    opacity: item.active ? 1 : 0.7,
                    cursor: 'pointer',
                    '&:hover': { opacity: 1 }
                  }}
                >
                  <item.icon sx={{ mb: 0.5, fontSize: 24 }} />
                  <Typography variant="caption">{item.label}</Typography>
                </Box>
              ))}
            </Box>
            <Box component="img" src={huluLogo} alt="Hulu Logo" sx={{ height: 30 }} />
          </Toolbar>
        </AppBar>

        {/* Welcome message */}
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h5">
            Welcome to Hulu {passed ? (passed === 'home' ? 'Home' : passed) : 'Home'}
          </Typography>
        </Box>
        
        {/* Navigation Categories */}
        <Box sx={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: 2, 
          p: 2,
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 3 }
        }}>
          {categories.map((category, index) => (
            <Typography 
              key={index} 
              variant="subtitle1" 
              sx={{ 
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                opacity: 0.8,
                '&:hover': { opacity: 1 }
              }}
            >
              {category}
            </Typography>
          ))}
        </Box>

        {/* Movies Grid */}
        <Grid container spacing={2} sx={{ p: 2 }}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Box 
                sx={{ 
                  bgcolor: 'rgba(30, 33, 38, 0.7)', // More transparent background
                  borderRadius: 1, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  position: 'relative',
                  backdropFilter: 'blur(5px)', // Add blur effect for glass-like appearance
                  '&:hover': { 
                    transform: 'scale(1.03)',
                    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                    '& .play-button': { opacity: 1 }
                  }
                }}
                onClick={() => handleNavigate(movie.title, movie.category)}
              >
                <Box 
                  component="img" 
                  src={movie.image} 
                  alt={movie.title}
                  sx={{ 
                    width: '100%', 
                    height: 180, 
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x180?text=Movie';
                  }}
                />
                {/* Play button overlay that appears on hover */}
                <Box 
                  className="play-button"
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.3)',
                    opacity: 0,
                    transition: 'opacity 0.3s'
                  }}
                >
                  <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}>
                    <PlayArrowIcon />
                  </IconButton>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2" sx={{ color: '#ccc', mb: 1 }}>
                    {movie.description}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {movie.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#aaa', display: 'block', mt: 0.5 }}>
                    {movie.category}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hulu;