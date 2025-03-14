import { Container, Box, Typography, keyframes } from '@mui/material'
import { Link } from 'react-router-dom';

import netflixLogo from '../assets/Netflix-Logo.png'
import { useState } from 'react';
import HuluLogo from '../assets/Hulu-Logo.png'
import PrimeVideoLogo from '../assets/Amazon-Logo.png'



const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Home = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const platforms = [
        {
            id: 1,
            name: 'Netflix',
            route: '/Netflix',
            logo: netflixLogo,
            color: '#E50914'
        },
        {
            id: 2, 
            name: 'Hulu',
            route: '/Hulu/home',
            logo: HuluLogo,
            color: '#1CE783'
        },
        {
            id: 3, 
            name: 'Youtube',
            route: '/Youtube',
            logo: 'https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg',
            color: '#FF0000'
        },
        {
            id: 4, 
            name: 'Amazon Prime',
            route: '/AmazonPrime',
            logo: PrimeVideoLogo,
            color: '#00A8E1'
        }
    ];

    // Function to determine if a platform should be animated based on the hovered platform
    const getAnimationDelay = (id: number) => {
        if (hoveredId === null) return 0;
        const distance = Math.abs(id - hoveredId);
        return distance * 0.1; // delay based on distance from hovered item
    };

    return (
        <Box 
            sx={{
                bgcolor: '#121212',
                minHeight: '100vh',
                width: '100%',
                maxWidth: '100%',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
                color: 'white',
                overflow: 'hidden'
            }}
        >
            <Container 
                maxWidth={false} 
                disableGutters 
                sx={{ 
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#121212',
                    color: 'white',
                    px: { xs: 2, sm: 4 }
                }}
            >
            <Typography 
                variant="h2" 
                sx={{ 
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    mb: 6,
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}
            >
                Choose Your Streaming Platform
            </Typography>
            
            <Box 
                sx={{ 
                    display: 'flex',
                    width: '100%',
                    height: { xs: 'auto', md: '60vh' },
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'stretch',
                }}
            >
                {platforms.map((platform) => (
                    <Box 
                        key={platform.id}
                        onMouseEnter={() => setHoveredId(platform.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        component={Link}
                        to={platform.route}
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            transition: 'all 0.5s ease',
                            bgcolor: 'rgba(20, 20, 20, 0.8)',
                            textDecoration: 'none',
                            color: 'white',
                            overflow: 'hidden',
                            height: { xs: '150px', md: 'auto' },
                            my: { xs: 1, md: 0 },
                            mx: { xs: 0, md: 1 },
                            borderRadius: 2,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            animation: hoveredId !== null ? 
                                `${waveAnimation} 1.5s ease-in-out ${getAnimationDelay(platform.id)}s infinite` : 'none',
                            '&:hover': {
                                transform: 'translateY(-20px) scale(1.03)',
                                zIndex: 1,
                                boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${platform.color}40`,
                                '&::before': {
                                    opacity: 0.8
                                }
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(to bottom, ${platform.color}10, ${platform.color}80)`,
                                opacity: 0,
                                transition: 'opacity 0.5s ease'
                            }
                        }}
                    >
                        <Box 
                            sx={{
                                width: { xs: 60, md: 100 },
                                height: { xs: 60, md: 100 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                bgcolor: 'white',
                                p: 1,
                                mb: 2,
                                zIndex: 1,
                                transition: 'transform 0.3s ease',
                                transform: hoveredId === platform.id ? 'scale(1.2)' : 'scale(1)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                            }}
                        >
                            <img 
                                src={platform.logo} 
                                alt={`${platform.name} logo`}
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                fontWeight: 'bold', 
                                textAlign: 'center',
                                zIndex: 1,
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                transition: 'transform 0.3s ease',
                                transform: hoveredId === platform.id ? 'scale(1.1)' : 'scale(1)'
                            }}
                        >
                            {platform.name}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                mt: 1, 
                                opacity: 0.8,
                                zIndex: 1,
                                textAlign: 'center',
                                px: 2,
                                display: { xs: 'none', md: 'block' }
                            }}
                        >
                            Explore {platform.name} content
                        </Typography>
                    </Box>
                ))}
            </Box>
            </Container>
        </Box>
    );
};

export default Home;
