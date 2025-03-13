import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';



const AIinfo = () => {
    const { title, category, company } = useParams();
    
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>
            Title: {title || 'Untitled'}
          </Typography>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Category: {category || 'Uncategorized'}
          </Typography>
          {company && (
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Company: {company}
            </Typography>
          )}
          <Typography variant="body1">
            This is the AI information page for {title || 'this item'} in the {category || 'uncategorized'} category.
          </Typography>
        </Box>
      </Container>
    );
  };
  
  export default AIinfo;