import { useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button,Paper } from '@mui/material';
import { useState} from 'react'


const AIinfo = () => {
    const { title, category, company, product } = useParams();
    var [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [inputText, setInputText] = useState("");
    const [displayText, setDisplayText] = useState("");
    async function fetchData() {
        try {
            setLoading(true);
            setError("");
            console.log('Sending request with data:', { title, category, company, product });
            const response = await fetch(displayText, {
                method: "POST",
                body: JSON.stringify({
                    "media": title,
                    "media_co": category,
                    "company": company,
                    "product": product
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "ngrok-skip-browser-warning": "true",
                    "Access-Control-Allow-Origin": "*"
                },
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.blob();
            console.log('Received response:', data);
            setImage(URL.createObjectURL(data));
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    }
   

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    setDisplayText(inputText); // Update the displayed text with the current input value
  };
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4, mt: 2 }}>Place Link Here</Typography>
             <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: 'auto', mt: 4 }}>
      
      <form onSubmit={handleSubmit}>
        <TextField label="Enter the link to the endpoint (Check README.md for more info)" value={inputText} onChange={(e) => setInputText(e.target.value)} fullWidth multiline rows={1} margin="normal" variant="outlined" />
        
        <Box sx={{ mt: 2, mb: 3 }}>
          <Button type="submit" variant="contained" color="primary">Add endpoint </Button>
        </Box>
      </form>
    </Paper>
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
                

                <Button variant="contained" onClick={fetchData} disabled={loading || !title || !category || !company || !product}>
                    {loading ? 'Generating...' : 'Generate Ad'}
                </Button>

                {loading && (
                    <Typography>Please wait while we generate the ad... (It may take up to a minute)</Typography>
                )}

                {error && (
                    <Typography color="error">
                        Error: {error}
                    </Typography>
                )}

                {image && (
                    <Box>
                        <Typography variant="h6" gutterBottom>Generated Content:</Typography>
                        <div>
                            {image ? <img src={image} alt="Generated" /> : 'No image generated'}
                        </div>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default AIinfo;