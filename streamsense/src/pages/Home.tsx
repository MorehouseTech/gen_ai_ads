import { Container, Box, Avatar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import huluLogo from '../assets/hulu.svg';
import netflixLogo from '../assets/download.jpg'

const Home = () => {
    const platforms = [
        {
            id: 1,
            name: 'Netflix',
            route: '/Netflix',
            logo: netflixLogo
        },
        {
            id: 2, 
            name: 'Hulu',
            route: '/Hulu/home',
            logo: huluLogo
        },
        {
            id: 3, 
            name: 'Youtube',
            route: '/Youtube',
            logo: 'https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg'
        },
        {
            id: 4, 
            name: 'Amazon Prime',
            route: '/AmazonPrime',
            logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg'
        }
    ]

    return (
        <Container maxWidth="md" sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h3" align="center" gutterBottom>
                Choose a Platform
            </Typography>
            
            <Box 
                sx={{ 
                    mt: 5,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '800px'
                }}
            >
                {platforms.map((platform) => (
                    <Box 
                        key={platform.id}
                        sx={{
                            width: { xs: '40%', sm: '25%', md: '25%' },
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 5,
                            px: 2
                        }}
                    >
                        <Box
                            component={Link}
                            to={platform.route}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                }
                            }}
                        >
                            <Avatar
                                src={platform.logo}
                                alt={`${platform.name} logo`}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    mb: 2,
                                    boxShadow: 3,
                                    bgcolor: 'white',
                                    p: 1
                                }}
                            />
                            <Typography variant="subtitle1" align="center" fontWeight="medium">
                                {platform.name}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default Home;
