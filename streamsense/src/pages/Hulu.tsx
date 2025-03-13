import { useParams } from 'react-router-dom';
import huluLogo from '../assets/hululogo.png';
import { Box, Container, Typography, AppBar, Toolbar, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import reactlogo from '../assets/react.svg';

const Hulu = () => {
    const { passed } = useParams();
  
  const categories = [
    'Trending', 'Top Rated', 'Action', 'Comedy', 
    'Horror', 'Romance', 'Mystery', 'Sci-fi',
    'Western', 'Animation', 'TV Movie'
  ];
  
  const movies = [
    { id: 1, title: 'Lorem Ipsum Dolor', image: reactlogo, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod magna vel...' },
    { id: 2, title: 'Sit Amet Consectetur', image: reactlogo, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...' },
    { id: 3, title: 'Adipiscing Elit', image: reactlogo, description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu...' },
    { id: 4, title: 'Nullam Euismod Magna', image: reactlogo, description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...' },
    { id: 5, title: 'Tempor Incididunt', image: reactlogo, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...' },
    { id: 6, title: 'Ut Labore Et Dolore', image: reactlogo, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...' },
    { id: 7, title: 'Magna Aliqua', image: reactlogo, description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat...' },
    { id: 8, title: 'Quis Nostrud', image: reactlogo, description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt...' },
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
    <Container maxWidth="xl" sx={{ p: 0, bgcolor: '#0B0C0F', color: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: '#1E2126', boxShadow: 'none' }}>
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

      {/* Welcome message that uses the route parameter */}
      {passed && (
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h5">
            Welcome to Hulu {passed === 'home' ? 'Home' : passed}
          </Typography>
        </Box>
      )}

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
            <Box sx={{ 
              bgcolor: '#1E2126', 
              borderRadius: 1, 
              overflow: 'hidden',
              transition: 'transform 0.3s',
              '&:hover': { 
                transform: 'scale(1.03)',
                boxShadow: '0 0 15px rgba(0,0,0,0.3)'
              }
            }}>
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
              <Box sx={{ p: 2 }}>
                <Typography variant="body2" sx={{ color: '#ccc', mb: 1 }}>
                  {movie.description}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {movie.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    );
  };
  
  export default Hulu;