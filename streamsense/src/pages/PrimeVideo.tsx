import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button, 
  Tab, 
  Tabs, 
  Card, 
  CardMedia, 
  CardContent,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import LockIcon from '@mui/icons-material/Lock';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AmazonLogo from '../assets/Amazon-Logo.png';
import CloseIcon from '@mui/icons-material/Close';

const PrimeVideo = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [showMasthead, setShowMasthead] = useState(true);
  
  // Function to navigate to the ad page when clicking on a show
  const handleNavigate = (title: string, category: string) => {
    navigate(`/adPage/${title}/${category}`);
  };

  // Sample data
  const featuredContent = {
    title: 'DARK WINDS',
    description: 'Season 3 • Leaphorn and Chee investigate a disappearance while Manuelito uncovers a mystery on the border.',
    imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/598f0978830fc82f5b90201a5eb16f32e0fe9f71e4ef24ca4e9ccc0c4b896a00._UR1920,1080_SX720_FMjpg_.jpg',
    channel: 'AMC+',
    rating: 'TV-14',
    newEpisode: 'New episode Sunday',
    category: 'Drama'
  };

  const mastheadShow = {
    title: 'THE BOYS',
    description: "Season 4 • The world is on the brink. Victoria Neuman is closer than ever to the Oval Office and under Homelander's thumb. Butcher, with only months to live, has lost Becca's son and his job as The Boys' leader.",
    imageUrl: 'https://m.media-amazon.com/images/S/pv-target-images/d0608779ce9da50fe7aa269e02c7c442344a5f6450b3b4dd2059765704cba3d2._UR1920,1080_SX720_FMjpg_.jpg',
    releaseDate: 'New episodes every Thursday',
    category: 'Action',
    rating: 'TV-MA'
  };

  const recommendedShows = [
    { id: 1, title: 'Invincible', imageUrl: reactLogo, category: 'Animation' },
    { id: 2, title: 'Secret Level', imageUrl: reactLogo, category: 'Sci-Fi' },
    { id: 3, title: 'JoJo\'s Bizarre Adventure', imageUrl: reactLogo, category: 'Anime' },
    { id: 4, title: 'The Legend of Vox Machina', imageUrl: reactLogo, category: 'Fantasy' },
    { id: 5, title: 'Fallout', imageUrl: reactLogo, category: 'Action' }
  ];

  const seriesSpotlight = [
    { id: 1, title: 'Reacher', imageUrl: reactLogo, category: 'Action' },
    { id: 2, title: 'Wallace & Gromit', imageUrl: reactLogo, category: 'Animation' },
    { id: 3, title: 'American Gods', imageUrl: reactLogo, category: 'Fantasy' },
    { id: 4, title: 'Spongebob Squarepants', imageUrl: reactLogo, category: 'Kids' },
    { id: 5, title: 'The Rings of Power', imageUrl: reactLogo, category: 'Fantasy' }
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const ContentCarousel = ({ title, items }: { title: string, items: any[] }) => (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#fff' }}>
        {title}
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ 
          display: 'flex', 
          overflowX: 'auto', 
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          pb: 2
        }}>
          {items.map((item) => (
            <Card 
              key={item.id} 
              sx={{ 
                minWidth: 240, 
                maxWidth: 240, 
                mr: 1.5, 
                bgcolor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                borderRadius: 1,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease',
                  '& .play-overlay': {
                    opacity: 1
                  }
                }
              }}
              onClick={() => handleNavigate(item.title, item.category)}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.imageUrl}
                alt={item.title}
                sx={{ borderRadius: 1 }}
              />
              {/* Play button overlay */}
              <Box 
                className="play-overlay"
                sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.4)',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}
              >
                <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}>
                  <PlayArrowIcon />
                </IconButton>
              </Box>
              <CardContent sx={{ p: 1, pb: 0 }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ color: '#aaa' }}>
                  {item.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#777', display: 'block' }}>
                  {item.category}
                </Typography>
              </CardContent>
              <Box sx={{ 
                position: 'absolute', 
                bottom: 5, 
                right: 5, 
                bgcolor: 'rgba(0,0,0,0.5)', 
                borderRadius: '2px',
                px: 0.5
              }}>
                <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.7rem' }}>
                  prime
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
        <IconButton 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            right: 0, 
            transform: 'translateY(-50%)', 
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box 
      sx={{ 
        bgcolor: '#0F171E', 
        minHeight: '100vh', 
        width: '100%',
        maxWidth: '100%',
        color: 'white', 
        overflow: 'hidden',
        boxSizing: 'border-box',
        m: 0,
        p: 0
      }}
    >
      {/* Top Navigation Bar */}
      <AppBar position="static" sx={{ bgcolor: '#1A242F', boxShadow: 'none', px: 2, width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                fontWeight: 'bold', 
                fontSize: '1.5rem',
                color: '#00A8E1',
                display: 'flex',
                alignItems: 'center'
              }}
            >  
                <Box component="img" src={AmazonLogo} alt="amazon logo" sx={{height: 30}}/>
            </Typography>
          </Box>
          <Box>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Secondary Navigation */}
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="scrollable"
          scrollButtons="auto"
          sx={{ 
            minHeight: '48px', 
            '& .MuiTab-root': { 
              color: '#ffffff80', 
              textTransform: 'none',
              minHeight: '48px',
              fontSize: '0.9rem',
              minWidth: 'auto',
              px: 2
            },
            '& .Mui-selected': { 
              color: '#fff !important' 
            },
            '& .MuiTabs-indicator': { 
              backgroundColor: '#fff' 
            }
          }}
        >
          <Tab label="Home" />
          <Tab label="Movies" />
          <Tab label="TV shows" />
          <Tab label="Sports" />
          <Tab label="Live TV" />
        </Tabs>
      </AppBar>

      {/* Masthead TV Show Preview */}
      {showMasthead && (
        <Paper 
          elevation={0}
          sx={{ 
            bgcolor: '#111111', 
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 0,
            width: '100%'
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${mastheadShow.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, rgba(17,17,17,1) 0%, rgba(17,17,17,0.8) 50%, rgba(17,17,17,0.6) 100%)',
              },
              zIndex: 0
            }}
          />
          
          <Container 
            maxWidth={false} 
            sx={{ 
              position: 'relative', 
              zIndex: 2,
              px: { xs: 2, sm: 3, md: 4 },
              width: '100%'
            }}
          >
            <Box 
              sx={{ 
                py: 4, 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, mb: { xs: 2, md: 0 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography 
                    variant="body2" 
                    component="span" 
                    sx={{ 
                      color: '#00A8E1', 
                      fontWeight: 'bold', 
                      bgcolor: 'rgba(0,168,225,0.1)', 
                      px: 1, 
                      py: 0.5, 
                      borderRadius: 1,
                      mr: 2
                    }}
                  >
                    AMAZON ORIGINAL
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#aaa' }}>
                    {mastheadShow.releaseDate}
                  </Typography>
                </Box>
                
                <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {mastheadShow.title}
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', maxWidth: 600, opacity: 0.9 }}>
                  {mastheadShow.description}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Button 
                    variant="contained" 
                    startIcon={<PlayArrowIcon />}
                    sx={{ 
                      bgcolor: '#00A8E1', 
                      color: 'white',
                      px: 3,
                      py: 1,
                      fontSize: '1rem',
                      '&:hover': { bgcolor: '#0295c8' }
                    }}
                    onClick={() => handleNavigate(mastheadShow.title, mastheadShow.category)}
                  >
                    Watch Now
                  </Button>
                  
                  <Button 
                    variant="outlined" 
                    sx={{ 
                      borderColor: 'rgba(255,255,255,0.3)', 
                      color: 'white',
                      px: 3,
                      '&:hover': { 
                        borderColor: 'rgba(255,255,255,0.6)',
                        bgcolor: 'rgba(255,255,255,0.05)'
                      }
                    }}
                    onClick={() => handleNavigate(mastheadShow.title, mastheadShow.category)}
                  >
                    Details
                  </Button>
                  
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      ml: 1, 
                      bgcolor: 'rgba(0,0,0,0.4)', 
                      px: 1, 
                      py: 0.5, 
                      borderRadius: 0.5 
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#ddd' }}>
                      {mastheadShow.rating}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
          
          {/* Close button */}
          <IconButton 
            size="small" 
            sx={{ 
              position: 'absolute', 
              top: 10, 
              right: 10, 
              bgcolor: 'rgba(0,0,0,0.5)', 
              color: 'white',
              zIndex: 3,
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
            }}
            onClick={() => setShowMasthead(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Paper>
      )}

      {/* Main Content */}
      <Box sx={{ p: 0, width: '100%' }}>
        {/* Featured Content Banner */}
        <Box 
          sx={{ 
            position: 'relative', 
            height: { xs: '350px', md: '500px' }, 
            background: `linear-gradient(to right, rgba(15, 23, 30, 1) 0%, rgba(15, 23, 30, 0.7) 35%, rgba(15, 23, 30, 0) 50%, rgba(15, 23, 30, 0) 100%), url(${featuredContent.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            display: 'flex',
            alignItems: 'center',
            px: 4,
            width: '100%'
          }}
        >
          <Box sx={{ maxWidth: '500px', zIndex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" color="#00aeef" fontWeight="bold" sx={{ mr: 1 }}>
                {featuredContent.channel}
              </Typography>
              <Typography variant="caption" color="#aaa">
                {featuredContent.newEpisode}
              </Typography>
            </Box>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#FF6F00' }}>
              {featuredContent.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: 450 }}>
              {featuredContent.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#333', 
                  color: 'white', 
                  '&:hover': { bgcolor: '#444' }, 
                  borderRadius: 1,
                  textTransform: 'none',
                  fontWeight: 'normal'
                }}
                onClick={() => handleNavigate(featuredContent.title, featuredContent.category)}
              >
                Watch Now
              </Button>
              <IconButton sx={{ bgcolor: '#333', color: 'white', '&:hover': { bgcolor: '#444' } }}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <LockIcon sx={{ fontSize: '0.9rem', color: '#aaa', mr: 0.5 }} />
              <Typography variant="caption" color="#aaa">
                Free trial of {featuredContent.channel}
              </Typography>
              <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                <Typography variant="caption" sx={{ bgcolor: '#333', px: 1, py: 0.2, borderRadius: 0.5 }}>
                  {featuredContent.rating}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Carousel Navigation Dots */}
          <Box sx={{ 
            position: 'absolute', 
            bottom: 20, 
            left: '50%', 
            transform: 'translateX(-50%)', 
            display: 'flex', 
            gap: 1 
          }}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Box 
                key={index} 
                sx={{ 
                  width: index === 2 ? '24px' : '8px', 
                  height: '8px', 
                  bgcolor: index === 2 ? 'white' : 'rgba(255,255,255,0.3)', 
                  borderRadius: '4px'
                }} 
              />
            ))}
          </Box>

          {/* Carousel Navigation Arrows */}
          <IconButton 
            sx={{ 
              position: 'absolute', 
              left: 20, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton 
            sx={{ 
              position: 'absolute', 
              right: 20, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Content Sections */}
        <Container 
          maxWidth={false} 
          sx={{ 
            pb: 5, 
            px: { xs: 2, sm: 3, md: 4 },
            width: '100%',
            bgcolor: '#0F171E'
          }}
        >
          <ContentCarousel title="Discover your next TV fave" items={recommendedShows} />
          <ContentCarousel title="Series spotlight" items={seriesSpotlight} />
        </Container>
      </Box>
    </Box>
  );
};

export default PrimeVideo;

