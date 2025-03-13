import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Box, Button, Stack, Avatar } from '@mui/material';
import nflLogo from '../assets/newAssets/5th-NFL-logo.png';
import bbyLogo from '../assets/newAssets/636596669293144926-BBY-on-blue-1 copy.png';
import amazonLogo from '../assets/newAssets/Amazon-Emblema.png';
import ciscoLogo from '../assets/newAssets/Cisco-Emblem.png';
import ebayLogo from '../assets/newAssets/EBay_logo_01.png';
import homeDepotLogo from '../assets/newAssets/Home-Depot-Logo-Transparent-Background.png';
import thriventLogo from '../assets/newAssets/Thrivent-Financial-old.webp';
import dellLogo from '../assets/newAssets/dell-logo-transparent-free-png.webp';
import hebLogo from '../assets/newAssets/png-transparent-red-logo-heb-mexico-grocery-store-industrial-design-text-line-area-thumbnail.png';

const AdPage = () => {
  
    const { title, category } = useParams();
    const navigate = useNavigate();
    const handleNavigate = (title: string, category: string, company: string) => {
      navigate(`/AIinfo/${title}/${category}/${company}`);
  };
    return (
        <Container maxWidth="md">
            <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: 'wrap', gap: 2 }}>
                <Avatar src={nflLogo} onClick={() => handleNavigate(title, category, "NFL")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
                <Avatar src={bbyLogo} onClick={() => handleNavigate(title, category, "Best Buy")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
                <Avatar src={amazonLogo} onClick={() => handleNavigate(title, category, "Amazon")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
                <Avatar src={ciscoLogo} onClick={() => handleNavigate(title, category, "Cisco")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
                <Avatar src={ebayLogo} onClick={() => handleNavigate(title, category, "Ebay")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
                <Avatar src={homeDepotLogo} onClick={() => handleNavigate(title, category, "Home Depot")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
                <Avatar src={thriventLogo} onClick={() => handleNavigate(title, category, "Thrivent")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
                <Avatar src={dellLogo} onClick={() => handleNavigate(title, category, "Dell")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
                <Avatar src={hebLogo} onClick={() => handleNavigate(title, category, "HEB")} sx={{ width: 56, height: 56, cursor: 'pointer' }}/>
            </Stack>
        </Container>
    );
};

export default AdPage;