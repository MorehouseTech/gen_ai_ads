import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const AIinfo = () => {
    const { title, category } = useParams();
    
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h1" gutterBottom>
            AI Information
          </Typography>
          <Typography variant="h2">
            Passed value: {title}
          </Typography>
          <Typography variant="h2">
            Passed value: {category}
          </Typography>
        </Box>
      </Container>
    );
  };
  
  export default AIinfo;