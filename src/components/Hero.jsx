import { Container, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2">Premium Kithul Products</Typography>

      <Typography variant="h6">Natural products from Sri Lanka</Typography>

      <Button variant="contained" sx={{ mt: 2 }}>
        Learn More
      </Button>
    </Container>
  );
}
