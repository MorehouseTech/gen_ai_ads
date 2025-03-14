import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Box, Button, Stack, Avatar, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
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
    const [selectedProducts, setSelectedProducts] = useState({
        NFL: '',
        BestBuy: '',
        Amazon: '',
        Cisco: '',
        Ebay: '',
        HomeDepot: '',
        Thrivent: '',
        Dell: '',
        HEB: ''
    });

    const logoMapping = {
        NFL: nflLogo,
        BestBuy: bbyLogo,
        Amazon: amazonLogo,
        Cisco: ciscoLogo,
        Ebay: ebayLogo,
        HomeDepot: homeDepotLogo,
        Thrivent: thriventLogo,
        Dell: dellLogo,
        HEB: hebLogo
    };

    const handleNavigate = (title: string | undefined, category: string | undefined, company: string, product: string) => {
        if (title && category) {
            navigate(`/AIinfo/${title}/${category}/${company}/${product}`);
        }
    };

    const handleProductChange = (company: string, value: string) => {
        setSelectedProducts(prev => ({
            ...prev,
            [company]: value
        }));
    };

    const companyProducts = {
        NFL: ['Tickets', 'Merchandise', 'Game Pass'],
        BestBuy: ['Electronics', 'Appliances', 'Gaming'],
        Amazon: ['Prime', 'Electronics', 'Books'],
        Cisco: ['Networking', 'Security', 'Cloud'],
        Ebay: ['Auctions', 'Buy Now', 'Deals'],
        HomeDepot: ['Tools', 'Garden', 'Home Improvement'],
        Thrivent: ['Insurance', 'Investment', 'Banking'],
        Dell: ['Laptops', 'Desktops', 'Servers'],
        HEB: ['Groceries', 'Pharmacy', 'Curbside']
    };

    return (
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ bgcolor: '#141414', minHeight: '50vh', width: '100%', color: 'white', mb: 2, p: 4 }}>
                <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 4, display: 'flex', justifyContent: 'center' }}>
                    {Object.entries(companyProducts).map(([company, products]) => (
                        <Box key={company} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <Avatar 
                                src={logoMapping[company as keyof typeof logoMapping]} 
                                sx={{ 
                                    width: 80, 
                                    height: 80, 
                                    cursor: 'pointer', 
                                    bgcolor: 'white', 
                                    '& img': { 
                                        objectFit: 'contain', 
                                        p: 1 
                                    } 
                                }} 
                            />
                            <FormControl size="small" sx={{ minWidth: 120, bgcolor: 'white', borderRadius: 1 }}>
                                <Select
                                    value={selectedProducts[company as keyof typeof selectedProducts]}
                                    onChange={(e) => {
                                        handleProductChange(company, e.target.value);
                                        handleNavigate(title, category, company, e.target.value);
                                    }}
                                    displayEmpty
                                >
                                    <MenuItem value="" disabled>Select {company}</MenuItem>
                                    {products.map((product) => (
                                        <MenuItem key={product} value={product}>{product}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    ))}
                </Stack>
            </Box>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Pick the company you want to see an ad for</Typography>
        </Container>
    );
};

export default AdPage;