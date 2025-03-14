import { useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react'


const AIinfo = () => {
    const { title, category, company, product } = useParams();
    var [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function fetchData() {
        try {
            setLoading(true);
            setError("");
            console.log('Sending request with data:', { title, category, company, product });
            // const response = await fetch("https://feec-35-227-16-215.ngrok-free.app/generate", {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    media: title,
                    media_co: category,
                    company: company,
                    product: product
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "ngrok-skip-browser-warning": "true"
                },
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Received response:', data);
            setImage(data);
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                    <Typography variant="subtitle2" gutterBottom>Debug Info:</Typography>
                    <Typography variant="body2">Title: {title || 'missing'}</Typography>
                    <Typography variant="body2">Category: {category || 'missing'}</Typography>
                    <Typography variant="body2">Company: {company || 'missing'}</Typography>
                    <Typography variant="body2">Product: {product || 'missing'}</Typography>
                </Box>

                <Button 
                    variant="contained" 
                    onClick={fetchData}
                    disabled={loading || !title || !category || !company || !product}
                >
                    {loading ? 'Generating...' : 'Generate Ad'}
                </Button>

                {loading && (
                    <Typography>Loading...</Typography>
                )}

                {error && (
                    <Typography color="error">
                        Error: {error}
                    </Typography>
                )}

                {image && (
                    <Box>
                        <Typography variant="h6" gutterBottom>Generated Content:</Typography>
                        <Box sx={{ 
                            bgcolor: '#f5f5f5', 
                            p: 2, 
                            borderRadius: 1,
                            whiteSpace: 'pre-wrap'
                        }}>
                            {typeof image === 'object' ? JSON.stringify(image, null, 2) : image}
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default AIinfo;