import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { keyframes } from '@mui/material/styles';
import huluLogo from '../assets/Hulu-Logo.png';
import { Box, Container, Typography, AppBar, Toolbar, Grid, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// Import background image using URL constructor for more reliable path resolution
const backgroundImage = new URL('../assets/Hulu-Background.jpg', import.meta.url).href;

const h1 = new URL('../assets/hulu-images/h1.jpg', import.meta.url).href;
const h2 = new URL('../assets/hulu-images/h2.jpg', import.meta.url).href;
const h3 = new URL('../assets/hulu-images/h3.jpg', import.meta.url).href;
const h4 = new URL('../assets/hulu-images/h4.jpg', import.meta.url).href;
const h5 = new URL('../assets/hulu-images/h5.jpg', import.meta.url).href;
const h6 = new URL('../assets/hulu-images/h6.jpg', import.meta.url).href; 
const h7 = new URL('../assets/hulu-images/h7.jpg', import.meta.url).href;
const h8 = new URL('../assets/hulu-images/h8.jpg', import.meta.url).href;

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
    
    // Use the background image URL directly
    const backgroundImageUrl = backgroundImage;
    
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
    { id: 1, title: "The Handmaid's Tale", image: h1, description: "Based on Margaret Atwood's novel, this award-winning dystopian drama has been a flagship Hulu Original since 2017.", category: 'Drama', releaseYear: 2017 },
    { id: 2, title: "Marvel's Runaways", image: h2, description: "A group of teens discover their parents belong to a criminal organization with dark secrets. It's a teen-focused Marvel series that ran for three seasons.", category: 'Sci-fi', releaseYear: 2017 },
    { id: 3, title: "Future Man", image: h3, description: "A sci-fi comedy about a janitor (Josh Hutcherson) recruited by time travelers to save the world. Executive-produced by Seth Rogen and Evan Goldberg.", category: 'Comedy', releaseYear: 2017 },
    { id: 4, title: "Castle Rock", image: h4, description: "A psychological horror anthology series set in the Stephen King multiverse, weaving together elements of his classic stories and settings.", category: 'Horror', releaseYear: 2018 },
    { id: 5, title: "The Mindy Project", image: h5, description: "Created by and starring Mindy Kaling, this comedic series about an OB/GYN juggling her personal and professional life originally premiered on Fox before moving to Hulu.", category: 'Comedy', releaseYear: 2012 },
    { id: 6, title: "Brooklyn Nine-Nine", image: h6, description: "The beloved police comedy with ensemble cast led by Andy Samberg. Hulu has carried many of its past seasons.", category: 'Comedy', releaseYear: 2013 },
    { id: 7, title: "Ramy", image: h7, description: "Starring and created by Ramy Youssef, this dramedy explores faith, family, and identity as a first-generation Egyptian American living in New Jersey.", category: 'Drama', releaseYear: 2019 },
    { id: 8, title: "Veronica Mars", image: h8, description: "The cult-favorite teen detective series starring Kristen Bell. Hulu revived it for a fourth season in 2019, and it continues to host the earlier seasons as well.", category: 'Mystery', releaseYear: 2004 },
  ];

  // Filter out movies made after 2020
  const filteredMovies = movies.filter(movie => movie.releaseYear <= 2020);

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
          {filteredMovies.map((movie) => (
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