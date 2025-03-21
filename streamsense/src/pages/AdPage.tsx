import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Avatar, Select, MenuItem, FormControl } from '@mui/material';
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
            const encodedTitle = encodeURIComponent(title);
            const encodedCategory = encodeURIComponent(category);
            const encodedCompany = encodeURIComponent(company);
            const encodedProduct = encodeURIComponent(product);
            navigate(`/AIinfo/${encodedTitle}/${encodedCategory}/${encodedCompany}/${encodedProduct}`);
        }
    };

    const handleProductChange = (company: string, value: string) => {
        setSelectedProducts(prev => ({
            ...prev,
            [company]: value
        }));
        if (title && category) {
            handleNavigate(title, category, company, value);
        }
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
            <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4, mt: 2 }}>Pick the company you want to see an ad for</Typography>
            <Box sx={{ bgcolor: '#141414', width: '100%', color: 'white', p: 4, borderRadius: 2 }}>
                <Grid container spacing={2}>
                    {Object.entries(companyProducts).map(([company, products]) => (
                        <Grid item xs={12} key={company}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'rgba(255,255,255,0.05)', p: 2, borderRadius: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                <Avatar src={logoMapping[company as keyof typeof logoMapping]} sx={{ width: 60, height: 60, bgcolor: 'white', '& img': { objectFit: 'contain', p: 1 } }} />
                                <FormControl fullWidth size="small" sx={{ bgcolor: 'white', borderRadius: 1 }}>
                                    <Select
                                        value={selectedProducts[company as keyof typeof selectedProducts]}
                                        onChange={(e) => handleProductChange(company, e.target.value)}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>Select {company} Product</MenuItem>
                                        {products.map((product) => (
                                            <MenuItem key={product} value={product}>{product}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default AdPage;